// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// "AINDA POSSO OUVIR OS GRITOS DELE, APÓS TER QUE REESCREVER TODOS OS CÓDIGOS QUE FORAM FEITOS COM TANTO AMOR, PRA ESPERAR UMA RESPOSTA SINGULAR DE CADA EXERCICÍO"

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui

  altura = Number(prompt("Insira a altura aqui"))
  largura = Number(prompt("Insira a largura aqui"))

  const area = altura * largura

  //console.log(`A area do retangulo de altura ${altura} e largura ${largura} é igual a: ${area}`)
  console.log(area)
}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui

  anoAtual = Number(prompt("Insira o ano em que estamos"))
  anoDeNascimento = Number(prompt("Insira o ano em que você nasceu"))

  const idade = anoAtual - anoDeNascimento
  const idade2 = idade - 1

  //console.log(`Se você nasceu em ${anoDeNascimento} e estamos em ${anoAtual} você deve ter ${idade} ou ${idade2} anos`)
  console.log(idade)
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const IMC = ((peso) / (altura * altura)).toFixed(1)

  //return `Você pesa ${peso}kgs e sua altura é ${altura}m, portanto seu IMC é: ${IMC}`
  return IMC
}

console.log(calculaIMC(85, 1.8))

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  nome = prompt("Insira seu nome aqui")
  idade = Number(prompt("Insira aqui a sua idade"))
  email = prompt("Insira seu email aqui")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("E a segunda?")
  const cor3 = prompt("Poderia me dizer a terceira também?")

  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  
  // return `Isso é o que você escreveu em letra minúscula: ${string}, agora em letra maiúscula ${string.toUpperCase()}`
  return string.toUpperCase()
}

console.log(retornaStringEmMaiuscula("oi"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  // custo = Number(prompt("Insira o custo do espetáculo aqui em R$"))
  // valorIngresso = Number(prompt("Insira o valor do ingresso aqui em R$"))


  let semPrejuizo = custo / valorIngresso
  
  // if(Number.isInteger(semPrejuizo)){
  //   semPrejuizo 
  // } else {
  //   semPrejuizo +=1
  // }

  //return `Considerando o custo R$:${custo} e o valor do ingresso R$:${valorIngresso}, deveremos ter ao menos ${Math.floor(semPrejuizo)} pagantes para não ter prejuizo`
  return semPrejuizo
}

console.log(calculaIngressosEspetaculo(3000, 100))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  // string1 = prompt("Escreva qualquer coisa aqui")
  // string2 = prompt("Escreva qualquer coisa aqui novamente")

  const checandoString1 = string1.length
  const checandoString2 = string2.length
  const mesmoTamanho = checandoString1 == checandoString2

  //return `A String1 ${string1} tem o mesmo tamanho da String2 ${string2}? ${mesmoTamanho}`
  return mesmoTamanho
}

console.log(checaStringsMesmoTamanho("ola", "abc"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui


  //return `O primeiro elemento do array é ${array[0]}`
  return array[0]
}
console.log(retornaPrimeiroElemento(["Lucas", 25, "Desenvolvedor full stack"]))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


  //return `O ultimo elemento do array é ${array[array.length-1]}`
  return array[array.length-1]
}

console.log(retornaUltimoElemento(["Lucas", 25, "Desenvolvedor full stack"]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
  let primeiroElemento = array[0]
  let ultimoElemento = array[array.length-1]

  array[0] = ultimoElemento
  array[array.length-1] = primeiroElemento

  return array
}

console.log(trocaPrimeiroEUltimo(["Lucas", 25, "Desenvolvedor full stack"]))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  // string1 = prompt("Insira uma palavra aqui em minusculo")
  // string2 = prompt("Insira a mesma palavra em maiusculo")

  //return `A string1 ${string1} é igual a string2 ${string2}? ${string1.toUpperCase() == string2.toUpperCase()}`

  return string1.toUpperCase() == string2.toUpperCase()
}

console.log(checaIgualdadeDesconsiderandoCase("ola", "OLA"))

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number (prompt("Qual o ano atual?"))
  const anoDeNascimento = Number (prompt("Qual o ano em que você nasceu?"))
  const anoRg = Number (prompt("Em qual ano você tirou seu RG?"))

  const checaIdade = anoAtual - anoDeNascimento
  const checaRenovacao = anoAtual - anoRg
  const primeiraCondicao = ((checaIdade <= 20) && (checaRenovacao >= 5))
  const segundaCondicao = ((checaIdade > 20 && checaIdade <= 50) && (checaRenovacao >= 10))
  const terceiraCondicao = ((checaIdade > 50) && (checaRenovacao >= 15))
  const verdadeira = true

  // if(primeiraCondicao) {
  //   console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${primeiraCondicao}`)
  // } else if(segundaCondicao){
  //   console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${segundaCondicao}`)
  // } else if(terceiraCondicao) {
  //   console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${terceiraCondicao}`)
  // } else {
  //   console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${!verdadeira} `)
  // }

  if(primeiraCondicao) {
    console.log(primeiraCondicao)
  } else if(segundaCondicao) {
    console.log(segundaCondicao)
  } else if(terceiraCondicao) {
    console.log(terceiraCondicao)
  } else {
    console.log(!verdadeira)
  }

}

checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  // ano = Number(prompt("Qual o ano atual?"))

  const primeiraCondicao = ano % 400
  const outraCondicao = ano % 100
  const juntandoCondicao = (primeiraCondicao == 0 || (ano % 4 == 0 && !outraCondicao == 0))

  return juntandoCondicao
}

checaAnoBissexto(1900)

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idadeUsuario = (prompt("Você tem mais de 18 anos?"))
  const ensinoMedio = (prompt("Você possui ensino médio completo?"))
  const horario = (prompt("Você possui disponibilidade exclusiva durante os horários do curso?"))

  const condicaoLabenu = (idadeUsuario == "sim") && (ensinoMedio == "sim") && (horario == "sim")

  if(condicaoLabenu){
    console.log(condicaoLabenu)
  } else {
    console.log(condicaoLabenu)
  }

}

checaValidadeInscricaoLabenu()