function soma(){
    let num1, num2, resp;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp = parseFloat(num1)+parseFloat(num2);
    document.getElementById("exibicao").innerText = "Resultado: " + resp;
    //alert(resp);
}

function subtrai(){
    let num1, num2, resp;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp = parseFloat(num1) - parseFloat(num2);
    document.getElementById("exibicao").innerText = "Resultado: " + resp;
}

function multiplica(){
    let num1, num2, resp;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp = parseFloat(num1)*parseFloat(num2);
    document.getElementById("exibicao").innerText = "Resultado: " + resp;
}

function divide(){
    let num1, num2, resp;
    num1 = document.getElementById("Num1").value;
    num2 = document.getElementById("Num2").value;
    resp = parseFloat(num1)/parseFloat(num2);
    document.getElementById("exibicao").innerText = "Resultado: " + resp;
}