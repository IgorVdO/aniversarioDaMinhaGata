var elogios = [
    "Você é o amor da minha vida, a pessoa que eu sempre quis pra mim, eu nunca pensei e nunca vou pensar em deixar o meu amorzinho",
    "Amor, você é tudo que eu sempre quis, eu prometo que eu nunca vou te deixar, eu vou sempre tratar a minha princesinha com o maior amor e carinho do mundo",
    "Você é especial, incrivel, surreal, magnifica, encantadora e e tudo aquilo que é elogio, voce é a pessoa mais incrivel desse mundo e eu te quero pra todo o sempre",
    "O meu maior sonho é sempre estar ao seu lado, morar com você, casar com voceê, ter dois gatinhos bem fofinhos, você é incrivel",
    "Você é irresistivel, incrivel, surreal, celestial, fantastica, fabulosa, formosa, linda, gostosa, deliciosa, magnifica, você é tudo que eu preciso"
];

// Função para gerar um elogio aleatório
function gerarElogio() {
    var indiceAleatorio = Math.floor(Math.random() * elogios.length);
    document.getElementById("elogioP").innerHTML = elogios[indiceAleatorio];
}