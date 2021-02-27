import * as THREE from "three";

class Animator {
  constructor(sketch, settings) {
    this.sketch = sketch;
    this.settings = { ...settings };

    this.tasks = [];

    this.frameCount = 0;
  }
  add(fn) {
    this.tasks.push(fn);
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.frameCount++;

    this.tasks.forEach((task) => task());

    this.sketch.renderer.update();
  }
}
export default Animator;
