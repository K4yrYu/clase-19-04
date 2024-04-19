import {sumar,restar,multiplicar,dividir} from './operaciones.js';

let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");


let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");


let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");


/* suma*/ 
btnSumar.addEventListener("click", function(){
    error1.innerHTML = "";
    error2.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "debes agregar el primer numero";
        error1.style.color = "red";
        return;

    }

    if(n2.value === ""){
        error2.innerHTML = "debes agregar el segundo numero";
        error2.style.color = "red";
        return;

    }

    resultado.innerHTML = sumar(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";


});

/*resta */
btnRestar.addEventListener("click", function(){

    error1.innerHTML = "";
    error2.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "debes agregar el primer numero";
        error1.style.color = "red";
        return;

    }

    if(n2.value === ""){
        error2.innerHTML = "debes agregar el segundo numero";
        error2.style.color = "red";
        return;

    }

    resultado.innerHTML = restar(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";


});

/*multiplicar */
btnMultiplicar.addEventListener("click", function(){

    error1.innerHTML = "";
    error2.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "debes agregar el primer numero";
        error1.style.color = "red";
        return;

    }

    if(n2.value === ""){
        error2.innerHTML = "debes agregar el segundo numero";
        error2.style.color = "red";
        return;

    }

    resultado.innerHTML = multiplicar(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";


});

/*dividir */
btnDividir.addEventListener("click", function(){

    error1.innerHTML = "";
    error2.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "debes agregar el primer numero";
        error1.style.color = "red";
        return;

    }

    if(n2.value === ""){
        error2.innerHTML = "debes agregar el segundo numero";
        error2.style.color = "red";
        return;

    }

    

    resultado.innerHTML = dividir(n1,n2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "1.2rem";


});