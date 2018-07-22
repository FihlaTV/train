//ANIMAZIONE
//Gestione Luci Treno
var light = setInterval('TurnON()', 1);

var lightON = true;

function TurnON() {
    if (lightON == false) {
        lightTrainDX.intensity = 0;
        lightTrainSX.intensity = 0;
    } else {
        lightTrainDX.intensity = 0.7;
        lightTrainSX.intensity = 0.7;
    }
}

//Movimento treno su rotaie
var startTrain = true;

var rotTreno = setInterval('rotazioneTreno()', 1);

function rotazioneTreno() {
    if (startTrain == true) {
        treno.rotation.y -= 0.01;
    }
}

//Movimento treno dinamico su effetto rotaia

var dinamicaTreno = setInterval('dinamica()', 2);

function dinamica() {
    if (startTrain == true) {
        if (ruotaDxA.position.y == 0) {
            ruotaDxA.position.y += 0.2;
            ruotaDxP1.position.y += 0.2;
            ruotaDxP2.position.y += 0.2;
            ruotaSxA.position.y += 0.2;
            ruotaSxP1.position.y += 0.2;
            ruotaSxP2.position.y += 0.2;
            treno.position.y += 0.1;
        } else {
            ruotaDxA.position.y -= 0.2;
            ruotaDxP1.position.y -= 0.2;
            ruotaDxP2.position.y -= 0.2;
            ruotaSxA.position.y -= 0.2;
            ruotaSxP1.position.y -= 0.2;
            ruotaSxP2.position.y -= 0.2;
            treno.position.y -= 0.1;
        }
    }
}

//Sbalzo treno

var sobalzo = setInterval('sbalzo()', 5000);

var ritorno = setInterval('rit()', 100);


function sbalzo() {
    if (startTrain == true) {
        PuntaCamino.position.y = 9.5;
        bloccoCamino.position.y = 7;
    }
}

function rit() {
    if (startTrain == true) {
        if (7.5 <= PuntaCamino.position.y <= 9.5) {
            PuntaCamino.position.y -= 0.1;
            bloccoCamino.position.y -= 0.05;
        }
    }
}


document.getElementById("AnimationTrain").onclick = function () {
    startTrain = !startTrain;
};

document.getElementById("LightTrain").onclick = function () {
    lightON = !lightON;
};
