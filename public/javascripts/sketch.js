function setup() {
  noCanvas();
  console.log("p5!");
  loadJSON("/all", returnData);
}

function draw() {}

function returnData(data) {
  console.log(data);
}
