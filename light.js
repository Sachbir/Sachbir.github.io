class Light {

    num_rays = 900;

    constructor(x, y) {

        this.pos = createVector(x, y);

        this.rays = [];

        for (let i = 0; i < this.num_rays; i++) {
            let r = new Ray(this.pos);
            r.dir.rotate(i * 2 * Math.PI / this.num_rays);
            this.rays.push(r);
        }
    }

    update(walls) {

        stroke(255, 100);
        for (let ray of this.rays) {

            let closest_dist = Infinity;
            let closest_pt = null;

            for (let wall of walls) {
                let collide_point = ray.check_collide(wall);

                if (!collide_point) {
                    continue;
                }

                let dist = ray.pos.dist(collide_point);

                if (dist < closest_dist) {
                    closest_dist = dist;
                    closest_pt = collide_point;
                }
            }

            if (closest_pt) {
                line(this.pos.x, this.pos.y, closest_pt.x, closest_pt.y);
            }
        }
    }

    update_pos(x, y) {
        this.pos.x = x;
        this.pos.y = y;

        for (let i = 0; i < this.rays; i++) {
            let ray = this.rays[i];
            ray.pos = this.pos
        }
    }

    draw() {
        stroke(255);
        circle(this.pos.x, this.pos.y, 5);
        for (let i = 0; i < this.rays.length; i++) {
            this.rays[i].draw();
        }
    }
}