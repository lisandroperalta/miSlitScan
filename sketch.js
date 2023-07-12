let pantallaTrasera;

let capture;
let fotogramas = [];
let feta;
let fetaPrincipio;
let fetaFinal;
const cantidadDeFotogramas = 100;
let iniciar = true;
let anchoFeta = 10;

function setup() {

  createCanvas(innerWidth, innerHeight);


  pantallaTrasera = createGraphics(1280, 720);


  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
  noCursor();

}

function draw() {


  fotogramas.push(capture.get());



  for (let i = fotogramas.length - 1; i > 0; i--) {
    feta = fotogramas[i].get(640, 0, 9, 720);
    // flip over vertical axis
    pantallaTrasera.push();
    pantallaTrasera.translate(968 - (8 * i), 0);
    pantallaTrasera.scale(-1, 1);

    pantallaTrasera.image(feta, 0, 0, 9, 720);
    pantallaTrasera.pop();

  }
  fetaFinal = fotogramas[0].get(0, 0, 640, 720);
  fetaPrincipio = fotogramas[fotogramas.length - 1].get(640, 0, 640, 720);


  // flip over vertical axis
  pantallaTrasera.push();
  // new origin
  pantallaTrasera.translate(327, 0);
  pantallaTrasera.scale(-1, 1);
  //draws from upper right corner
  pantallaTrasera.image(fetaPrincipio, 0, 0, 0, 720);

  pantallaTrasera.pop();

  // flip over vertical axis
  pantallaTrasera.push();
  // new origin
  pantallaTrasera.translate(1280 + 320, 0);
  pantallaTrasera.scale(-1, 1);
  //draws from upper right corner
  pantallaTrasera.image(fetaFinal, 0, 0, 0, 720);

  pantallaTrasera.pop();




  image(pantallaTrasera, 0, 0, width, height);



  if (fotogramas.length >= 80) {
    fotogramas.splice(0, 1);
  }

  if (frameCount % 2 == 0) {

    console.log(frameRate());

  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function keyPressed() {
  if (key == ' ') {
    saveCanvas(pantallaTrasera, "screenshot" + frameCount, "png");

  }
}   