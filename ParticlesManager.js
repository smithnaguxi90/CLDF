export default class ParticlesManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = null;
    this.particles = [];

    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    // Ajusta a quantidade de partículas com base na largura da tela (menos partículas no celular)
    this.particleCount = window.innerWidth < 768 ? 30 : 70;

    this.init();

    // Garante que o canvas se redimensione se o usuário mudar o tamanho da janela
    window.addEventListener("resize", () => {
      this.resize();
      this.particles = [];
      this.createParticles();
    });
  }

  init() {
    this.resize();
    this.createParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Atualiza e desenha cada partícula
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      // Faz a partícula "quicar" invisivelmente nas bordas
      if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = "rgba(16, 185, 129, 0.6)"; // Cor verde esmeralda
      this.ctx.fill();

      // Desenha as "teias" / "conexões" entre partículas próximas
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let distance = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (distance < 80) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * (1 - distance / 80)})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}