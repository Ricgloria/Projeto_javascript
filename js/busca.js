var filtroImput = document.querySelector("#filtrar");

filtroImput.addEventListener("input", function(){
    
    var individuos = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(var i = 0; i < individuos.length; i++){
            var individuo = individuos[i];
            var tdNome = individuo.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if(!expressao.test(nome)){
                individuo.classList.add("invisivel");
            }
            else{
                individuo.classList.remove("invisivel");
            }
        }    
    }
    else{
        for(var i = 0; i < individuos.length; i++){
            var individuo = individuos[i];
            individuo.classList.remove("invisivel");
        }
    }
});
