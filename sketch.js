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
  capture.size(640, 480);
  capture.hide();
}

function draw() {


  let miImagen;
  fotogramas.push(capture.get());

  //image(capture.get(320,0,10,480),100,100);



  for (let i = fotogramas.length - 1; i > 0; i--) {
    feta = fotogramas[i].get(320, 0, 10, 480);
    image(feta, 900 - 10 * i, 0, 100, 480);
  }
  fetaFinal = fotogramas[0].get(0, 0, 320, 480);
  fetaPrincipio = fotogramas[fotogramas.length - 1].get(320, 0, 320, 480);


    // flip over vertical axis
    push();
    // new origin
  translate(320, 0);
  scale(-1, 1);
  //draws from upper right corner
  image(fetaPrincipio, 0, 0, 320, 480);
  
  pop();

      // flip over vertical axis
      push();
      // new origin
    translate(1200, 0);
    scale(-1, 1);
    //draws from upper right corner
    image(fetaFinal, 0, 0, 320, 480);
    
    pop();
  

  




  if (fotogramas.length >= 60) {
    fotogramas.splice(0, 1);
  }

  if (frameCount % 2 == 0) {

    console.log(frameRate());

  }
}





