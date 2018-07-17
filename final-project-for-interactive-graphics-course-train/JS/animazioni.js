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

document.getElementById("AnimationTrain").onclick = function () {
    startTrain = !startTrain;
};

document.getElementById("LightTrain").onclick = function () {
    lightON = !lightON;
};