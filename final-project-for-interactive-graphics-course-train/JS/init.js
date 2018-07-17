//Inizializzazione scena e camera

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

//Gestione Finestra interfaccia in funzione delle modifiche dalla finestra del Browser
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//Funzione renderer

var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas'),
    antialias: true
});
//Abilitazione ombre
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.type = THREE.PCFShadowMap; // default THREE.PCFShadowMap

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
document.body.appendChild(renderer.domElement);

//Controllo con il mouse della vista 
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

//Caricamento prima inquadratura
camera.position.z = 250;
camera.position.y = 250;
camera.rotation.x = -0.5;

//Linee guida su scena
//scene.add(new THREE.AxesHelper(2));
//scene.add(new THREE.GridHelper(2, 1));

//Aggiornamento
var update = function () {

};
//Rendering
var render = function () {
    controls.update();
    renderer.render(scene, camera);
};

//Run Game loop(update, render, repeat+)
var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
};
GameLoop();

//Testo info
function showText() {
    var v = document.getElementById("info").style.display;
    if (v == 'block') {
        document.getElementById("info").style.display = 'none';
    } else {
        document.getElementById("info").style.display = 'block';
    }
}
