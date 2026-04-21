export default class ChartManager {
  constructor(radarCtx, barCtx, doughnutCtx, subjects, uiManager) {
    this.radarChart = null;
    this.barChart = null;
    this.doughnutChart = null;
    this.radarCtx = radarCtx;
    this.barCtx = barCtx;
    this.doughnutCtx = doughnutCtx;
    this.subjects = subjects;
    this.ui = uiManager;
    this.compactMediaQuery = window.matchMedia("(max-width: 639px)");
    this.handleViewportChange = this.handleViewportChange.bind(this);
    this.colorHexMap = {
      blue: "#2563eb",
      teal: "#0d9488",
      orange: "#ea580c",
      emerald: "#059669",
      indigo: "#6366f1",
      violet: "#7c3aed",
      rose: "#e11d48",
      cyan: "#0891b2",
      fuchsia: "#c026d3",
    };
    this.init();
    this.bindViewportListener();
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
      this.radarChart.update();
    }

    if (this.barChart) {
      this.barChart.data.labels = labels;
      this.barChart.options.scales.x.ticks.font = this.getXAxisFont();
      this.barChart.update();
    }

    if (this.doughnutChart) {
      this.doughnutChart.update();
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
              ticks: { color: "#64748b" },
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
              anchor: "end",
              align: "top",
              offset: 4,
              color: (context) =>
                context.dataset.borderColor[context.dataIndex] || "#cbd5e1",
              font: () => ({
                family: "Inter, sans-serif",
                weight: "bold",
                size: this.isCompactViewport() ? 10 : 14,
              }),
              opacity: (context) => {
                const meta = context.chart.getDatasetMeta(context.datasetIndex);
                const bar = meta.data[context.dataIndex];
                if (bar && bar.y !== undefined && context.chart.scales.y) {
                  const animatedValue = context.chart.scales.y.getValueForPixel(
                    bar.y,
                  );
                  // Fade-in suave: atinge 100% de opacidade quando a barra chega na metade
                  return Math.min(
                    1,
                    Math.max(0, animatedValue / (context.raw * 0.5 || 1)),
                  );
                }
                return 1;
              },
              formatter: (value, context) => {
                if (value <= 0) return "";
                // Efeito Contador animado: Lê o valor atual da barra crescendo a cada frame
                const meta = context.chart.getDatasetMeta(context.datasetIndex);
                const bar = meta.data[context.dataIndex];
                if (bar && bar.y !== undefined && context.chart.scales.y) {
                  const animatedValue = context.chart.scales.y.getValueForPixel(
                    bar.y,
                  );
                  const current = Math.max(0, Math.round(animatedValue));
                  return current > 0 ? Math.min(current, value) : ""; // Trava no valor final
                }
                return value;
              },
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
  }
  update(progress, visibleSubjects) {
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
