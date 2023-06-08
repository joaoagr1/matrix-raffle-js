 // Função que verifica se o número é primo ou não
 function verificarPrimo(valor) {
    if (valor <= 1) {
      // O número 1 não é primo
      return false;
    }

    for (let i = 2; i <= Math.sqrt(valor); i++) {
      if (valor % i === 0) {
        // Esse 'for' percorre de 2 até a raiz quadrada do número sorteado
        // dividindo para conferir se é primo ou não
        return false;
      }
    }

    return true;
  }

  //Funcão que verifica se é intersesao ou não 
  function verificaIntersesao(valor) {
    if(vetorPar.includes(valor) && vetorPrimo.includes(valor)){
      return true
    }else {
      return false
    }
  }

  function preencherMatriz() {
    let matriz = [];

    // Cria a matriz
    for (let i = 0; i < 10; i++) {
      matriz[i] = [];
      for (let j = 0; j < 10; j++) {
        let valor;
        do {
          // Sorteia o número que vai entrar em 'valor'
          valor = Math.floor(Math.random() * 1000) + 1;

          // Confere se o valor é par, caso seja, joga no vetor de números pares
          if (valor % 2 === 0) {
            vetorPar.push(valor);
          }

          // Chama a função que verifica se o número é primo
          if (verificarPrimo(valor)) {
            vetorPrimo.push(valor);
          }
          if(verificaIntersesao(valor)){
            vetorIntersesao.push(valor)
          }
        } while (matriz[i].includes(valor)); // Continua fazendo esses sorteios e validações até encontrar um valor que não esteja repetido
        matriz[i][j] = valor;
      }
    }

    return matriz;
  }

  let vetorPar = [];
  let vetorPrimo = [];
  let vetorIntersesao = [];
  let matrizAleatoria = preencherMatriz();

  vetorPar.sort((a, b) => a - b);
  vetorPrimo.sort((a, b) => a - b);


  // let valorInter = vetorPar.forEach(valor => vetorPrimo.includes(valor))

  // intersecao.push(valorInter);

  // console.log(intersecao);

  var table = document.getElementById("myTable");

  // Loop para criar as linhas e células da tabela Matriz aleatória
  for (var i = 0; i < matrizAleatoria.length; i++) {
    var row = table.insertRow(i);

    for (var j = 0; j < matrizAleatoria[i].length; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = matrizAleatoria[i][j];

      if (matrizAleatoria[i][j] % 2 === 0) {
        cell.classList.add('green-cell');
      }
      if (verificarPrimo(matrizAleatoria[i][j])) {
        cell.classList.add('red-cell');
      }
    }
  }

  // Preenche a tabela de números pares por coluna
  var parTable = document.getElementById("parTable");

  // Calcula o número de colunas
  var numColumns = Math.ceil(vetorPar.length / matrizAleatoria.length);

  // Cria as células da tabela por coluna
  for (var i = 0; i < matrizAleatoria.length; i++) {
    var row = parTable.insertRow(i);

    for (var j = 0; j < numColumns; j++) {
      var cell = row.insertCell(j);
      var index = j * matrizAleatoria.length + i;
      if (index < vetorPar.length) {
        cell.innerHTML = vetorPar[index];
        cell.classList.add('green-cell');
      }
    }
  }




  var primeTable = document.getElementById("primeTable");

// Calcula o número de colunas
var numColumns = Math.ceil(vetorPrimo.length / matrizAleatoria.length);

// Cria as células da tabela por coluna
for (var i = 0; i < matrizAleatoria.length; i++) {
var row = primeTable.insertRow(i);

for (var j = 0; j < numColumns; j++) {
  var cell = row.insertCell(j);
  var index = j * matrizAleatoria.length + i;
  if (index < vetorPrimo.length) {
    cell.innerHTML = vetorPrimo[index];
    cell.classList.add('red-cell');
  }
}
}



var intersecao = document.getElementById("intersecao");

// Calcula o número de colunas
var numColumns = Math.ceil(vetorIntersesao.length / matrizAleatoria.length);

// Cria as células da tabela por coluna
for (var i = 0; i < matrizAleatoria.length; i++) {
var row = intersecao.insertRow(i);

for (var j = 0; j < numColumns; j++) {
  var cell = row.insertCell(j);
  var index = j * matrizAleatoria.length + i;
  if (index < vetorIntersesao.length) {
    cell.innerHTML = vetorIntersesao[index];
    cell.classList.add('red-cell');
  }
}
}

console.log(vetorIntersesao);







