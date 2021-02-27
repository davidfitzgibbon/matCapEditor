import * as THREE from "three";
const texture = new THREE.TextureLoader().load("/matCap/metal.png");
const material = new THREE.MeshMatcapMaterial({
  matcap: texture,
});
export default material;
