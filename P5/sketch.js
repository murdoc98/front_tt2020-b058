// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Linear Regression with TensorFlow.js
// Video: https://www.youtube.com/watch?v=dLp10CFIvxI

let x_vals = [];
let y_vals = [];
let m, b;
let lastValue;
const startDate = Date.now();

const learningRate = 0.7;
const optimizer = tf.train.sgd(learningRate);

function setup() {
  createCanvas(1000, 800);
  m = tf.variable(tf.scalar(random(1)));
  b = tf.variable(tf.scalar(random(1)));
}

function loss(pred, labels) {
  return pred
    .sub(labels)
    .square()
    .mean();
}

function predict(x) {
  const xs = tf.tensor1d(x);
  // y = mx + b;
  const ys = xs.mul(m).add(b);
  return ys;
}

function mousePressed() {
  const x = Date.now() - startDate;
  let y;
  if(lastValue) y = randomIntFromInterval(Math.max(lastValue - 10, 1), Math.min(lastValue + 10, 99))
  else y = randomIntFromInterval(0, 100);
  lastValue = y;
  console.log(y);
  x_vals.push(map(x, 0, (1000 * 60), 0, 1));
  y_vals.push(map(y, 0, 100, 1, 0));
}

function draw() {
  tf.tidy(() => {
    if (x_vals.length > 0) {
      const ys = tf.tensor1d(y_vals);
      optimizer.minimize(() => loss(predict(x_vals), ys));
    }
  });

  background(0);

  stroke(255);
  strokeWeight(8);
  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], 0, 1, 0, width);
    let py = map(y_vals[i], 1, 0, height, 0);
    point(px, py);
  }

  const lineX = [1, 0];

  const ys = tf.tidy(() => predict(lineX));
  let lineY = ys.dataSync();
  ys.dispose();

  let x1 = map(lineX[0], 0, 1, 0, width);
  let x2 = map(lineX[1], 0, 1, 0, width);

  let y1 = map(lineY[0], 0, 1, 0, height);
  let y2 = map(lineY[1], 0, 1, 0, height);

  strokeWeight(2);
  line(x1, y1, x2, y2);
  //noLoop();
}

const randomIntFromInterval = (min, max)  => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
