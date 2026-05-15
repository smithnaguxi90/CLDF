export default class ChartManager {
  constructor(radarCtx, barCtx, doughnutCtx, lineCtx, subjects, uiManager) {
    this.radarChart = null;
    this.barChart = null;
    this.doughnutChart = null;
    this.lineChart = null;
    this.radarCtx = radarCtx;
    this.barCtx = barCtx;
    this.doughnutCtx = doughnutCtx;
    this.lineCtx = lineCtx;
    this.subjects = subjects;
    this.ui = uiManager;
    this.compactMediaQuery = window.matchMedia("(max-width: 639px)");
    this.handleViewportChange = this.handleViewportChange.bind(this);
    this.colorHexMap = {
      blue: "#2563eb",
      teal: "#0d9488",
      orange: "#ea580c",
      amber: "#f59e0b",
      emerald: "#059669",
      indigo: "#6366f1",
      violet: "#7c3aed",
      rose: "#e11d48",
      cyan: "#0891b2",
      fuchsia: "#c026d3",
    };
    this.META_SIMULADO = 80; // 🎯 EDITE AQUI: Digite a meta para a cor ficar verde!
    this.WARNING_SIMULADO = 70; // ⚠️ EDITE AQUI: Digite a meta intermediária (Amarelo)
    this._isInitialized = false;

    this.bindViewportListener();

    // Lazy Loading com IntersectionObserver
    const chartSection = document.getElementById("intelligence-chart");
    if (chartSection && "IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this._initCharts();
            this.observer.disconnect(); // Para de observar após carregar
          }
        },
        { threshold: 0.1 }, // Dispara quando 10% da seção for visível na tela
      );
      this.observer.observe(chartSection);
    } else {
      this._initCharts(); // Fallback imediato se o navegador for antigo
    }
  }

  _initCharts() {
    if (this._isInitialized) return;
    this.init();
    this._isInitialized = true;

    // Se os dados chegaram enquanto os gráficos estavam invisíveis, renderiza agora
    if (this._pendingUpdateData) {
      this.update(
        this._pendingUpdateData.progress,
        this._pendingUpdateData.visibleSubjects,
        this._pendingUpdateData.simuladoScores,
      );
    }
  }
  bindViewportListener() {
    if (this.compactMediaQuery.addEventListener) {
      this.compactMediaQuery.addEventListener(
        "change",
        this.handleViewportChange,
      );
      return;
    }

    this.compactMediaQuery.addListener(this.handleViewportChange);
  }
  isCompactViewport() {
    return this.compactMediaQuery.matches;
  }
  getLabels() {
    return this.subjects.map((subject) =>
      this.isCompactViewport()
        ? subject.shortName || subject.name
        : subject.name,
    );
  }
  getRadarPointLabelFont() {
    return {
      size: this.isCompactViewport() ? 10 : 14,
      weight: "bold",
    };
  }
  getXAxisFont() {
    return { size: this.isCompactViewport() ? 10 : 14 };
  }
  handleViewportChange() {
    const labels = this.getLabels();

    if (this.radarChart) {
      this.radarChart.data.labels = labels;
      this.radarChart.options.scales.r.pointLabels.font =
        this.getRadarPointLabelFont();
      this.radarChart.update("none"); // Evita recriar a animação 3D ao apenas virar o celular
    }

    if (this.barChart) {
      this.barChart.data.labels = labels;
      this.barChart.options.scales.x.ticks.font = this.getXAxisFont();
      this.barChart.update("none");
    }

    if (this.doughnutChart) {
      this.doughnutChart.update("none");
    }

    if (this.lineChart) {
      this.lineChart.update("none");
    }
  }
  init() {
    // Registra o Plugin DataLabels Globalmente (carregado via CDN em index.html)
    if (typeof ChartDataLabels !== "undefined") {
      Chart.register(ChartDataLabels);
    } else {
      console.warn(
        "ChartDataLabels plugin não foi carregado. Verifique se o CDN está acessível.",
      );
    }

    const labels = this.getLabels();
    const pointColors = this.subjects.map(
      (s) => this.colorHexMap[s.color] || "#94a3b8",
    );

    if (this.radarCtx) {
      if (this.radarChart) this.radarChart.destroy();
      this.radarChart = new Chart(this.radarCtx, {
        type: "radar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Progresso (%)",
              data: [],
              backgroundColor: "rgba(16, 185, 129, 0.25)",
              borderColor: "#10b981",
              borderWidth: 4,
              pointBackgroundColor: pointColors,
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: pointColors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000,
            easing: "easeOutQuart",
          },
          elements: {
            line: { tension: 0.3 }, // Arredonda suavemente as linhas do Radar
          },
          scales: {
            r: {
              angleLines: { color: "rgba(16, 185, 129, 0.2)" },
              grid: { color: "rgba(16, 185, 129, 0.2)" },
              pointLabels: {
                font: this.getRadarPointLabelFont(),
                color: pointColors,
              },
              ticks: {
                backdropColor: "transparent",
                color: "#94a3b8",
                stepSize: 25,
                max: 100,
                min: 0,
                callback: (value) => value + "%",
              },
            },
          },
          plugins: {
            datalabels: { display: false }, // Ocultamos no radar para não poluir visualmente
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.95)", // bg-slate-950 com opacidade
              titleFont: { size: 15, family: "Inter, sans-serif" },
              bodyFont: {
                size: 15,
                family: "Inter, sans-serif",
                weight: "bold",
              },
              padding: 12,
              cornerRadius: 12,
              borderColor: "rgba(51, 65, 85, 0.6)", // border-slate-700
              borderWidth: 1,
              callbacks: {
                label: (context) => ` Progresso: ${context.raw}% Concluído`,
              },
            },
          },
        },
        plugins: [
          {
            id: "radar3D",
            beforeDatasetsDraw(chart) {
              chart.ctx.save();
              chart.ctx.shadowColor = "rgba(16, 185, 129, 0.5)"; // Sombra verde brilhante
              chart.ctx.shadowBlur = 20;
              chart.ctx.shadowOffsetY = 12;
            },
            afterDatasetsDraw(chart) {
              chart.ctx.restore();
            },
          },
        ],
      });
    }

    if (this.barCtx) {
      if (this.barChart) this.barChart.destroy();
      this.barChart = new Chart(this.barCtx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Aulas Concluídas",
              data: [],
              backgroundColor: pointColors,
              borderRadius: 6,
              borderWidth: { top: 2, right: 2, bottom: 0, left: 2 },
              borderColor: pointColors,
              borderSkipped: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 30 } }, // Aumentado para o número não cortar no teto
          animation: {
            duration: 1000,
            easing: "easeOutQuart",
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "rgba(255, 255, 255, 0.05)" },
              ticks: {
                color: "#64748b",
                precision: 0,
                maxTicksLimit: 6,
              },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: "#e2e8f0", // Deixa o texto das disciplinas bem mais brilhante
                font: this.getXAxisFont(),
              },
            },
          },
          plugins: {
            datalabels: {
              display: false,
            },
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              titleFont: { size: 15, family: "Inter, sans-serif" },
              bodyFont: {
                size: 15,
                family: "Inter, sans-serif",
                weight: "bold",
              },
              padding: 12,
              cornerRadius: 12,
              borderColor: "rgba(51, 65, 85, 0.6)",
              borderWidth: 1,
              callbacks: {
                label: (context) => ` Carga Horária: ${context.raw} Aulas`,
              },
            },
          },
        },
        plugins: [
          {
            id: "bar3D",
            beforeDatasetsDraw(chart) {
              chart.ctx.save();
              chart.ctx.shadowColor = "rgba(0, 0, 0, 0.6)"; // Sombra física escura
              chart.ctx.shadowBlur = 15;
              chart.ctx.shadowOffsetX = 8;
              chart.ctx.shadowOffsetY = 8;
            },
            afterDatasetsDraw(chart) {
              chart.ctx.restore();
            },
          },
          {
            id: "barLabels",
            afterDatasetsDraw(chart) {
              const { ctx, data } = chart;

              ctx.font = "bold 14px Inter, sans-serif";
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";

              data.datasets.forEach((dataset, datasetIndex) => {
                const meta = chart.getDatasetMeta(datasetIndex);
                meta.data.forEach((bar, index) => {
                  const value = dataset.data[index];
                  if (value <= 0) return;

                  const color = dataset.borderColor?.[index] || "#cbd5e1";
                  ctx.fillStyle = color;

                  const x = bar.x;
                  const y = bar.y - 8;

                  ctx.fillText(value, x, y);
                });
              });
            },
          },
        ], // Ativa o nosso plugin no gráfico de barras
      });
    }

    if (this.doughnutCtx) {
      // Plugin customizado para desenhar a porcentagem geral no centro da rosca
      const doughnutCenterTextPlugin = {
        id: "doughnutCenterText",
        beforeDraw(chart) {
          const { ctx, width, height } = chart;
          ctx.restore();

          let totalCurrent = 0;
          let totalMax = 0;
          chart.data.datasets.forEach((ds) => {
            totalCurrent += ds.data[0] || 0;
            totalMax += (ds.data[0] || 0) + (ds.data[1] || 0);
          });

          const percent =
            totalMax > 0 ? Math.round((totalCurrent / totalMax) * 100) : 0;

          const fontSize = Math.min(width, height) * 0.18; // Tamanho responsivo maior
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";

          const textX = Math.round(width / 2);
          const textY = Math.round(height / 2);

          ctx.font = `800 ${fontSize}px Inter, sans-serif`;
          ctx.fillStyle = "#f8fafc"; // Branco brilhante

          // Efeito de sombra (profundidade) no texto central 3D
          ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
          ctx.shadowBlur = 15;
          ctx.shadowOffsetY = 5;
          ctx.fillText(`${percent}%`, textX, textY - 5);

          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 0;

          ctx.font = `bold ${fontSize * 0.35}px Inter, sans-serif`;
          ctx.fillStyle = "#94a3b8"; // Cinza ardósia
          ctx.fillText("GERAL", textX, textY + fontSize * 0.7);
          ctx.save();
        },
      };

      if (this.doughnutChart) this.doughnutChart.destroy();
      this.doughnutChart = new Chart(this.doughnutCtx, {
        type: "doughnut",
        data: {
          labels: ["Concluído", "Pendente"],
          datasets: [
            {
              label: "Específicas (TI)",
              data: [0, 100],
              backgroundColor: [
                this.colorHexMap.cyan,
                "rgba(8, 145, 178, 0.1)",
              ], // Cyan
              borderColor: ["#0f172a", "#0f172a"],
              borderWidth: 2,
              borderRadius: [20, 0], // Arredonda as pontas para aspecto de tubo 3D
              hoverOffset: 5,
            },
            {
              label: "Simulados Globais",
              data: [0, 100],
              backgroundColor: [
                this.colorHexMap.fuchsia,
                "rgba(192, 38, 211, 0.1)",
              ], // Fuchsia
              borderColor: ["#0f172a", "#0f172a"],
              borderWidth: 2,
              borderRadius: [20, 0],
              hoverOffset: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%", // Deixa os anéis um pouco mais finos e elegantes
          animation: { duration: 1000, easing: "easeOutQuart" },
          plugins: {
            datalabels: {
              display: false,
              color: "#ffffff",
              textShadowBlur: 8, // O plugin suporta efeitos de sombra no canvas!
              textShadowColor: "rgba(0, 0, 0, 0.8)",
              font: () => ({
                family: "Inter, sans-serif",
                weight: "bold",
                size: this.isCompactViewport() ? 11 : 15,
              }),
              formatter: (value) => (value > 0 ? value : ""),
            },
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              titleFont: { size: 15, family: "Inter, sans-serif" },
              bodyFont: {
                size: 15,
                family: "Inter, sans-serif",
                weight: "bold",
              },
              padding: 12,
              cornerRadius: 12,
              borderColor: "rgba(51, 65, 85, 0.6)",
              borderWidth: 1,
              callbacks: {
                label: (context) => {
                  const label = context.dataset.label || "";
                  const unit =
                    label === "Simulados Globais" ? "Simulados" : "Aulas";
                  const isCompleted = context.dataIndex === 0;
                  return ` ${label}: ${context.raw} ${unit} (${isCompleted ? "Concluído" : "Pendente"})`;
                },
              },
            },
          },
        },
        plugins: [
          doughnutCenterTextPlugin,
          {
            id: "doughnut3D",
            beforeDatasetsDraw(chart) {
              chart.ctx.save();
              chart.ctx.shadowColor = "rgba(0, 0, 0, 0.7)"; // Sombra de profundidade alta
              chart.ctx.shadowBlur = 15;
              chart.ctx.shadowOffsetX = 5;
              chart.ctx.shadowOffsetY = 10;
            },
            afterDatasetsDraw(chart) {
              chart.ctx.restore();
            },
          },
        ],
      });
    }

    if (this.lineCtx) {
      if (this.lineChart) this.lineChart.destroy();
      this.lineChart = new Chart(this.lineCtx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Nota Líquida",
              data: [],
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              segment: {
                borderColor: (ctx) =>
                  ctx.p1.parsed.y >= this.META_SIMULADO
                    ? this.colorHexMap.emerald
                    : ctx.p1.parsed.y >= this.WARNING_SIMULADO
                      ? this.colorHexMap.amber
                      : this.colorHexMap.rose,
              },
              pointBackgroundColor: (context) => {
                const val = context.raw;
                return val >= this.META_SIMULADO
                  ? this.colorHexMap.emerald
                  : val >= this.WARNING_SIMULADO
                    ? this.colorHexMap.amber
                    : this.colorHexMap.rose;
              },
              pointBorderColor: "#fff",
              pointBorderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: (context) => {
                const val = context.raw;
                return val >= this.META_SIMULADO
                  ? this.colorHexMap.emerald
                  : val >= this.WARNING_SIMULADO
                    ? this.colorHexMap.amber
                    : this.colorHexMap.rose;
              },
            },
            {
              label: "Média Geral",
              data: [],
              borderColor: "rgba(148, 163, 184, 0.4)", // Cor cinza/slate sutil
              borderWidth: 2,
              borderDash: [5, 5], // Linha tracejada
              pointRadius: 0, // Oculta as bolinhas dessa linha
              pointHoverRadius: 0,
              fill: false,
              tension: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 40, right: 30, left: 10, bottom: 10 } },
          animation: { duration: 1000, easing: "easeOutQuart" },
          scales: {
            y: {
              beginAtZero: true,
              grace: "5%",
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
                borderDash: [5, 5],
              },
              ticks: {
                color: "#64748b",
                precision: 0,
                maxTicksLimit: 6,
                callback: function (value) {
                  return value + " pts";
                },
              },
            },
            x: {
              grid: { display: false },
              ticks: { color: "#e2e8f0", font: this.getXAxisFont() },
            },
          },
          plugins: {
            datalabels: {
              display: (context) => {
                if (context.datasetIndex === 0) {
                  // Força a exibição da última nota para evitar que seja ocultada por colisões
                  if (context.dataIndex === context.dataset.data.length - 1)
                    return true;
                  return "auto";
                }
                return false;
              },
              color: "#f8fafc",
              backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value >= this.META_SIMULADO
                  ? "rgba(6, 78, 59, 0.9)"
                  : value >= this.WARNING_SIMULADO
                    ? "rgba(120, 53, 15, 0.9)"
                    : "rgba(15, 23, 42, 0.9)";
              },
              borderColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value >= this.META_SIMULADO
                  ? "rgba(16, 185, 129, 0.6)"
                  : value >= this.WARNING_SIMULADO
                    ? "rgba(245, 158, 11, 0.6)"
                    : "rgba(225, 29, 72, 0.4)";
              },
              borderWidth: 1,
              borderRadius: 6,
              padding: { top: 4, bottom: 4, left: 6, right: 6 },
              textShadowColor: "transparent",
              textShadowBlur: 0,
              align: "top",
              offset: 8,
              font: { family: "Inter, sans-serif", weight: "bold", size: 11 },
              formatter: (value) => (value > 0 ? value + " pts" : ""),
            },
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(15, 23, 42, 0.95)",
              titleFont: { size: 15, family: "Inter, sans-serif" },
              bodyFont: {
                size: 15,
                family: "Inter, sans-serif",
                weight: "bold",
              },
              padding: 12,
              cornerRadius: 12,
              borderColor: "rgba(51, 65, 85, 0.6)",
              borderWidth: 1,
              callbacks: {
                title: (context) => {
                  return context[0].label === "Início"
                    ? "Ponto de Partida"
                    : `Simulado de ${context[0].label}`;
                },
                label: (context) => {
                  if (context.datasetIndex === 1) {
                    let status = " (Risco de Reprovação)";
                    if (context.raw >= this.META_SIMULADO) {
                      status = " (Meta Atingida)";
                    } else if (context.raw >= this.WARNING_SIMULADO) {
                      status = " (Quase lá)";
                    }
                    return ` Média Histórica: ${context.raw} pts${status}`;
                  }
                  return ` Resultado: ${context.raw} pts`;
                },
              },
            },
          },
        },
        plugins: [
          {
            id: "line3D",
            beforeDatasetsDraw(chart) {
              chart.ctx.save();
              chart.ctx.shadowColor = "rgba(0, 0, 0, 0.4)"; // Sombra neutra adaptável
              chart.ctx.shadowBlur = 10;
              chart.ctx.shadowOffsetY = 5;
            },
            afterDatasetsDraw(chart) {
              chart.ctx.restore();
            },
          },
        ],
      });
    }
  }
  update(progress, visibleSubjects, simuladoScores = []) {
    // 1. Debounce: Salva o estado e só dispara o processamento pesado do Canvas 250ms após o último clique
    this._pendingUpdateData = { progress, visibleSubjects, simuladoScores };

    // Interrompe se o Lazy Load ainda não tiver disparado
    if (!this._isInitialized) return;

    if (this._updateTimeout) clearTimeout(this._updateTimeout);

    this._updateTimeout = setTimeout(() => {
      const { progress, visibleSubjects, simuladoScores } =
        this._pendingUpdateData;

      if (visibleSubjects) {
        this.subjects = visibleSubjects;
      }

      const labels = this.getLabels();
      const pointColors = this.subjects.map(
        (s) => this.colorHexMap[s.color] || "#94a3b8",
      );

      // Criação de gradientes simulando sombra e profundidade (Cilindros 3D) nas barras
      const barGradients = this.subjects.map((s) => {
        const hex = this.colorHexMap[s.color] || "#94a3b8";
        const gradient = this.barCtx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, hex); // Cor brilhante no topo
        gradient.addColorStop(1, "#020617"); // Sombra profunda na base
        return gradient;
      });

      const radarData = this.subjects.map((s) => {
        const current = progress[s.id] || 0;
        return Math.round((current / s.max) * 100);
      });
      const barData = this.subjects.map((s) => {
        return progress[s.id] || 0;
      });

      if (this.radarChart) {
        this.radarChart.data.labels = labels;
        this.radarChart.data.datasets[0].data = radarData;
        this.radarChart.data.datasets[0].pointBackgroundColor = pointColors;
        this.radarChart.data.datasets[0].pointHoverBorderColor = pointColors;
        this.radarChart.options.scales.r.pointLabels.color = pointColors;
        this.radarChart.update();
      }
      if (this.barChart) {
        this.barChart.data.labels = labels;
        this.barChart.data.datasets[0].data = barData;
        this.barChart.data.datasets[0].backgroundColor = barGradients;
        this.barChart.data.datasets[0].borderColor = pointColors;
        this.barChart.update();
      }

      if (this.doughnutChart) {
        // Gradiente 3D simulando luz e sombra nos "tubos" da rosca
        const tiGradient = this.doughnutCtx.createLinearGradient(0, 0, 0, 300);
        tiGradient.addColorStop(0, this.colorHexMap.cyan);
        tiGradient.addColorStop(1, "#020617");

        const simGradient = this.doughnutCtx.createLinearGradient(0, 0, 0, 300);
        simGradient.addColorStop(0, this.colorHexMap.fuchsia);
        simGradient.addColorStop(1, "#020617");

        this.doughnutChart.data.datasets[0].backgroundColor = [
          tiGradient,
          "rgba(8, 145, 178, 0.05)",
        ];
        this.doughnutChart.data.datasets[1].backgroundColor = [
          simGradient,
          "rgba(192, 38, 211, 0.05)",
        ];

        const tiSub = this.subjects.find((s) => s.id === "ti");
        const simSub = this.subjects.find((s) => s.id === "simulados");

        if (tiSub) {
          const tiCurrent = progress.ti || 0;
          const tiRemaining = Math.max(0, tiSub.max - tiCurrent);
          this.doughnutChart.data.datasets[0].data = [tiCurrent, tiRemaining];
        }
        if (simSub) {
          const simCurrent = progress.simulados || 0;
          const simRemaining = Math.max(0, simSub.max - simCurrent);
          this.doughnutChart.data.datasets[1].data = [simCurrent, simRemaining];
        }
        this.doughnutChart.update();
      }

      if (this.lineChart) {
        // Captura a altura real do gráfico para o gradiente nunca ser cortado
        const chartHeight = this.lineChart.chartArea
          ? this.lineChart.chartArea.bottom
          : 400;

        // Calcula a Média Geral (Histórica) de todos os simulados já feitos
        let globalAverage = 0;
        if (simuladoScores && simuladoScores.length > 0) {
          const sum = simuladoScores.reduce((acc, s) => acc + s.score, 0);
          globalAverage = parseFloat((sum / simuladoScores.length).toFixed(1));
        }

        // Exibe apenas os últimos 10 simulados para o gráfico não ficar espremido
        const recentSimulados = simuladoScores.slice(-10);

        let scoresToRender = recentSimulados.map((s) => s.score);
        let labelsToRender = recentSimulados.map((s) => {
          if (s.date) {
            const parts = s.date.split("-");
            // Retorna no formato DD/MM
            if (parts.length === 3) return `${parts[2]}/${parts[1]}`;
          }
          return "Sim"; // Fallback caso o dado seja antigo e não tenha data
        });

        // Correção Visual: Uma linha precisa de no mínimo 2 pontos.
        // Criamos uma "rampa" a partir do zero para quem fez 1 ou nenhum simulado.
        if (scoresToRender.length === 1) {
          scoresToRender = [0, scoresToRender[0]];
          labelsToRender = ["Início", labelsToRender[0]];
        } else if (scoresToRender.length === 0) {
          scoresToRender = [0, 0];
          labelsToRender = ["Início", "Aguardando..."];
        }

        // Cria o array da média para desenhar a linha reta no gráfico
        const averageData = labelsToRender.map(() => globalAverage);

        // Verifica a cor do fundo baseada na nota mais recente
        const lastScore = scoresToRender[scoresToRender.length - 1] || 0;

        let rgbColor = "225, 29, 72"; // Rose
        if (lastScore >= this.META_SIMULADO)
          rgbColor = "16, 185, 129"; // Emerald
        else if (lastScore >= this.WARNING_SIMULADO) rgbColor = "245, 158, 11"; // Amber

        const lineGradient = this.lineCtx.createLinearGradient(
          0,
          0,
          0,
          chartHeight,
        );

        lineGradient.addColorStop(0, `rgba(${rgbColor}, 0.4)`);
        lineGradient.addColorStop(1, `rgba(${rgbColor}, 0)`);

        this.lineChart.data.labels = labelsToRender;
        this.lineChart.data.datasets[0].data = scoresToRender;
        this.lineChart.data.datasets[0].backgroundColor = lineGradient;
        this.lineChart.data.datasets[1].data = averageData; // Injeta os dados da média

        // Muda a cor da linha tracejada da média para vermelho caso haja risco de reprovação
        this.lineChart.data.datasets[1].borderColor =
          globalAverage >= this.META_SIMULADO
            ? "rgba(16, 185, 129, 0.4)"
            : globalAverage >= this.WARNING_SIMULADO
              ? "rgba(245, 158, 11, 0.5)"
              : "rgba(225, 29, 72, 0.5)";

        this.lineChart.update();

        // Injeta a "Badge" de Média no Título do HTML dinamicamente
        const canvasContainer = this.lineCtx.canvas.closest(".chart-container");
        if (canvasContainer) {
          let badge = canvasContainer.querySelector("#simulado-average-badge");
          if (!badge) {
            const badgeContainer =
              canvasContainer.querySelector("#simulado-badge-container") ||
              canvasContainer.querySelector("h4");
            if (badgeContainer) {
              badge = document.createElement("span");
              badge.id = "simulado-average-badge";
              badgeContainer.appendChild(badge);
            }
          }
          if (badge) {
            let trendHtml = "";
            // Define a seta baseada diretamente se a Média Geral atinge ou não a meta
            if (simuladoScores && simuladoScores.length > 0) {
              if (globalAverage >= this.META_SIMULADO) {
                trendHtml = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>`;
              } else if (globalAverage >= this.WARNING_SIMULADO) {
                trendHtml = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>`;
              } else {
                trendHtml = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-rose-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`;
              }
            }

            badge.innerHTML = `Média: ${globalAverage}${trendHtml}`;

            if (globalAverage >= this.META_SIMULADO) {
              badge.title = "Meta atingida! Continue assim.";
              badge.className =
                "text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-emerald-500/20 text-emerald-400 border-emerald-500/30 transition-colors duration-500 whitespace-nowrap";
            } else if (globalAverage >= this.WARNING_SIMULADO) {
              badge.title = "Atenção: Na zona de aviso, quase batendo a meta!";
              badge.className =
                "text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-amber-500/20 text-amber-400 border-amber-500/30 transition-colors duration-500 whitespace-nowrap";
            } else {
              badge.title =
                "Atenção: Média abaixo do esperado. Risco de reprovação!";
              badge.className =
                "text-[13px] font-black px-3 py-1.5 rounded-lg shadow-sm border inline-flex items-center justify-center bg-rose-500/20 text-rose-400 border-rose-500/30 transition-colors duration-500 whitespace-nowrap";
            }
          }
        }
      }
    }, 250); // Fim do setTimeout
  }

  downloadRadarChart() {
    if (!this.radarChart) return;
    const link = document.createElement("a");
    link.href = this.radarChart.toBase64Image();
    link.download = `cldf_radar_evolucao_${new Date().toISOString().split("T")[0]}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (this.ui) {
      this.ui.showToast("Gráfico salvo como imagem com sucesso!", "success");
    }
  }
}
