import * as THREE from 'three';

// ------- scene + camera -------
const scene = new THREE.Scene();
let width = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

// ------- renderer -------
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild( renderer.domElement );
camera.position.set(0, 0, 10);

// ------- Responsive design -------
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

// ------ Ojects ------
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color : 0xff00ff });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// ------- animate -------
function animate() {


  renderer.render( scene, camera );
  renderer.setAnimationLoop( animate );
}

animate();