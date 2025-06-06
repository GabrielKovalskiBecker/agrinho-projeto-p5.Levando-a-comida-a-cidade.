// Função principal que controla a exibição do menu
function menu(){
  // Se o botão ainda não foi criado, chama a função para criá-lo
  if (!btIniciar) {
    botaoComecar();
  } else {
    // Se já existe, apenas mostra o botão
    btIniciar.show();
  }
}

// Cria o botão "Iniciar" no menu
function botaoComecar(){
  btIniciar = createButton("iniciar"); // Cria o botão com o texto "iniciar"
  btIniciar.position(120, 200); // Define a posição do botão na tela
  btIniciar.mousePressed(comecar); // Quando clicado, chama a função comecar()
}

// Começa o jogo ao clicar no botão
function comecar(){
  btIniciar.hide(); // Esconde o botão depois de iniciar
  estado = "jogo"; // Altera o estado do jogo para "jogo"
  resetJogo(); // Reinicia todas as variáveis do jogo

  // Toca o som de fundo apenas uma vez
  if (!somIniciado) {
    somDeFundo.setLoop(true); // Faz o som tocar em loop
    somDeFundo.setVolume(0.5); // Define o volume do som
    somDeFundo.play(); // Toca o som
    somIniciado = true; // Marca que o som já foi iniciado
  }
}

// Define o fundo do menu com a cor roxa
function visualMenu(){
  background("purple"); // Cor de fundo da tela do menu
}