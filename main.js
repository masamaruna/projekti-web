import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {AmbientLight, Mesh} from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(20, 2, 0.1, 1000); // fov, aspect ratio, clip start, clip end (constraints)

const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector("canvas"), alpha: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setClearColor( 0x000000, 0 );

camera.position.set(0,0,1);

const loader = new GLTFLoader();

loader.load( "assets/3d-models/maslenica-3d-model.glb", function ( gltf ) {

    gltf.scene.scale.set(0.03, 0.03, 0.03);
    scene.add(gltf.scene);

    const light = new THREE.PointLight( 0xffffff, 1, 1000 );
    light.position.set( 0, 10, 4 );
    light.castShadow = true; // default false
    scene.add( light );

}, undefined, function ( error ) {

    console.error( error );

} );

function animate() {
    render();
    resizeCanvasToDisplaySize();
    requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
    scene.rotation.x = 0.3;
}

function render() {
    renderer.render(scene, camera);
}

function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width ||canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // set render target sizes here
    }
}

render();
animate();