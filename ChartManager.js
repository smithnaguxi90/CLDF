export default class ChartManager {
  constructor(ctx, subjects) {
    this.chart = null;
    this.ctx = ctx;
    this.subjects = subjects;
    this.init();
  }
  init() {
    if (!this.ctx) return;
    const labels = this.subjects.map((s) => s.name);
    const colorHexMap = {
      emerald: "#059669",
      teal: "#0d9488",
      indigo: "#6366f1",
      orange: "#f97316",
    };
    const pointColors = this.subjects.map(
      (s) => colorHexMap[s.color] || "#94a3b8",
    );

    this.chart = new Chart(this.ctx, {
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
        scales: {
          r: {
            angleLines: { color: "rgba(0, 0, 0, 0.1)" },
            grid: { color: "rgba(0, 0, 0, 0.1)" },
            pointLabels: {
              font: { size: 10, weight: "bold" },
              color: pointColors,
            },
            ticks: {
              backdropColor: "transparent",
              color: "#64748b",
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
  update(progress) {
    if (!this.chart) return;
    const data = this.subjects.map((s) => {
      const current = progress[s.id] || 0;
      return Math.round((current / s.max) * 100);
    });
    this.chart.data.datasets[0].data = data;
    this.chart.update();
  }

  downloadChart() {
    if (!this.chart) return;
    const link = document.createElement("a");
    link.href = this.chart.toBase64Image();
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
