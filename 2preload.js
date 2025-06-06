// Carrega os arquivos antes do jogo começar
function preload() {
  // Carrega o som de fundo da pasta de áudio
  somDeFundo = loadSound('assets/som/somDeFundo.m4a');

  // Carrega as imagens dos cenários do jogo
  cenario1 = loadImage("assets/imagens/Cena1.png"); // Fazenda
  cenario2 = loadImage("assets/imagens/Cena2.png"); // Estrada
  cenario3 = loadImage("assets/imagens/Cena3.png"); // Cidade
  cenario4 = loadImage("assets/imagens/Cena4.png"); // Fábrica
  cenarioMenu = loadImage("assets/imagens/CenaMenu.png"); // Tela de menu

  // Carrega as imagens dos personagens
  personagem = loadImage("assets/imagens/Personagem.png"); // Jogador
  fazendeiro = loadImage("assets/imagens/fazendeiro.png"); // NPC fazendeiro

  // caraDoPorto = loadImage("assets/imagens/caraDoPorto.png"); // Comentado, talvez usado depois
}

// Reinicia as variáveis para começar o jogo do zero
function resetJogo() {
  // Reseta os quizzes para poderem ser feitos de novo
  quizRespondidoCena2 = false;
  quizRespondidoCena3 = false;
  quizAtivo = false;
  quizAtual = { pergunta: "", opcoes: [], correta: 0 };

  // Reseta os diálogos e posição do personagem
  falaAtual = 0;
  dialogoUM = false;
  dialogoDois = false;
  stop = false;
  aperteSeta = false;
  player.x = 60; // Volta o jogador para o início
  cena = 1; // Retorna à primeira cena

  // Reseta dicas e botões de interação
  jaMostrouAperteSeta = false;
  jaMostrouAperteSetaCena4 = false;

  // Remove o botão "prosseguir" se ele existir
  if (btProsseguir) {
    btProsseguir.remove();
    btProsseguir = null;
  }
}