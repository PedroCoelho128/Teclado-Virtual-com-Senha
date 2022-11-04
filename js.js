let codigo = [];
let senhaCorreta = ['1', '2', '3', '4', '5', '6'];

function insert(num){
    if(codigo.length < 6){
        codigo.push(num);
        document.getElementById('senha').innerHTML = String(codigo).replace(/\,/g, " ");
    }
    else{
        alert("Máximo de 6 números");
    }
}

function back()
{
    var resultado = document.getElementById('senha').innerHTML;
    document.getElementById('senha').innerHTML = resultado.substring(0, resultado.length -1);
}

function senha()
{ 
if(codigo.toString() == senhaCorreta.toString()){
    alert("Acesso autorizado!");
}else{
    alert("Acesso não autorizado!");
    codigo = [];
    document.getElementById('senha').innerHTML = codigo.toString();
}
}