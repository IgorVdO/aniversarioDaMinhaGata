// Defina a data e hora de término
var dataFinal = new Date("Oct 22, 2023 00:00:00").getTime();

// Atualize o contador a cada segundo
var x = setInterval(function() {

  // Obtenha a data e hora atuais
  var agora = new Date().getTime();
    
  // Encontre a distância entre agora e a data final
  var distancia = dataFinal - agora;
    
  // Cálculos de tempo para dias, horas, minutos e segundos
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
  // Exiba o resultado
  document.getElementById('days').innerHTML = dias;
  document.getElementById('hours').innerHTML = horas;
  document.getElementById('minutes').innerHTML = minutos;
  document.getElementById('seconds').innerHTML = segundos;
    
  // Se o contador terminar, exiba uma mensagem
  if (distancia < 0) {
    clearInterval(x);
    console.log("O dia chegou!");
  }
}, 1000);