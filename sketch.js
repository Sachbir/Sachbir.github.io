let canvas_width = 400;
let canvas_height = 400;

let walls = [];
let light;

let xoff = 0;
let yoff = 1000;

function setup() {

    createCanvas(canvas_width, canvas_height);

    light = new Light(100, 200);

    walls.push(new Boundary(100, 300, 120, 250));
    walls.push(new Boundary(180, 250, 200, 300));
    walls.push(new Boundary(180, 250, 120, 250));

    walls.push(new Boundary(130, 225, 150, 175));
    walls.push(new Boundary(170, 225, 150, 175));
    walls.push(new Boundary(130, 225, 170, 225));

    walls.push(new Boundary(225, 300, 225, 225));
    walls.push(new Boundary(225, 225, 275, 300));
    walls.push(new Boundary(275, 250, 225, 175));
    walls.push(new Boundary(275, 175, 275, 250));

    walls.push(new Boundary(0, 0, canvas_width, 0));
    walls.push(new Boundary(0, 0, 0, canvas_height));
    walls.push(new Boundary(canvas_width, 0, canvas_width, canvas_height));
    walls.push(new Boundary(0, canvas_height, canvas_width, canvas_height));
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

    for (let wall of walls) {
        wall.draw();
    }
}