'use strict';
// borde imagen
const imagen = document.getElementById("goku");
const container = document.getElementById("container");

imagen.addEventListener('click', ()=>{
    if(container.classList.contains('bordeOculto')){
        container.classList.remove('bordeOculto');
        container.classList.add('bordeVisible');
    }else if(container.classList.contains('bordeVisible')){
        container.classList.remove('bordeVisible');
        container.classList.add('bordeOculto');
    }
})
// num mayor de 10

const num1 = document.getElementById('numgato');
const num2 = document.getElementById('numgato2');
const num3 = document.getElementById('numshrek');
const suma = num1+num2+num3;
const text = document.getElementById('textnum');
const btnVerificar = document.getElementById('btnVerificar');

btnVerificar.addEventListener('click', ()=>{
    if (suma > 10){
        text.innerHTML = "Hola buenas tardes";
    }else{
        text.innerHTM = "Hola buenas noches";
        return text;
    }
});



