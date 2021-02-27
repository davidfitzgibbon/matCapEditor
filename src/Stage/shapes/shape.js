import * as THREE from "three";
import materials from "../materials";

class Shape {
  constructor(sketch) {
    this.sketch = sketch;
    this.name = "shape";
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = materials.greenToon;
  }
  init() {
    // create the mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // add to the scene
    this.sketch.scene.add(this.mesh);

    // check for visiblility on animation
    this.sketch.animator.add(() => {
      if (this.sketch.animator.frameCount % 120 == 0) {
        // console.log(this.name, this.mesh.visible);
      }
      if (this.sketch.settings.shape == this.name) {
        this.mesh.visible = true;
      } else {
        this.mesh.visible = false;
      }
      if (materials[this.sketch.settings.material] !== this.mesh.material) {
        this.mesh.material = materials[this.sketch.settings.material];
      }
    });
    this.adjust();
  }
  adjust() {
    return true;
  }
}
export default Shape;
