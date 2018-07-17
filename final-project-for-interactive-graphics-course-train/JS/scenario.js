//Creazione SCENARIO
//Texture scenario

//Tetto Top
var tettoGeometry = new THREE.CubeGeometry(1000, 1, 1000);
var tettoMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load('img/scenario/grimmnight_up.jpg'),
    side: THREE.DoubleSide
});
var tettoCube = new THREE.Mesh(tettoGeometry, tettoMaterial);
tettoCube.position.y = 500;
scene.add(tettoCube);

//muro di destra
var muroDxGeometry = new THREE.CubeGeometry(1, 1000, 1000);
var muroDxMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load('img/scenario/grimmnight_rt.jpg'),
    side: THREE.DoubleSide
});
var muroDxCube = new THREE.Mesh(muroDxGeometry, muroDxMaterial);
muroDxCube.position.x = 500;
scene.add(muroDxCube);

//muro di sinistra
var muroSxGeometry = new THREE.CubeGeometry(1, 1000, 1000);
var muroSxMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load('img/scenario/grimmnight_lf.jpg'),
    side: THREE.DoubleSide
});
var muroSxCube = new THREE.Mesh(muroSxGeometry, muroSxMaterial);
muroSxCube.position.x = -500;
scene.add(muroSxCube);

//Front
var frontGeometry = new THREE.CubeGeometry(1000, 1000, 1);
var frontMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load('img/scenario/grimmnight_bk.jpg'),
    side: THREE.DoubleSide
});
var frontCube = new THREE.Mesh(frontGeometry, frontMaterial);
frontCube.position.z = -500;
scene.add(frontCube);

//Back
var backGeometry = new THREE.CubeGeometry(1000, 1000, 1);
var backMaterial = new THREE.MeshLambertMaterial({
    map: new THREE.TextureLoader().load('img/scenario/grimmnight_ft.jpg'),
    side: THREE.DoubleSide
});
var backCube = new THREE.Mesh(backGeometry, backMaterial);
backCube.position.z = +500;
scene.add(backCube);

//AMBIENTAZIONE
//TERRENO
var baseGeometry = new THREE.CubeGeometry(1000, 1, 1000);
var baseMaterial = new THREE.MeshStandardMaterial({
    color: 0x006400,
    intensity: 0.2,
});
var baseCube = new THREE.Mesh(baseGeometry, baseMaterial);
baseCube.receiveShadow = true;
baseCube.castShadow = true;
baseCube.position.y = 0;
scene.add(baseCube);

//Rotaie
var rotaiaInteraGeometry = new THREE.TorusGeometry(150, 0.3, 32, 100);
var rotaiaMaterial = new THREE.MeshPhongMaterial({
    color: 0x778899
});
var rotaiaInterna = new THREE.Mesh(rotaiaInteraGeometry, rotaiaMaterial);
rotaiaInterna.receiveShadow = true;
rotaiaInterna.castShadow = true;
rotaiaInterna.rotation.x = 1.5708;
rotaiaInterna.position.y = +1.3;
scene.add(rotaiaInterna);

var rotaiaEsternaGeometry = new THREE.TorusGeometry(154, 0.3, 32, 100);
var rotaiaEsterna = new THREE.Mesh(rotaiaEsternaGeometry, rotaiaMaterial);
rotaiaEsterna.receiveShadow = true;
rotaiaEsterna.castShadow = true;
rotaiaEsterna.rotation.x = 1.5708;
rotaiaEsterna.position.y = +1.3;
scene.add(rotaiaEsterna);