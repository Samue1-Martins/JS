var nomes = []

function apresentar(){
    var nome = prompt("Digite o seu nome:")
    nomes.push(nome)
    while (nome.length < 3){
        alert("Nome inválido: Númeors de caracteres tem que ser maior de 3 digitos")
        nome = prompt("Dgite seu nome novamente")
    }
    alert("Parabéns, seu nome foi registrado, "+ nome + "!")
}

apresentar()