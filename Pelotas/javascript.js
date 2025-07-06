const ANCHO = 380, ALTO = 280;
const GRAVEDAD = 0.1;

class Pelota {
  constructor(x, y, vx, vy, id) {
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.id = id;
  }
  
  coloca() {
    let element = document.getElementById(this.id);
    element.style.left = this.x + 'px';
    element.style.bottom = this.y + 'px';
  }
  
  mueve() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x <= 0 || this.x >= ANCHO) this.vx = -this.vx;
    if (this.y <= 0 || this.y >= ALTO) this.vy = -this.vy;
    else this.vy -= GRAVEDAD;
    this.coloca();
  }
}

function mueveElementos() {
    for (let pelota of pelotas) {
        pelota.mueve();
    }
}

let pelotas = [
    pelota1 = new Pelota(0, 250, 2, 1, 'pelota1'),
    pelota2 = new Pelota(100, 200, 2, 1, 'pelota2'),
    pelota3 = new Pelota(200, 150, 2, 1, 'pelota3')
];

setInterval(mueveElementos, 10);