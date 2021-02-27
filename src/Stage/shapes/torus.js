import * as THREE from "three";
import Shape from "./shape";
class Torus extends Shape {
  constructor(sketch) {
    super(sketch);
    this.name = "torus";
    this.geometry = new THREE.TorusKnotGeometry(0.5, 0.1, 160, 16, 3, 2);
    this.init();
  }
  adjust() {
    this.mesh.position.y = 0.2;
  }
}
export default Torus;
