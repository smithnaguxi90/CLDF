export default class ChartManager {
  constructor(radarCtx, barCtx, subjects) {
    this.radarChart = null;
    this.barChart = null;
    this.radarCtx = radarCtx;
    this.barCtx = barCtx;
    this.subjects = subjects;
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
      size: this.isCompactViewport() ? 9 : 10,
      weight: "bold",
    };
  }
  getXAxisFont() {
    return { size: this.isCompactViewport() ? 9 : 10 };
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
  }
  init() {
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
              backgroundColor: "rgba(5, 150, 105, 0.2)",
              borderColor: "rgba(5, 150, 105, 0.5)",
              borderWidth: 1.5,
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
              angleLines: { color: "rgba(255, 255, 255, 0.1)" },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
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
          plugins: { legend: { display: false } },
        },
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
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "rgba(255, 255, 255, 0.05)" },
              ticks: { color: "#64748b" },
            },
            x: {
              grid: { display: false },
              ticks: {
                color: "#64748b",
                font: this.getXAxisFont(),
              },
            },
          },
          plugins: { legend: { display: false } },
        },
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
      this.barChart.data.datasets[0].backgroundColor = pointColors;
      this.barChart.update();
    }
  }

  downloadChart() {
    if (!this.radarChart) return;
    const link = document.createElement("a");
    link.href = this.radarChart.toBase64Image();
    link.download = `cldf_radar_evolucao_${new Date().toISOString().split("T")[0]}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (window.App && window.App.ui) {
      window.App.ui.showToast(
        "Gráfico salvo como imagem com sucesso!",
        "success",
      );
    }
  }
}
