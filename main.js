function enviarDados(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var sexo = document.getElementById("sexo").value;

    if(nome.length < 6 || nome.length > 30)
        alert('Tamanho do nome invalido');
    else{
        if(idade <= 0 || idade >=100)
            alert('Idade invalida');
        else{
            if(peso <= 0)
                alert('Peso invalido');
            else{
                if(altura <= 0)
                    alert('Altura invalida');
                else{
                    if(sexo != 'F' && sexo != 'M')
                        alert('Sexo invalido');
                    else
                        alert('Cadastro realizado com sucesso\nNome: '+nome + '\nIdade: '+idade+ '\nPeso: '+peso + '\nAltura: '+altura + '\nSexo: '+sexo);
                }
            }
        }
    }
}