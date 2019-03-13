var botaoAdicionar = document.querySelector("#adicionar-paciente");  
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //add o evento de click no botão e previne o defalt de recarregar a página
    var form = document.querySelector("#form-adiciona");
    var individuo = obtempaciente(form);
    
    var erros = valida(individuo); 
    if(erros.length > 0){
        exibemensagem(erros);
        return;
    }

    adicionaPaciente(individuo);
    
    form.reset();
    var mensagem = document.querySelector("#erro");
    mensagem.innerHTML = "";
});

function adicionaPaciente(individuo){
    var pacienteTr = montaTr(individuo);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtempaciente(form){
    var individuo = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value,form.altura.value)         
    }
    return individuo;
}

function montaTr(individuo){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(individuo.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(individuo.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(individuo.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(individuo.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(individuo.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function valida(individuo){
    var erros = [];
    if(individuo.nome.length == 0){
        erros.push("Nome em branco");
    }
    if(validapeso(individuo.peso)){
        erros.push("O peso é inválido");
    }
    if(individuo.peso.length == 0){
        erros.push("Peso em branco");
    }
    if(validaaltura(individuo.altura)){
        erros.push("A altura é inválida");
    }
    if(individuo.altura.length == 0){
        erros.push("Altura em branco");
    }
    if(individuo.gordura.length == 0){
        erros.push("Gordura em branco");
    }
    return erros;
}
function exibemensagem(erros){
    var ul = document.querySelector("#erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }); 
}