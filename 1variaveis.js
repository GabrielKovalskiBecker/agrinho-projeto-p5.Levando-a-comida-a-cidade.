// Estado do jogo (menu, jogando, etc.)
let estado = "menu";

// Botão para iniciar o jogo
let btIniciar;

// Controla se o jogo deve parar
let stop = false;

// Controla se a dica "aperte a seta" foi mostrada
let aperteSeta = false;

// Indica se o jogador aceitou a missão
let missaoAceita = true;

// Controla se a missão deve ser exibida na tela
let mostrarMissao = false;

// Indica se a missão no campo foi concluída
let missaoCampoCompleta = false;

// Número da cena atual do jogo
let cena = 1;

// Imagem ou objeto do fazendeiro
let fazendeiro;

// Som de fundo do jogo
let somDeFundo;

// Imagens dos diferentes cenários do jogo
let cenario1;
let cenario2;
let personagem;
let cenario3;
// let caraDoPorto; // Comentado, talvez usado futuramente
let cenario4;
let cenarioMenu;

// Controla se o primeiro diálogo está ativo
let dialogoUM = false;

// Garante que o som só inicie uma vez
let somIniciado = false;

// Objeto que representa o jogador
let player = {
  speed: 2,    // Velocidade do jogador
  x: 60,       // Posição horizontal
  y: 310,      // Posição vertical
  sizex: 100,  // Largura do personagem
  sizey: 100   // Altura do personagem
};

// Controla se o segundo diálogo está ativo
let dialogoDois = false;

// Índice da fala atual nas conversas
let falaAtual = 0;

// Lista de falas do fazendeiro (introdução à missão)
let falas = [
  "Olá, viajante!",
  "Seja bem-vindo à nossa fazenda.",
  "Precisamos da sua ajuda para levar alimentos até a cidade.",
  "A cidade depende de nós para alimentar sua população.",
  "Contamos com você. Boa sorte!"
];

// Lista de falas para a cena 4 (fábrica)
let falasCena4 = [
  "Chegamos à fábrica!",
  "Entregue os alimentos aqui para que sejam preparados para o transporte.",
  "Obrigado pela sua ajuda!"
];

// Botão usado para prosseguir após falas ou quizzes
let btProsseguir;

// Controla se a dica "aperte a seta" já foi mostrada na cena
let jaMostrouAperteSeta = false;
let jaMostrouAperteSetaCena4 = false;

// Controla se o quiz está ativo
let quizAtivo = false;

// Controla se os quizzes já foram respondidos
let quizRespondido = false;
let quizRespondidoCena2 = false;
let quizRespondidoCena3 = false;

// Estrutura do quiz atual (usada dinamicamente)
let quizAtual = {
  pergunta: "",     // Texto da pergunta
  opcoes: [],       // Lista de alternativas
  correta: 0        // Índice da alternativa correta
};

// Quizzes do jogo, organizados por cena
let quizzes = {
  2: {
    pergunta: "Qual produto é mais comum na zona rural?",
    opcoes: ["Computador", "Trator", "Elevador"],
    correta: 1
  },
  3: {
    pergunta: "Por que levamos comida até a cidade?",
    opcoes: ["Para vender e alimentar a população", "Para brincar", "Para poluir"],
    correta: 0
  }
};