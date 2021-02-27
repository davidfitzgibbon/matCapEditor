import * as THREE from "three";
import Shape from "./shape";
class Sphere extends Shape {
  constructor(sketch) {
    super(sketch);
    this.name = "sphere";
    this.geometry = new THREE.SphereGeometry(0.75, 32, 32);
    this.init();
    this.adjust;
  }
  adjust() {
    this.mesh.position.y = 0.2;
  }
}
export default Sphere;
