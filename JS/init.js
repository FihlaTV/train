//Inizializzazione scena e camera

var scene = new THREE.Scene();

var cameraFree = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
//var camera = cameraFree;


//Gestione Finestra interfaccia in funzione delle modifiche dalla finestra del Browser
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    cameraFree.aspect = width / height;
    cameraFree.updateProjectionMatrix();
    //cameraTrain.aspect = width/height;
    //cameraTrain.updateProjectionMatrix();
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
var controls = new THREE.OrbitControls(cameraFree, renderer.domElement);
controls.update();

//Caricamento prima inquadratura
cameraFree.position.z = 250;
cameraFree.position.y = 250;
cameraFree.rotation.x = -0.5;

//Linee guida su scena
//scene.add(new THREE.AxesHelper(2));
//scene.add(new THREE.GridHelper(2, 1));

var changeCamera = true;

function changeCameraTrain() {
    if (changeCamera == false) {
        cameraFree.position.z = treno.position.z + 152;
        cameraFree.position.y = (treno.position.y + 12.5);
        cameraFree.position.x = (treno.position.x + 30);
        controls.target = new THREE.Vector3(-20.6, 1.5, 152);
        controls.update();
        treno.add(cameraFree);
        cameraFree.updateProjectionMatrix();
    } else {
        cameraFree.position.z = 250;
        cameraFree.position.y = 250;
        cameraFree.rotation.x = -0.5;
        treno.remove(cameraFree);
        cameraFree.updateProjectionMatrix();
        controls.update();
    }
}


document.getElementById("CameraTrain").onclick = function () {
    changeCamera = !changeCamera;
    changeCameraTrain();
};

//Aggiornamento
var update = function () {

};
//Rendering
var render = function () {
    controls.update();
    renderer.render(scene, cameraFree);
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
