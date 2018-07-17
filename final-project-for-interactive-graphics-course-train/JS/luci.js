//LUCI

//Luce Ambientale
var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.3);
scene.add(ambientLight);

//PointLight per effetto luna
var light2 = new THREE.PointLight(0xF5F5F5, 0.1);
light2.position.set(300, 700, 300);
scene.add(light2);

//Animazione fuoco 
//Luce Fuoco
var lightFire = new THREE.PointLight(0xFF8C00, 0.3, 100, 2);

var fire = setInterval('change()', 1);

function change() {
    lightFire.intensity += (getRandomIntInclusive(-2, 2) / 25);
}

lightFire.position.set(30, 5, -30);

lightFire.castShadow = true;

lightFire.shadow.mapSize.width = 512; // default
lightFire.shadow.mapSize.height = 512; // default
lightFire.shadow.camera.near = 0.1; // default
lightFire.shadow.camera.far = 500; // default

scene.add(lightFire);