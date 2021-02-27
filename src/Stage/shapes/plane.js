import * as THREE from "three";
import materials from "../materials";

class Shape {
  constructor(sketch) {
    this.sketch = sketch;
    let geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    let material = materials.basic;
    let mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.5;
    mesh.position.y -= 0.5;
    this.sketch.scene.add(mesh);
  }
}
export default Shape;
