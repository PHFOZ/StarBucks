/*variaveis "let" (qualquer linguagem de programação) */

/* let sabores "limão" "pitaya" "morango"
console.log (sabores) */
/*
 1 [x] Descobrir quando o botão for clicado
   [x] assim que o botão for clicado....
   [ ] mudar a imagem principal
   [x] mudar a cor de fundo 

função - um pedaço de codigo que vai ser "chamado" quando for "chamado" */

/* 1- function Clique(){
         console.log("botão foi clicado")

}
//HTML = document 
// QuerySelector --> Selecionar ou puxar o que eu pedir
*/

let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')

function TrocarCor(cor){
    circulo.style.background = cor
}

function TrocarImagem (endereco) {
    imagem.src = endereco 
}