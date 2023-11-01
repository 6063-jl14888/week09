let nSlider;


function setup() {
  createCanvas(windowWidth, windowHeight);

  nSlider = createSlider(1,1000,1,10);
  nSlider.position(600,100);
}

let gridSize = 2;

function draw() {

  background(0);
  stroke(0)
  let nscale = nSlider.value();

  for (let y = 0; y < height; y+= grideSize){
    let rc = floor(random(o,256));
    for (let x = 0; x < width; x+= grideSize);
    let fc = 225 * noise(x/nscale);
    fill(fc);
    rect(x, y, gridSize,gridSize);
  }
}
 