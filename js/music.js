function reproduzirMusica() {
  const resposta1 = prompt("Deseja a reprodução da música inteira(1) e/ou somente uma das partes(2)?");

  if (resposta1.toLowerCase() === "1") {
    exibirMensagem("(musica inteira)<br><br>");
    reproduzirMusicaInteira();
  } else if (resposta1.toLowerCase() === "2") {
    const resposta2 = prompt("Reproduzir primeira(1) ou segunda(2) parte?");

    if (resposta2.toLowerCase() === "1") {
      exibirMensagem("(primeira parte)<br><br>");
      reproduzirPrimeiraParte();
    } else if (resposta2.toLowerCase() === "2") {
      exibirMensagem("(segunda parte)<br><br>");
      reproduzirSegundaParte();
    } else {
      exibirMensagem("Resposta inválida.<br>");
    }
  } else {
    exibirMensagem("Resposta inválida.<br>");
  }
}

function reproduzirMusicaInteira() {
  reproduzirPrimeiraParte();
  reproduzirSegundaParte();
}

function reproduzirPrimeiraParte() {
  ergueiMaos();
  osAnimais();
  omiNoe();
  ergueiMaos();
  for (let i = 0; i < 2; i++) {
    ergueiMaos();
  }
}

function reproduzirSegundaParte() {
  exibirMensagem("E atenção agora, porque<br><br>");
  osFi();
  for (let i = 0; i < 7; i++) {
    osFi();
    oBraco();
  }
}

function ergueiMaos() {
  if (!ergueiMaos.contador) {
    ergueiMaos.contador = 1;
  } else {
    ergueiMaos.contador++;
  }

  let mensagem = "";

  for (let i = 0; i < 2; i++) {
    if (ergueiMaos.contador === 2 && i === 0) {
      mensagem += "Por isso...!<br>";
    }
    mensagem += "Erguei as mãos e dai glória a Deus<br>";
  }

  mensagem += "Erguei as mãos<br>";

  if (ergueiMaos.contador === 3) {
    mensagem += "E cantai como os filhos do senhor (de novo!)<br>";
  } else {
    mensagem += "E cantai como os filhos do senhor<br>";
  }

  exibirMensagem(mensagem);
  adicionarQuebraDeLinha();
}

function osAnimais() {
  let mensagem = "";

  const osAnimaisArray = ["O elefante", "A minhoquinha", "O canguru"];
  const osBichosArray = ["E os passarinhos", "E os pinguins", "E o sapinho"];

  for (let i = 0; i < osAnimaisArray.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 1 && j === 0) {
        mensagem += "(Para não!)<br>";
      }
      mensagem += "Os animaizinhos subiram de dois em dois<br>";
    }

    mensagem += `${osAnimaisArray[i]}<br>`;
    mensagem += `${osBichosArray[i]}, como os filhos do Senhor<br><br>`;
  }

  exibirMensagem(mensagem);
}

function omiNoe() {
  let mensagem = "";

  for (let i = 0; i < 2; i++) {
    mensagem += "Deus disse a Noé: Constrói uma arca<br>";
  }

  mensagem += "Que seja feita<br>";
  mensagem += "De madeira para os filhos do Senhor<br>";

  exibirMensagem(mensagem);
  adicionarQuebraDeLinha();
}

function osFi() {
  osFi.contador = (osFi.contador || 0) + 1;

  let mensagem = "";

  if (osFi.contador > 7) {
    mensagem += "O senhor tem muitos filhos (Para não)<br>";
  } else if (osFi.contador > 6) {
    mensagem += "Balança a cabeça, dá uma voltinha<br>";
    mensagem += "O senhor tem muitos filhos<br>";
  } else if (osFi.contador > 4) {
    if (osFi.contador > 5) {
      mensagem += "Balança a cabeça<br>";
      mensagem += "O senhor tem muitos filhos<br>";
    } else {
      mensagem += "O senhor tem muitos filhos (muitos filhos)<br>";
    }
  } else {
    mensagem += "O senhor tem muitos filhos<br>";
  }

  if (osFi.contador > 1) {
    if (osFi.contador > 7) {
      mensagem += "Muitos filhos ele tem<br>";
    } else if (osFi.contador > 6) {
      mensagem += "Muitos filhos ele tem (Bonita cruz)<br>";
    } else if (osFi.contador > 3) {
      mensagem += "Muitos filhos ele tem<br>";
    } else if (osFi.contador > 2) {
      mensagem += "Muitos filhos ele tem (Até que eu tô em forma)<br>";
    } else {
      mensagem += "Muitos filhos ele tem<br>";
    }
  } else {
    mensagem += "Todos filhos ele tem<br>";
  }

  if (osFi.contador > 4) {
    if (osFi.contador > 5) {
      mensagem += "Eu sou um deles, você também<br>";
    } else {
      mensagem += "Eu sou um deles, você também (Que saudade dessa música)<br>";
    }
  } else {
    mensagem += "Eu sou um deles, você também<br>";
  }

  if (osFi.contador === 1) {
    mensagem += "Louvemos ao senhor (braço direito!)<br>";
  } else {
    mensagem += "Louvemos ao senhor<br>";
  }

  exibirMensagem(mensagem);
  adicionarQuebraDeLinha();
}

function oBraco() {
  oBraco.contador = (oBraco.contador || 0) + 1;

  let mensagem = "";

  mensagem += "Braço direito, braço esquerdo<br>";

  if (oBraco.contador === 2) {
    mensagem += "Perna direita<br>";
  } else if (oBraco.contador > 2) {
    mensagem += "Perna direita, perna esquerda<br>";
  }

  if (oBraco.contador >= 6) {
    mensagem += "Balança a cabeça, dá uma voltinha<br>";

    if (oBraco.contador === 7) {
      mensagem += "Dá um pulinho e abraça o irmão<br>";
    } else {
      mensagem += "Dá um pulinho<br>";
    }
  }

  exibirMensagem(mensagem);
  adicionarQuebraDeLinha();
}

function adicionarQuebraDeLinha() {
  exibirMensagem("<br>");
}

function exibirMensagem(mensagem) {
  const mensagemContainer = document.getElementById("mensagemContainer");
  mensagemContainer.innerHTML += mensagem;
}

reproduzirMusica();
