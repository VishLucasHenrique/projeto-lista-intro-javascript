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

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui

  altura = Number(prompt("Insira a altura aqui"))
  largura = Number(prompt("Insira a largura aqui"))

  const area = altura * largura

  console.log(`A area do retangulo de altura ${altura} e largura ${largura} é igual a: ${area}`)
}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  // implemente sua lógica aqui

  anoAtual = Number(prompt("Insira o ano em que estamos"))
  anoDeNascimento = Number(prompt("Insira o ano em que você nasceu"))

  const idade = anoAtual - anoDeNascimento
  const idade2 = idade - 1
  console.log(`Se você nasceu em ${anoDeNascimento} e estamos em ${anoAtual} você deve ter ${idade} ou ${idade2} anos`)
}

imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  peso = Number(prompt("Insira seu peso em kg aqui"))
  altura = Number(prompt("Insira sua altura em metros aqui"))

  const IMC = ((peso) / (altura * altura)).toFixed(2)

  return `Você pesa ${peso}kgs e sua altura é ${altura}m, portanto seu IMC é: ${IMC}`
}

console.log(calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  nome = prompt("Insira seu nome aqui")
  idade = Number(prompt("Insira aqui a sua idade"))
  email = prompt("Insira seu email aqui")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("E a segunda?")
  const cor3 = prompt("Poderia me dizer a terceira também?")

  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas.join(' '))
}

imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  string = prompt("escreva qualquer coisa aqui em letra minúscula")

  return `Isso é o que você escreveu em letra, mas agora em letra maiúscula ${string.toUpperCase()}`
}

console.log(retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  custo = Number(prompt("Insira o custo do espetáculo aqui em R$"))
  valorIngresso = Number(prompt("Insira o valor do ingresso aqui em R$"))

  let semPrejuizo = custo / valorIngresso
  
  if(Number.isInteger(semPrejuizo)){
    semPrejuizo 
  } else {
    semPrejuizo +=1
  }

  return `Considerando o custo R$:${custo} e o valor do ingresso R$:${valorIngresso}, deveremos ter ao menos ${Math.floor(semPrejuizo)} pagantes para não ter prejuizo`
}

console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  string1 = prompt("Escreva qualquer coisa aqui")
  string2 = prompt("Escreva qualquer coisa aqui novamente")

  const checandoString1 = string1.length
  const checandoString2 = string2.length
  const mesmoTamanho = checandoString1 == checandoString2

  return `A String1 ${string1} tem o mesmo tamanho da String2 ${string2}? ${mesmoTamanho}`
}

console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  array = ["Lucas", 25, "Desenvolvedor full stack", true]

  return `O primeiro elemento do array é ${array[0]}`
}
console.log(retornaPrimeiroElemento())

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  array = ["Lucas", 25, "Desenvolvedor full stack", true]

  return `O ultimo elemento do array é ${array[array.length-1]}`
}

console.log(retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array = ["Lucas", 25, "Desenvolvedor full stack"]

  return `Agora o primeiro elemento é ${array[2]} e o ultimo é ${array[0]}: ${array.reverse()}`
}

console.log(trocaPrimeiroEUltimo())

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string1 = prompt("Insira uma palavra aqui em minusculo")
  string2 = prompt("Insira a mesma palavra em maiusculo")

  return `A string1 ${string1} é igual a string2 ${string2}? ${string1.toUpperCase() == string2.toUpperCase()}`
}

console.log(checaIgualdadeDesconsiderandoCase())

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

  if(primeiraCondicao) {
    console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${primeiraCondicao}`)
  } else if(segundaCondicao){
    console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${segundaCondicao}`)
  } else if(terceiraCondicao) {
    console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${terceiraCondicao}`)
  } else {
    console.log(`Fulano tem ${checaIdade} anos e tirou seu rg a ${checaRenovacao} anos, ele precisa renovar? ${!verdadeira} `)
  }
}

checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  ano = Number(prompt("Qual o ano atual?"))

  const primeiraCondicao = ano % 400
  const outraCondicao = ano % 100
  const juntandoCondicao = (primeiraCondicao == 0 || (ano % 4 == 0 && !outraCondicao == 0))
  const verdadeira = true

 if(juntandoCondicao) {
  console.log (`O ano de ${ano} é bissexto? ${juntandoCondicao}`)
 } else {
  console.log(`O ano de ${ano} é bissexto? ${juntandoCondicao}`)
 }
}

checaAnoBissexto()

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

  if(condicaoLabenu) {
    console.log(`Você tem mais de 18 anos? ${idadeUsuario} \nVocê possui ensino médio completo? ${ensinoMedio} \nVocê tem horário disponível para fazer o curso? ${horario} \n ${condicaoLabenu}`)
  } else {
    console.log(`Você tem mais de 18 anos? ${idadeUsuario} \nVocê possui ensino médio completo? ${ensinoMedio} \nVocê tem horário disponível para fazer o curso? ${horario} \n ${condicaoLabenu}`)
  }
}

checaValidadeInscricaoLabenu()