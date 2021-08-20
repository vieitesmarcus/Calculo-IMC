function validaPeso(peso){
    let status = false;
    if(peso > 0){
        status = true
    }
    return status;
}

function validaAltura(altura){
    let status = false;
    if(altura > 0){
        status = true
    }
    return status;
}



function calcular() {

    var peso = document.getElementById('peso').value; //receber valor do input peso
    var altura = document.getElementById('altura').value; //receber valor do input peso

    let statusPeso = validaPeso(peso);
    let statusAltura = validaAltura(altura);

    if((statusPeso && statusAltura) == true){
        let imc = parseFloat((peso / (altura*altura)).toFixed(2)); // alterar valor para float para manter duas casa depois da vírgula

        document.getElementById('resultado').innerHTML = imc; // mostra resultado

        var pintarTr; //variavel para pintar as tr's = linhas
        var i; //valor apenas para criar o laço
        for(i = 0; i < 6; i++){ //laço para limpar background pintados na tr
            document.getElementsByClassName('linhas')[i].style.backgroundColor = '';
        }
        if(imc < 18.5){    //teste de condição para mudar a cor do      background apontando onde esta o peso
            pintartr = "bPeso";
            document.getElementById("bPeso").style.backgroundColor = "#5aebf1";
        }   else if (imc > 18.5 && imc < 25) {
                pintartr = "pIdeal";        
                document.getElementById("pIdeal").style.backgroundColor = "#5aebf1";
            }   else if (imc > 25 && imc < 30) {
                pintartr = "sobrepeso";
                document.getElementById("sobrepeso").style.backgroundColor = "#5aebf1";
                }   else if (imc > 30 && imc < 35) {
                    pintartr = "obesidade";
                    document.getElementById("obesidade").style.backgroundColor = "#5aebf1";
                    }   else if (imc > 35 && imc < 40) {
                            pintartr = "obesidade2";
                            document.getElementById("obesidade2").style.backgroundColor = "#5aebf1";
                            }   else if (imc > 40) {
                                    pintartr = "grave";
                                    document.getElementById("grave").style.backgroundColor = "#5aebf1";
                                }

    }else{
        return document.getElementById('resultado').innerHTML = "Inserir dados corretos";
    }
    

}

function limpar(){ // função para limpar todos campos inclusive o background
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resultado').innerHTML = ""; 
    for(let i = 0; i < 6; i++){
    document.getElementsByClassName('linhas')[i].style.backgroundColor = '';
    }
}
