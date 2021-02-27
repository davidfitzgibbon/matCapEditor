import Scene from "./scene";
import Renderer from "./renderer";
import Controls from "./controls";
import Camera from "./camera";
import Lights from "./lights";
import Events from "./events";
import Animator from "./animator";
import Plane from "./shapes/plane";
import Box from "./shapes/box";
import Sphere from "./shapes/sphere";
import Torus from "./shapes/torus";

class Sketch {
  constructor() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.scene = new Scene(this);
    this.renderer = new Renderer(this);
    this.camera = new Camera(this);
    this.lights = new Lights(this);
    this.controls = new Controls(this);
    this.events = new Events(this);
    this.animator = new Animator(this);
  }
  init() {
    this.addObjects();
    document.body.appendChild(this.renderer.domElement);
    this.animator.animate();
  }
  addObjects() {
    // PLANE
    this.plane = new Plane(this);

    // SHAPES
    this.box = new Box(this);
    this.sphere = new Sphere(this);
    this.torus = new Torus(this);
  }
}

export default Sketch;
