let sp = [];
let estaMoviendo = false;
let stopTimer;

function setup() {
    angleMode(DEGREES);
	createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(69, 37, 162, 10);

    if (estaMoviendo) {
		for (let i = 0; i < sp.length - 1; i++) {
			noFill();
			stroke(235, 95, 122, 80);
			line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
		}
	}

    for(const [index, particula] of sp.entries()) {
        particula.update(estaMoviendo);
        particula.display(estaMoviendo);
        if(particula.estaMuerta){
            sp.splice(index, 1); 
            // console.log(" n Particulas: " + sp.length);
        }
    }

    let np = new Particula(mouseX, mouseY);
	sp.push(np);

	console.log(estaMoviendo);
    
}

function mouseClicked(){
    let cantidad = 40;

    for(let i = 0; i < cantidad; i++){
        let np = new Particula(mouseX, mouseY);
    
        np.vel = p5.Vector.random2D();
        np.vel.setMag(random(2, 6));

        sp.push(np);
        //console.log('n Particulas: ' + sp.length);
    }

    
}

function mouseMoved(){
    estaMoviendo = true;

    clearTimeout(stopTimer);
    
    stopTimer = setTimeout(() => {
        estaMoviendo = false;
    }, 100);
}