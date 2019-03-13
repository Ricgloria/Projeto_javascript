var botao = document.querySelector("#trazer-paciente");
botao.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var individuos = JSON.parse(xhr.responseText);
        individuos.forEach(function(individuo){
            adicionaPaciente(individuo);
        });
    });
    xhr.send();
}); 