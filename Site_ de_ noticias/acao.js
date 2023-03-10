/**
 * Created by Geovania Antonio on 23/02/2023.
 */
function validar(){

    var nome= document.getElementById("cnome").value;
    var genero= document.getElementsByName("gen");
    var tel= document.getElementById("ctelefone").value;
    var exp_tel= /^[244]+[0-9](9)$/;

    if(nome==""){
        alert("informe o nome");

    }

    if(!genero[0].checked && !genero[1].checked)
    {
        alert("o genero do aluno é obrigatorio");
    }
    if(tel=="")
    {
        alert("o telefone é obrigatorio");
    }
    if(!exp_tel.test(tel.value))
    {
        alert("insere o numero correto no formato angolano");
    }



}

