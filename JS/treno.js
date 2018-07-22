//TRENO
//RUOTE Materiale, Geometria

var ruotaGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 100);
var ruotaMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/ruote1.jpg'),
    side: THREE.DoubleSide
});

//ruota anteriore destra
var ruotaDxA = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaDxA.position.z = 150;
ruotaDxA.rotation.z = 1.5708;
ruotaDxA.rotation.y = 1.5708;
scene.add(ruotaDxA);

//ruota anteriore sinistra
var ruotaSxA = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaSxA.position.x = 0;
ruotaSxA.position.z = 154;
ruotaSxA.rotation.z = 1.5708;
ruotaSxA.rotation.y = 1.5708;
scene.add(ruotaSxA);

//ruota posteriore1 sx
var ruotaSxP1 = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaSxP1.position.set(8, 0, 154);
ruotaSxP1.rotation.z = 1.5708;
ruotaSxP1.rotation.y = 1.5708;
scene.add(ruotaSxP1);

//ruota posteriore2 sx
var ruotaSxP2 = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaSxP2.position.set(11, 0, 154);
ruotaSxP2.rotation.z = 1.5708;
ruotaSxP2.rotation.y = 1.5708;
scene.add(ruotaSxP2);

//ruota posteriore1 dx
var ruotaDxP1 = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaDxP1.position.set(8, 0, 150);
ruotaDxP1.rotation.z = 1.5708;
ruotaDxP1.rotation.y = 1.5708;
scene.add(ruotaDxP1);

//ruota posteriore2 dx
var ruotaDxP2 = new THREE.Mesh(ruotaGeometry, ruotaMaterial);
ruotaDxP2.position.set(11, 0, 150);
ruotaDxP2.rotation.z = 1.5708;
ruotaDxP2.rotation.y = 1.5708;
scene.add(ruotaDxP2);

//BLOCCO TRENO
var base1Geometry = new THREE.BoxGeometry(15, 1, 3.9);
var base1Material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/baseTreno.jpg'),
    side: THREE.DoubleSide
});
var base1 = new THREE.Mesh(base1Geometry, base1Material);
base1.receiveShadow = true;
base1.position.set(5, 0, 152);
scene.add(base1);

var base2Geometry = new THREE.BoxGeometry(14.5, 0.5, 3.4);
var base2Material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/baseTreno.jpg'),
    side: THREE.DoubleSide
});
var base2 = new THREE.Mesh(base2Geometry, base2Material);
base2.position.set(5, 0.5, 152);
scene.add(base2);

//Blocco Motore Sotto camera di scoppio
var bloccoQuadratoMotoreGeometry = new THREE.BoxGeometry(6, 3.5, 3.5);
var bloccoQuadratoMotoreMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/base.jpg'),
    side: THREE.DoubleSide
});
var bloccoQuadratoMotore = new THREE.Mesh(bloccoQuadratoMotoreGeometry, bloccoQuadratoMotoreMaterial);
bloccoQuadratoMotore.position.set(1.5, 2, 152);
scene.add(bloccoQuadratoMotore);

//Blocco Motore
var bloccoMotoreGeometry = new THREE.CylinderGeometry(2.3, 2.3, 6.1, 100);
var bloccoMotoreMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/ferroRugine.jpg'),
    side: THREE.DoubleSide
});
var bloccoMotore = new THREE.Mesh(bloccoMotoreGeometry, bloccoMotoreMaterial);
bloccoMotore.rotation.z = 1.5708;
bloccoMotore.position.set(1.5, 3.5, 152);
scene.add(bloccoMotore);

//Blocco appoggioDX
var bloccoAppoggioGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.7, 100);
var bloccoAppoggioMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/appoggio.jpg'),
    side: THREE.DoubleSide
});
var bloccoAppoggioDX = new THREE.Mesh(bloccoAppoggioGeometry, bloccoAppoggioMaterial);
bloccoAppoggioDX.rotation.z = 1.5708;
bloccoAppoggioDX.position.set(-2.7, 0, 151);
scene.add(bloccoAppoggioDX);

//Blocco AppoggioSX
var bloccoAppoggioSX = new THREE.Mesh(bloccoAppoggioGeometry, bloccoAppoggioMaterial);
bloccoAppoggioSX.rotation.z = 1.5708;
bloccoAppoggioSX.position.set(-2.7, 0, 153);
scene.add(bloccoAppoggioSX);

//Blocco appoggioFrontaleDX
var bloccoAppoggioFrontaleGeometry = new THREE.CylinderGeometry(0.7, 0.7, 0.1, 100);
var bloccoAppoggioFrontaleMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/appoggio.jpg'),
    side: THREE.DoubleSide
});
var bloccoAppoggioFrontaleDX = new THREE.Mesh(bloccoAppoggioFrontaleGeometry, bloccoAppoggioFrontaleMaterial);
bloccoAppoggioFrontaleDX.rotation.z = 1.5708;
bloccoAppoggioFrontaleDX.position.set(-3.1, 0, 151);
scene.add(bloccoAppoggioFrontaleDX);

//Blocco AppoggioFrontaleSX
var bloccoAppoggioFrontaleSX = new THREE.Mesh(bloccoAppoggioFrontaleGeometry, bloccoAppoggioFrontaleMaterial);
bloccoAppoggioFrontaleSX.rotation.z = 1.5708;
bloccoAppoggioFrontaleSX.position.set(-3.1, 0, 153);
scene.add(bloccoAppoggioFrontaleSX);

//Blocco LuceDX
var bloccoLuceGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 100);
var bloccoLuceMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/vetro.jpg'),
    color: 0xFFFF00,
    side: THREE.DoubleSide
});
var bloccoLuceDX = new THREE.Mesh(bloccoLuceGeometry, bloccoLuceMaterial);
bloccoLuceDX.rotation.z = 1.5708;
bloccoLuceDX.position.set(-1.6, 1.3, 151);
scene.add(bloccoLuceDX);

//Blocco LuceSX
var bloccoLuceSX = new THREE.Mesh(bloccoLuceGeometry, bloccoLuceMaterial);
bloccoLuceSX.rotation.z = 1.5708;
bloccoLuceSX.position.set(-1.6, 1.3, 153);
scene.add(bloccoLuceSX);

//Blocco Camino
var bloccoCaminoGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 100);
var bloccoCaminoMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/camino.jpg'),
    side: THREE.DoubleSide
});
var bloccoCamino = new THREE.Mesh(bloccoCaminoGeometry, bloccoCaminoMaterial);
bloccoCamino.position.set(0, 6, 152);
scene.add(bloccoCamino);

//Blocco PuntaCamino
var PuntaCaminoGeometry = new THREE.TorusGeometry(0.6, 0.15, 32, 100);
var PuntaCaminoMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/camino.jpg'),
    side: THREE.DoubleSide
});
var PuntaCamino = new THREE.Mesh(PuntaCaminoGeometry, PuntaCaminoMaterial);
PuntaCamino.rotation.x = 1.5708;
PuntaCamino.position.set(0, 7.5, 152);
scene.add(PuntaCamino);

//Blocco CabinaVerticale
var CabinaVerticaleGeometry = new THREE.BoxGeometry(1.5, 7.5, 3.85);
var CabinaVerticaleMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/cabinaVerticale.jpg'),
    side: THREE.DoubleSide
});
var CabinaVerticale = new THREE.Mesh(CabinaVerticaleGeometry, CabinaVerticaleMaterial);
CabinaVerticale.position.set(5.2, 3.5, 152);
scene.add(CabinaVerticale);

//Blocco Cabina
var CabinaGeometry = new THREE.BoxGeometry(6, 4, 3.8);
var CabinaMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/cabina.jpg'),
    side: THREE.DoubleSide
});
var Cabina = new THREE.Mesh(CabinaGeometry, CabinaMaterial);
Cabina.position.set(8.8, 2, 152);
scene.add(Cabina);

//Blocco CoperturaCabina
var CoperturaCabinaGeometry = new THREE.BoxGeometry(6, 0.4, 4.5);
var CoperturaCabinaMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/treno/cabinaTetto.jpg'),
    side: THREE.DoubleSide
});
var CoperturaCabina = new THREE.Mesh(CoperturaCabinaGeometry, CoperturaCabinaMaterial);
CoperturaCabina.position.set(8.7, 6.8, 152);
scene.add(CoperturaCabina);

//Luci treno
var lightTrainDX = new THREE.SpotLight(0xFFFF00, 0.7, 200);
var lightTrainSX = new THREE.SpotLight(0xFFFF00, 0.7, 200);

lightTrainDX.position.set(-1.6, 1.3, 151);
lightTrainSX.position.set(-1.6, 1.3, 153);

lightTrainDX.castShadow = true;
lightTrainSX.castShadow = true;

lightTrainDX.shadow.mapSize.width = 512; // default
lightTrainDX.shadow.mapSize.height = 512; // default
lightTrainDX.shadow.camera.near = 0.5; // default
lightTrainDX.shadow.camera.far = 500; // default

lightTrainSX.shadow.mapSize.width = 512; // default
lightTrainSX.shadow.mapSize.height = 512; // default
lightTrainSX.shadow.camera.near = 0.5; // default
lightTrainSX.shadow.camera.far = 500; // default

//Obiettivo per puntatore luci
var targetObject = new THREE.Object3D();
targetObject.position.set(-20.6, 1.3, 152);

lightTrainDX.target = targetObject;
lightTrainSX.target = targetObject;

//Helper per visualizzare direzione luci
var activeHelper = false;
var helper = new THREE.CameraHelper(lightTrainDX.shadow.camera);
var helper2 = new THREE.CameraHelper(lightTrainSX.shadow.camera);

//scene.add(helper2);
//scene.add(helper);





//GRUPPO TRENO
var treno = new THREE.Group();

treno.add(ruotaDxP1);
treno.add(ruotaDxP2);
treno.add(ruotaSxP1);
treno.add(ruotaSxP2);
treno.add(ruotaDxA);
treno.add(ruotaSxA);

treno.add(base1);
treno.add(base2);
treno.add(bloccoQuadratoMotore);

treno.add(bloccoMotore);
treno.add(bloccoLuceDX);
treno.add(bloccoLuceSX);

treno.add(bloccoAppoggioDX);
treno.add(bloccoAppoggioSX);
treno.add(bloccoAppoggioFrontaleDX);
treno.add(bloccoAppoggioFrontaleSX);

treno.add(Cabina);
treno.add(CabinaVerticale);
treno.add(CoperturaCabina);

treno.add(bloccoCamino);
treno.add(PuntaCamino);

treno.add(lightTrainDX);
treno.add(lightTrainSX);

treno.add(targetObject);



treno.castShadow = true;
treno.receiveShadow = true;

treno.position.y += 2.5;

scene.add(treno);
