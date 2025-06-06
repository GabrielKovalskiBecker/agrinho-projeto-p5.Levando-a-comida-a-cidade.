// Verifica a posição do jogador para ativar o aviso de "aperte seta"
function verificarPlayer() {
  if (cena === 1 && player.x === 380 && !jaMostrouAperteSeta) {
    stop = true; // pausa o movimento do jogador
    aperteSeta = true; // ativa o aviso
    jaMostrouAperteSeta = true; // evita repetir
  }

  if (cena === 4 && player.x === 300 && !jaMostrouAperteSetaCena4) {
    stop = true;
    aperteSeta = true;
    jaMostrouAperteSetaCena4 = true;
  }
}

// Mostra a mensagem "aperte seta para cima" e inicia o diálogo se o jogador apertar
function apertarSeta() {
  if (aperteSeta && !dialogoUM && !dialogoDois) {
    textSize(20);
    textAlign(LEFT, BASELINE);
    text("APERTE SETA PARA CIMA PARA CONTINUAR", 100, 190);

    if (keyIsDown(UP_ARROW)) {
      if (cena === 1) dialogoUM = true; // ativa diálogo da cena 1
      if (cena === 4) dialogoDois = true; // ativa diálogo da cena 4
      aperteSeta = false; // desativa aviso
    }
  }
}

// Mostra o diálogo com as falas e o botão "Prosseguir"
function dialogo() {
  if (dialogoUM || dialogoDois) {
    fill(50, 50, 200, 220);
    rect(50, 20, 500, 100, 20); // caixa do diálogo
    fill(255);
    textSize(16);

    // Escolhe o conjunto de falas correto
    let falasAtuais = dialogoUM ? falas : falasCena4;
    text(falasAtuais[falaAtual], 70, 50, 460, 80);

    // Mostra o personagem correspondente
    if (cena === 1) {
      image(fazendeiro, 500, 260, 80, 100);
    } else if (cena === 4) {
      // image(caraDoPorto, 400, 260, 80, 100); // desativado por enquanto
    }

    // Cria o botão "Prosseguir" se ainda não existir
    if (!btProsseguir) {
      btProsseguir = createButton("Prosseguir");
      btProsseguir.position(500, 90);
      btProsseguir.mousePressed(() => {
        falaAtual++;
        if (falaAtual >= falasAtuais.length) {
          // Quando as falas acabam, reseta tudo
          dialogoUM = false;
          dialogoDois = false;
          falaAtual = 0;
          btProsseguir.remove();
          btProsseguir = null;
          aperteSeta = false;
          stop = false;

          // Se for a última cena, volta para o menu
          if (cena === 4) {
            estado = "menu";
            cena = 1;
            player.x = 60;
            somDeFundo.stop(); // para o som
            somIniciado = false;
          }
        }
      });
    }
  }
}

// Mostra o quiz na tela
function mostrarQuiz() {
  if (!quizAtual) return; // sai se não tiver quiz

  fill(255);
  rect(100, 100, 400, 200, 10); // caixa do quiz
  fill(0);
  textAlign(CENTER, TOP);
  textSize(16);
  text(quizAtual.pergunta, 300, 120); // pergunta

  // mostra cada opção de resposta
  for (let i = 0; i < quizAtual.opcoes.length; i++) {
    fill(200);
    rect(150, 180 + i * 40, 300, 30, 5);
    fill(0);
    textAlign(CENTER, CENTER);
    text(quizAtual.opcoes[i], 300, 195 + i * 40);
  }
}

// Detecta clique do mouse nas opções do quiz
function mousePressed() {
  if (quizAtivo && quizAtual && quizAtual.opcoes) {
    for (let i = 0; i < quizAtual.opcoes.length; i++) {
      let x = 150;
      let y = 180 + i * 40;
      let w = 300;
      let h = 30;

      // Verifica se o clique foi dentro da opção
      if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        if (i === quizAtual.correta) {
          alert("Resposta correta!");

          // Marca como respondido
          if (cena === 2) quizRespondidoCena2 = true;
          if (cena === 3) quizRespondidoCena3 = true;
        } else {
          alert("Resposta errada!");
        }

        // Reseta o quiz
        quizAtivo = false;
        quizAtual = {
          pergunta: "",
          opcoes: [],
          correta: 0
        };
      }
    }
  }
}
