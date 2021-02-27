import * as THREE from "three";
const texture = new THREE.TextureLoader().load("/matCap/greenToon.png");
console.log(texture);
const material = new THREE.MeshMatcapMaterial({
  matcap: texture,
});
export default material;
