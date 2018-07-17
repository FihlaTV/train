//MODELLI

//Modelli Ambiente
//Alberi 

//prende due numeri integer random tra due valori inclusi
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Tipologia albero 1
var loader = new THREE.JSONLoader();
loader.load('./models/TREE/Albero1.json', addModel1);

function addModel1(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    var mx = 70; //variabile posizione su x
    var mz = 70; //variabile posizione su z
    var ry = 20; //variabile rotazione modello 
    for (var i = 0; i < 45; i++) {
        albero1 = new THREE.Mesh(geometry, material);
        albero1.receiveShadow = true;
        albero1.castShadow = true;
        albero1.scale.set(5, 5, 5);
        albero1.position.x = mx;
        albero1.position.z = mz;
        albero1.rotation.y = ry;

        scene.add(albero1);
        var mx = getRandomIntInclusive(-50, -400);
        var mz = getRandomIntInclusive(-300, 420);

        ry = getRandomIntInclusive(0, 50);
    }
};

//Tipologia albero 2
var loader = new THREE.JSONLoader();
loader.load('./models/TREE/Albero2.json', addModel2);

function addModel2(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    var mx2 = 60; //variabile posizione su x
    var mz2 = 60; //variabile posizione su z
    var ry2 = 20; //variabile rotazione modello 
    for (var i = 0; i < 55; i++) {
        albero2 = new THREE.Mesh(geometry, material);
        albero2.receiveShadow = true;
        albero2.castShadow = true;
        albero2.scale.set(5, 5, 5);
        albero2.position.x = mx2;
        albero2.position.z = mz2;
        albero2.rotation.y = ry2;

        var mx2 = getRandomIntInclusive(50, 400);
        var mz2 = getRandomIntInclusive(-250, 350);

        ry2 = getRandomIntInclusive(0, 50);

        scene.add(albero2);
    }
};

//Tipologia albero 3
var loader = new THREE.JSONLoader();
loader.load('./models/TREE/Albero3.json', addModel3);

function addModel3(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);

    var mx3 = 70; //variabile posizione su x
    var mz3 = 80; //variabile posizione su z
    var ry3 = 20; //variabile rotazione modello 

    var mx5 = 70; //variabile posizione su x
    var mz5 = 80; //variabile posizione su z
    var ry5 = 20; //variabile rotazione modello 

    for (var i = 0; i < 100; i++) {
        albero3 = new THREE.Mesh(geometry, materials);
        albero3.receiveShadow = true;
        albero3.castShadow = true;
        albero3.scale.set(5, 5, 5);
        albero3.position.x = mx3;
        albero3.position.z = mz3;
        albero3.rotation.y = ry3;

        var mx3 = getRandomIntInclusive(-300, 400);
        var mz3 = getRandomIntInclusive(-80, -400);

        ry3 = getRandomIntInclusive(0, 50);
        scene.add(albero3);


        albero5 = new THREE.Mesh(geometry, materials);
        albero5.receiveShadow = true;
        albero5.castShadow = true;
        albero5.scale.set(5, 5, 5);
        albero5.position.x = mx5;
        albero5.position.z = mz5;
        albero5.rotation.y = ry5;

        var mx5 = getRandomIntInclusive(-300, 400);
        var mz5 = getRandomIntInclusive(80, 400);

        ry5 = getRandomIntInclusive(0, 50);
        scene.add(albero5);
    }
};

//ROCCE
//Modello Cristallo
var loader = new THREE.JSONLoader();
loader.load('./models/Rock/Crystal.json', addRock);

function addRock(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    var mx4 = 55;
    var mz4 = 55;

    var mx6 = -85;
    var mz6 = -55;
    for (i = 0; i < 40; i++) {
        crystal = new THREE.Mesh(geometry, material);
        crystal.receiveShadow = true;
        crystal.castShadow = true;
        crystal.scale.set(8, 8, 8);
        crystal.position.x = mx4;
        crystal.position.z = mz4;
        var mx4 = getRandomIntInclusive(-50, -450);
        var mz4 = getRandomIntInclusive(-350, 350);

        scene.add(crystal);

        crystal2 = new THREE.Mesh(geometry, material);
        crystal2.receiveShadow = true;
        crystal2.castShadow = true;
        crystal2.scale.set(8, 8, 8);
        crystal2.position.x = mx6;
        crystal2.position.z = mz6;
        var mx6 = getRandomIntInclusive(50, 450);
        var mz6 = getRandomIntInclusive(-350, 350);

        scene.add(crystal2);
    }
}

//Case

var loader = new THREE.JSONLoader();
loader.load('./models/House/CasaLegno1.json', addHouse);

function addHouse(geometry, materials) {
    var material = new THREE.MeshStandardMaterial(materials);
    var house = new THREE.Mesh(geometry, material);
    var house2 = new THREE.Mesh(geometry, material);

    house.rotation.y = 1;
    house2.rotation.y = 2.4;
    house.receiveShadow = true;
    house.castShadow = true;
    house2.receiveShadow = true;
    house2.castShadow = true;
    house.position.set(25, 0, 35);
    house.position.set(-15, 0, -55);
    house.scale.set(0.5, 0.5, 0.5);
    house2.scale.set(0.5, 0.5, 0.5);

    scene.add(house);
    scene.add(house2);
}

//Modello Cristallo di Fuoco
var loader = new THREE.JSONLoader();
loader.load('./models/fire.json', addFire);

function addFire(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    var fire = new THREE.Mesh(geometry, material);
    fire.position.set(30, 0, -30);
    fire.scale.set(5, 5, 5);
    fire.castShadow = false;
    fire.receiveShadow = true;
    scene.add(fire);
}
