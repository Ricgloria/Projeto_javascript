var titulo = document.querySelector(".titulo");
titulo.textContent = "Quero um emprego";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector(".info-imc");

    var valida = true;
    if(validapeso(peso)){
        valida = false;
        tdimc.textContent = "Peso inválido";
    }

    if(validaaltura(altura)){
        valida = false;
        tdimc.textContent = "Altura inválida";
    }

    if(valida){
        tdimc.textContent = calcImc(peso,altura);
    }
    else{
        paciente.classList.add("invalida");
    }
}

function validapeso(peso){
    if(peso <= 0 || peso >= 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaaltura(altura){
    if(altura <= 0 || altura >= 3.00){
        return true;
    }
    else{
        return false;
    }
}

function calcImc(peso,altura){
    var imc = 0;

    imc =  peso / (altura * altura);
    return imc.toFixed(1);
}