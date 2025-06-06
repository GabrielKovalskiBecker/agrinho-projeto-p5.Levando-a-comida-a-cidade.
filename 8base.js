// Configurações iniciais do jogo
function setup() {
  createCanvas(600, 400); // cria a tela do jogo

  if (estado === "menu") {
    // Reseta variáveis para reiniciar o jogo no menu
    quizRespondidoCena2 = false;
    quizRespondidoCena3 = false;
    quizAtivo = false;
    quizAtual = { pergunta: "", opcoes: [], correta: 0 };
    falaAtual = 0;
    dialogoUM = false;
    dialogoDois = false;
    stop = false;
    aperteSeta = false;
    player.x = 60; // posição inicial do jogador
  } else if (estado === "jogo") {
    somDeFundo.play(); // toca música de fundo ao iniciar o jogo
  }
}

// Função principal que desenha tudo na tela a cada frame
function draw() {
  background(220); // cor de fundo cinza claro

  if (estado === "menu") {
    visualMenu(); // desenha o menu visual
    menu();       // lógica do menu
    image(cenarioMenu, 0, 0, 600, 400); // desenha o cenário do menu
  } else if (estado === "jogo") {
    verificarPlayer(); // verifica estado e posição do jogador

    // Ativa o quiz na cena 2 se não respondeu e quiz não está ativo
    if (cena === 2 && !quizRespondidoCena2 && !quizAtivo) {
      quizAtual = quizzes[2];
      quizAtivo = true;
    }

    // Ativa o quiz na cena 3 se não respondeu e quiz não está ativo
    if (cena === 3 && !quizRespondidoCena3 && !quizAtivo) {
      quizAtual = quizzes[3];
      quizAtivo = true;
    }

    // Se o quiz está ativo, mostra ele e para o resto do draw para não desenhar outras coisas
    if (quizAtivo && quizAtual && quizAtual.opcoes) {
      mostrarQuiz();
      return; // interrompe o draw enquanto o quiz estiver ativo
    }

    // Se não está no quiz, desenha as cenas conforme a cena atual
    if (cena === 1) {
      cenaUm();
      passouCena1();
      dialogo();
      apertarSeta();

    } else if (cena === 2) {
      cenaDois();
      passouCena2();

    } else if (cena === 3) {
      cenaTres();
      passouCena3();

    } else if (cena === 4) {
      cenaQuatro();
      verificarPlayer();
      dialogo();
      apertarSeta();
    }
  }
}