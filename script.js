let htmlnome = document.getElementById("nome")
let htmlpeso = document.getElementById("peso")
let htmlalt = document.getElementById("alt")

function calcular(){ 
    console.log("Calculando ...")

    let nome = htmlnome.value
    let peso = htmlpeso.value
    let alt = htmlalt.value

    let imc = peso / (alt * alt)
    var classe;

    if (imc < 16.9){
        classe = "Você está muito abaixo do peso";
    }else if( imc <= 18,4){
        classe = "Você está abaixo do peso";
    }
    else if(imc <= 24.9){
        classe = "Você está com peso normal";
    }
    else if( imc <= 29,9){
        classe = "Você está acima do peso";
    }
    else if( imc <= 34,9){
        classe = "Você está com obesidade grau I";
    }
    else if( imc <= 40){
        classe = "Você está com obesidade grau II";}
    else{
        classe = "Você está com obesidade grau III";
    }

    resultado.innerHTML = `<p> Olá ${nome}, seu Imc é ${imc}.  ${classe} </p>`
}
