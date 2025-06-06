// Função que desenha o jogador na tela e chama o movimento
function apareceJogador() {
  fill(0, 0, 255); // Cor azul para o jogador
  // Desenha a imagem do personagem na posição (x, y) ajustando pela metade da altura
  image(personagem, player.x, player.y - player.sizey / 2, player.sizex, player.sizey); 
  movimentaJogador(); // Atualiza a posição do jogador conforme teclas pressionadas
}

// Função que controla o movimento do jogador com as setas esquerda e direita
function movimentaJogador() {
  if (keyIsDown(RIGHT_ARROW) && stop === false) { // Se seta direita pressionada e movimento permitido
    player.x += player.speed; // Move para direita com velocidade definida
    if (cena === 4) { // Se estiver na cena 4, limita movimento na borda direita em x=350
      if (player.x + player.sizex / 2 > 350) {
        player.x = 350 - player.sizex / 2; // Corrige para não ultrapassar limite direito
      }
    }
  }

  if (keyIsDown(LEFT_ARROW) && stop === false) { // Se seta esquerda pressionada e movimento permitido
    player.x -= player.speed; // Move para esquerda
  }

  // Limita o jogador para não sair da tela pela esquerda em todas as cenas
  if (cena === 1 || cena === 2 || cena === 3 || cena === 4) {
    if (player.x - player.sizex / 2 < 0) {
      player.x = player.sizex / 2; // Corrige para não ultrapassar limite esquerdo
    }
  }
}

// Função que verifica se jogador passou o limite direito na cena 1 para ir para cena 2
function passouCena1() {
  if (player.x >= width - player.sizex / 2 && missaoAceita === true) {
    cena = 2; // Muda para cena 2
    player.x = player.sizex / 2; // Reseta posição do jogador para início da cena
  }
}

// Função que verifica se jogador passou o limite direito na cena 2 para ir para cena 3
function passouCena2() {
  if (player.x >= width - player.sizex / 2) {
    cena = 3; // Muda para cena 3
    player.x = player.sizex / 2; // Reseta posição do jogador
  }
}

// Função que verifica se jogador passou o limite direito na cena 3 para ir para cena 4
function passouCena3() {
  if (player.x >= width - player.sizex / 2) {
    cena = 4; // Muda para cena 4
    player.x = player.sizex / 2; // Reseta posição do jogador
  }
}