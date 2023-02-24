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
//
