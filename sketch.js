var song;
var fft;
var button;

var spHistory = [];

// makes sure that the sound is fully preloaded before anything else
function preload() {
  song = loadSound('1.mp3');
}

function setup() {
  createCanvas(720, 200);
  angleMode(DEGREES);
  //plays the song when the code runs
  song.play();
  //imports the soundBands as a matrix to fft
  fft = new p5.FFT(.9, 16);

}

function draw() {
  background(0);
  var spectrum = fft.analyze();

  //  graph 1 - creates a shape of the 2nd audio band
  spHistory.push(spectrum[2]);
  beginShape(POINTS);
    noFill();
  //reads the audio file
  for(var i = 0; i < spHistory.length; i++){
    var y = map(spHistory[i], 0,256, height,0)
    stroke(255);
    vertex(i,y);
  }
  endShape();

  //  graph 2 - graphs the 6th audio band
  spHistory.push(spectrum[6]);
  beginShape(POINTS);
    noFill();
  //reads the audio file
  for(var i = 0; i < spHistory.length; i++){
    var y = map(spHistory[i], 0,256, height,0)
    stroke(255);
    vertex(i,y);
  }
  endShape();

  //  graph 3 - graphs the 10th audio band
  spHistory.push(spectrum[10]);
  beginShape(POINTS);
    noFill();
  //reads the audio file
  for(var i = 0; i < spHistory.length; i++){
    var y = map(spHistory[i], 0,256, height,0)
    stroke(255);
    vertex(i,y);
  }
  endShape();


  if(spHistory.length > width){
      spHistory.splice(0, 1);
  }
}
