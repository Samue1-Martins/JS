/*var nomes = ["samuel", "fernanda", "caio", "douglas"]

for (var i=0; i< nomes.length; i++){
    console.log(nomes,{i})
}*/

var nomes = []

function apresentar(){
    var n1 = prompt("Digite o seu nome");
    var n2 = prompt("digite o seu nome");
    var n3 = prompt("digite o seu nome");
    
    nomes.push(n1, n2, n3);

    for(var i=0; i < nomes.length; i++){
        document.write(nomes[i],"<br>")
    }
}

