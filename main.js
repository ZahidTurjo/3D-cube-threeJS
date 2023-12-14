import * as THREE from 'three'

const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer= new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement)
window.addEventListener('resize',()=>{
    const width=window.innerWidth;
    const height= window.innerHeight;
    renderer.setSize(width,height)
    camera.aspect=width/height;
    camera.updateProjectionMatrix()
})

const geometry= new THREE.BoxGeometry(2,2,2)
const material= new THREE.MeshBasicMaterial(
    {
        color:0x00ff00,
        wireframe:true
    }
)
const cube= new THREE.Mesh(geometry,material)
scene.add(cube)
camera.position.z=5

function animation(){
    requestAnimationFrame(animation)
    renderer.render(scene,camera);
}

animation()