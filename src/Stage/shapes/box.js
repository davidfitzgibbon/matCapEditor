import * as THREE from "three";
import Shape from "./shape";
class Box extends Shape {
  constructor(sketch) {
    super(sketch);
    this.name = "box";
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.init();
  }
}
export default Box;
