function ligarLampada() {
    document.getElementById('lampada').src = "imgs/1.png";
}

function desligarLampada() {
    document.getElementById('lampada').src = "imgs/0.jpg";
}

// Variável booleana
var ligada = false;

function interruptor() {

    // Variáveis
    var lampada = document.getElementById('lampada');
    var interruptor = document.getElementById('onOff');

    // Verifica se a lâmpada está ligada
    if (ligada) {
        lampada.src = "imgs/0.jpg";
        interruptor.textContent = "LIGAR"
        interruptor.style.color = "#232323";
        interruptor.style.backgroundColor = "#fff";
        ligada = false;
    } else {
        lampada.src = "imgs/1.png";
        interruptor.textContent = "DESLIGAR";
        interruptor.style.color = "#fff";
        interruptor.style.backgroundColor = "#232323";
        ligada = true;
    }
}