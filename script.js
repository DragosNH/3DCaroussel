import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ------- scene + camera -------
const scene = new THREE.Scene();
let width = window.innerWidth;
let height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

// ------- renderer -------
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild( renderer.domElement );
camera.position.set(0, 0, 20);

// ------- Responsive design -------
window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

const controls = new OrbitControls( camera, renderer.domElement );

// ------ Ojects ------

/*  Plane test
const geometry = new THREE.PlaneGeometry( 3.5, 5 );
const material = new THREE.MeshBasicMaterial({
    color : 0x5f90af,
    side: THREE.DoubleSide,
});
const firstPlane = new THREE.Mesh(geometry, material);
const secondPlane = new THREE.Mesh(geometry, material);
const thirdPlane = new THREE.Mesh(geometry, material);
const forthPlane = new THREE.Mesh(geometry, material);

const pivot = new THREE.Object3D();

firstPlane.position.z = -5;
secondPlane.position.z = 5;
thirdPlane.position.x = 5;
thirdPlane.rotation.y = 5;
forthPlane.position.x = -5.5;
forthPlane.rotation.y = -5;

scene.add(pivot);
pivot.add(firstPlane);
pivot.add(secondPlane);
pivot.add(thirdPlane);
pivot.add(forthPlane);
*/

// Cylinder Test
const pivot = new THREE.Object3D();
scene.add(pivot);

const geometry = new THREE.CylinderGeometry(3.5, 3.5, 5, 25, true, 10, 10, 1);
const firstMaterial = new THREE.MeshBasicMaterial({
    color : 0x5f90af,
    side: THREE.DoubleSide,
});
const firstFace = new THREE.Mesh(geometry, firstMaterial);
firstFace.position.z = 5


pivot.add(firstFace);




// ------- animate -------
function animate() {

    pivot.rotation.y += 0.010;

    controls.update();
    renderer.render( scene, camera );
    renderer.setAnimationLoop( animate );
}

animate();