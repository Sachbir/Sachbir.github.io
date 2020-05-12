let canvas_width = 400;
let canvas_height = 400;

let walls = [];
let light;

let xoff = 0;
let yoff = 1000;

function setup() {

    createCanvas(canvas_width, canvas_height);

    light = new Light(100, 200);

    for (let i = 0; i < 5; i++) {

        let x1 = random(canvas_width);
        let y1 = random(canvas_height);
        let x2 = random(canvas_width);
        let y2 = random(canvas_height);

        walls.push(new Wall(x1, y1, x2, y2));
    }
    walls.push(new Wall(0, 0, canvas_width, 0));
    walls.push(new Wall(0, 0, 0, canvas_height));
    walls.push(new Wall(canvas_width, 0, canvas_width, canvas_height));
    walls.push(new Wall(0, canvas_height, canvas_width, canvas_height));
}

function draw() {
    background(0);
    noSmooth();

    if (mouseIsPressed) {
        light.update_pos(mouseX, mouseY);
    } else {
        light.update_pos(noise(xoff) * canvas_width, noise(yoff) * canvas_height);
        xoff += 0.01
        yoff += 0.01
    }
    light.update(walls);
    light.draw();

    // for (let wall of walls) {
    //     wall.draw();
    // }
}