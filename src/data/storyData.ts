export interface Choice {
  id: string;
  text: string;
  nextNodeId: string;
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
}

export const storyData: StoryNode[] = [
  {
    id: "intro",
    text: `Você acorda no meio da noite com um som estranho vindo do andar de baixo. Suas janelas estão fechadas, e a casa está mergulhada na escuridão. O relógio na parede marca 3:00 AM. Você se levanta e, cuidadosamente, desce as escadas. A luz da lua entra pelas frestas das cortinas, criando sombras inquietantes no chão.
Ao chegar ao andar de baixo, você nota que a porta da frente está entreaberta, o que é estranho porque você tem certeza de que trancou antes de ir dormir. Ao se aproximar, uma brisa gelada atravessa a sala, arrepiando a pele do seu braço. Do lado de fora, você vê uma estátua de pedra de um anjo, com as mãos cobrindo o rosto.
Você pisca e, de repente, a estátua está mais próxima.
`,
    choices: [
      {
        id: "1",
        text: "Investigar a estátua",
        nextNodeId: "investigateStatue",
      },
      {
        id: "2",
        text: "Voltar para dentro e trancar a porta",
        nextNodeId: "lockDoor",
      },
    ],
  },
  // Historia 1
  {
    id: "investigateStatue",
    text: `Você se aproxima lentamente da estátua, tentando não piscar. Cada passo seu parece ecoar pela noite silenciosa. Quando está a poucos metros de distância, nota que a estátua está levemente rachada, e uma sensação de pavor se instala em seu peito. De repente, sente uma presença atrás de você.`,
    choices: [
      {
        id: "3",
        text: "Você reúne toda a coragem e se vira para enfrentar o que quer que esteja ali.",
        nextNodeId: "confrontPresence",
      },
      {
        id: "4",
        text: "Você dá meia-volta e corre para dentro de casa, fechando a porta com força atrás de você. Seu coração bate descontroladamente e você tenta controlar a respiração. Sabendo que não está seguro, você precisa decidir rapidamente o que fazer a seguir.",
        nextNodeId: "runInside",
      },
    ],
  },
  {
    id: "confrontPresence",
    text: `Você gira rapidamente e se depara com a imagem aterrorizante de um Weeping Angel com os braços estendidos. O tempo parece parar enquanto você se encontra preso no olhar frio e impiedoso da estátua. Seus músculos travam, o medo corrói sua mente, e em um instante, você é tocado pelo anjo. Uma sensação de vertigem toma conta de você enquanto é transportado para o passado, sentindo a realidade desmoronar ao seu redor.
Você acorda em uma época diferente, sem saber onde está ou como chegou ali. Tudo o que resta é o eco distante de terror e a sensação de estar perdido no tempo para sempre.`,
    choices: [],
  },
  {
    id: "runInside",
    text: `Você dá meia-volta e corre para dentro de casa, fechando a porta com força atrás de você. Seu coração bate descontroladamente e você tenta controlar a respiração. Sabendo que não está seguro, você precisa decidir rapidamente o que fazer a seguir.`,
    choices: [
      {
        id: "5",
        text: "Você pega o telefone e disca rapidamente para a polícia, esperando que eles possam oferecer alguma ajuda ou orientação.",
        nextNodeId: "callPolice",
      },
      {
        id: "6",
        text: "Você decide procurar algo na casa que possa usar como arma para se defender, caso precise enfrentar a estátua novamente.",
        nextNodeId: "findWeapon",
      },
    ],
  },
  {
    id: "callPolice",
    text: `Ao tentar ligar para a polícia, você sente um frio súbito e uma paralisia que toma conta do seu corpo. A sensação é intensa e vertiginosa, como se estivesse caindo através do tempo. Quando recupera os sentidos, percebe que está em um local completamente diferente. O ar é pesado com o cheiro de fumaça de carvão, e ao olhar ao redor, você vê carruagens puxadas por cavalos, pessoas vestidas em roupas do século XIX e postes de iluminação a gás iluminando ruas de paralelepípedos.
A desorientação é esmagadora. Você está em uma época sem as comodidades e tecnologias modernas, sem saber como sobreviver, encontrar ajuda ou voltar para casa. Cada som é estranho, e cada rosto parece te observar com desconfiança. Você percebe que está perdido no tempo, sem um caminho claro para retornar à sua realidade.`,
    choices: [],
  },
  {
    id: "findWeapon",
    text: `Você entra no porão e encontra diversos itens que podem ser úteis, você escuta barulho de pedra sendo arrastada pelo chão se aproximando de você. Você consegue pegar:`,
    choices: [
      {
        id: "7",
        text: "Espelho: Você pega um espelho médio antigo, pensando que talvez possa usar o reflexo para enganar o anjo. Ao segurar o espelho, você se sente um pouco mais seguro, esperando que isso possa lhe dar uma vantagem.",
        nextNodeId: "mirror",
      },
      {
        id: "8",
        text: "Martelho: Você pega um martelo. É pesado e pode ser usado como uma arma contundente, caso precise defender-se fisicamente.",
        nextNodeId: "hammer",
      },
    ],
  },
  {
    id: "mirror",
    text: `Você pega um espelho médio antigo, pensando que talvez possa usar o reflexo para enganar o anjo. Ao segurar o espelho, você se sente um pouco mais seguro, esperando que isso possa lhe dar uma vantagem.
        Percebendo que o Weeping Angel está paralisado pelo espelho, você decide tomar medidas drásticas para garantir que ele nunca mais se mova. Com uma determinação renovada, você começa a construir uma caixa de espelhos ao redor do anjo, utilizando todos os espelhos que consegue encontrar. Trabalha incansavelmente, certificando-se de que cada ângulo esteja coberto e que o anjo não tenha nenhuma chance de escapar.
Depois de dias de trabalho árduo, a caixa está completa. Você sente um alívio imediato, sabendo que a ameaça está contida. Mas, ao invés de fugir, você decide continuar morando na casa. A história do anjo e da caixa de espelhos é passada de geração em geração em sua família, como um segredo sombrio e um aviso.
Você documenta tudo meticulosamente, deixando instruções claras para que ninguém mexa na caixa de espelhos. A casa se torna uma fortaleza para sua família, um lugar seguro desde que as regras sejam seguidas. As gerações futuras aprendem a conviver com o conhecimento do perigo escondido, mas também com a segurança que você criou.
Ao longo dos anos, a lenda do Weeping Angel na caixa de espelhos se torna parte do folclore familiar, uma lembrança constante do que está em jogo e da coragem de quem o enfrenta primeiro.`,
    choices: [],
  },
  {
    id: "hammer",
    text: `Você pega o martelo com firmeza e tenta quebrar a estátua. No entanto, a superfície do anjo parece ser indestrutível. Nenhuma rachadura aparece, e antes que possa reagir, sente uma vertigem.
Quando recupera a consciência, está em um ambiente completamente diferente. É o ano de 1430, em uma Europa medieval. Ao seu redor, você vê aldeias rústicas com casas de madeira e palha, e camponeses vestidos com roupas simples e gastas. O cheiro de madeira queimada e do campo é forte, e você ouve o distante som de uma forja martelando metal.
O mundo é rude e implacável, marcado pela dureza do dia a dia e pela luta constante pela sobrevivência. A ausência de tecnologia moderna e o medo de ser uma forasteira tornam a situação ainda mais desesperadora. Você percebe que precisará encontrar uma maneira de se adaptar a esta época e, possivelmente, descobrir um modo de voltar para seu próprio tempo.`,
    choices: [],
  },
  // Historia 2
  {
    id: "lockDoor",
    text: `Você fecha a porta rapidamente, certificando-se de que está bem trancada. O coração bate acelerado enquanto você se afasta da porta, tentando decidir o que fazer a seguir. Enquanto você pondera, ouve um barulho alto vindo da sala de estar.`,
    choices: [
      {
        id: "9",
        text: "Investigar o barulho na sala de estar: Com o coração batendo forte, você decide investigar o barulho. Pode ser apenas um objeto que caiu, mas precisa ter certeza.",
        nextNodeId: "investigateNoise",
      },
      {
        id: "10",
        text: "Ir para o quarto e se esconder: O medo é esmagador. Você decide se trancar no quarto e procurar um lugar para se esconder, esperando que o perigo passe.",
        nextNodeId: "hideUpstairs",
      },
    ],
  },
  {
    id: "investigateNoise",
    text: `Ao decidir investigar o barulho, você caminha lentamente em direção à sala de estar, tentando fazer o mínimo de ruído possível. Quando chega lá, a cena que se depara faz seu coração parar por um momento: dois Weeping Angels estão posicionados no meio da sala, claramente se movendo na sua direção. As janelas por onde passaram estão quebradas, deixando entrar o ar frio da noite. O pavor toma conta de você enquanto percebe a gravidade da situação.`,
    choices: [
      {
        id: "11",
        text: "Correr para o andar superior e se trancar em um quarto: Você decide que a melhor chance de sobrevivência é buscar um lugar seguro no andar superior, onde pode se trancar e tentar encontrar uma maneira de pedir ajuda.",
        nextNodeId: "runUpstairs",
      },
      {
        id: "12",
        text: "Tentar sair pela porta dos fundos.",
        nextNodeId: "runOutside",
      },
    ],
  },
  {
    id: "hideUpstairs",
    text: `O barulho de pedra se movendo é cada vez mais alto, e você corre para se esconder dentro do armário. Fecha os olhos e segura a respiração, esperando que o anjo vá embora. Tudo o que você ouve é o ranger da porta do armário se abrindo, seguido por uma mão dura e fria agarrando seu braço. A sensação de vertigem e desorientação é instantânea.
Quando recobra a consciência, está em um ambiente completamente diferente. É o ano de 1780, uma época de revoluções e mudanças. Ao seu redor, vê ruas de terra e casas feitas de madeira e pedra. Carruagens puxadas por cavalos passam, e pessoas em trajes coloniais caminham com pressa. O ar é pesado com o cheiro de fumaça de lareiras e forjas. A vida é dura e marcada pela luta diária pela sobrevivência.
Você se encontra no meio de um período histórico cheio de tensões, sem a tecnologia moderna ou o conforto da sua própria época. A desesperança começa a tomar conta, mas você sabe que precisará encontrar uma maneira de se adaptar e, quem sabe, descobrir um modo de voltar para casa.`,
    choices: [],
  },
  {
    id: "runOutside",
    text: `A adrenalina toma conta, e você decide que a única opção é fugir pela porta dos fun`,
    choices: [
      {
        id: "13",
        text: "Agachar-se e tentar passar despercebida: Você decide se agachar e tentar passar despercebida, esperando que isso confunda os anjos e lhe dê uma chance de escapar.",
        nextNodeId: "crouch",
      },
      {
        id: "14",
        text: "Entrar no porão: Em um movimento rápido, você opta por entrar no porão, onde poderá usar as opções e ferramentas descritas na primeira história, como encontrar um espelho ou uma chave inglesa para se defender. ",
        nextNodeId: "findWeapon",
      },
    ],
  },
];
