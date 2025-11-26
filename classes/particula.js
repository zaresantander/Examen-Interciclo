class Particula {
    constructor(_x, _y){
        this.pos = createVector(_x, _y);

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.5, 2));

        this.tVida = int(random(100, 300));
        this.tVidaInicial = this.tVida;
        this.estaMuerta = false;

        this.diam = random (5, 20);

        this.velAngular = random(0.01, 0.2);

        this.paleta = [
            color(166, 119, 202, 150), 
            color(171, 167, 227, 150), 
            color(137, 12, 80,   150), 
            color(235, 95, 122, 150)
        ];

            this.colorInicio = random(this.paleta);
            this.colorFin    = random(this.paleta);
    }

    update(_estaMoviendo) {
        if(!this.estaMuerta) {
            if(_estaMoviendo === false) {} else {
                this.vel.rotate(this.velAngular);
            }
        }
            this.pos.add(this.vel);
            this.velAngular = random(-0.2, 0.2);
            this.tVida -= 1;
        
            if(this.tVida <= 0 && !this.estaMuerta){
            this.estaMuerta = true;
        }

    }

    display(_estaMoviendo){

        let progreso = map(this.tVida, this.tVidaInicial, 0, 1, 0);

        let c = lerpColor(this.colorInicio, this.colorFin, progreso);

        fill(c);
        noStroke();

        this.diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
        circle(this.pos.x, this.pos.y, this.diamFinal);

    }
}       

