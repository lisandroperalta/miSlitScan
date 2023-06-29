let capture;
let fotogramas = [];
let feta;
let fetaPrincipio;
let fetaFinal;
const cantidadDeFotogramas = 100;
let iniciar = true;
let anchoFeta = 10;

function setup() {
  createCanvas(1280, 720);
  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
}

function draw() {


  fotogramas.push(capture.get());

  //image(capture.get(320,0,10,480),100,100);



  for (let i = fotogramas.length - 1; i > 0; i--) {
    feta = fotogramas[i].get(640, 0, 9, 720);
    // flip over vertical axis
    push();
    translate(968 - (8 * i), 0);
    scale(-1, 1);
    
    image(feta,0 ,0, 9, 720);
    pop();

  }
  fetaFinal = fotogramas[0].get(0, 0, 640, 720);
  fetaPrincipio = fotogramas[fotogramas.length - 1].get(640, 0, 640, 720);


  // flip over vertical axis
  push();
  // new origin
  translate(327, 0);
  scale(-1, 1);
  //draws from upper right corner
  image(fetaPrincipio, 0, 0, 0, 720);

  pop();

  // flip over vertical axis
  push();
  // new origin
  translate(1280 + 320, 0);
  scale(-1, 1);
  //draws from upper right corner
  image(fetaFinal, 0, 0, 0, 720);

  pop();







  if (fotogramas.length >= 80) {
    fotogramas.splice(0, 1);
  }

  if (frameCount % 2 == 0) {

    console.log(frameRate());

  }
}




