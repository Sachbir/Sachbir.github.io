class Ray {
    constructor(pos) {
        this.pos = pos;
        this.dir = createVector(1, 0);
    }

    draw() {
        push();

        stroke(255);
        translate(this.pos.x, this.pos.y);
        line(0, 0, 5 * this.dir.x, 5 * this.dir.y);

        pop();
    }

    set_dir(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    check_collide(wall) {

        // wall
        let x1 = wall.x1;
        let y1 = wall.y1;
        let x2 = wall.x2;
        let y2 = wall.y2;
        // ray
        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + this.dir.x;
        let y4 = this.pos.y + this.dir.y;

        let denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (denom == 0) {
            return false
        }

        // Wall
        let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
        // Ray
        let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;

        if (!(0 <= t && t <= 1 && 0 <= u)) {
            return false;
        }

        let x = x1 + t * (x2 - x1);
        let y = y1 + t * (y2 - y1);

        return createVector(x, y);
    }
}