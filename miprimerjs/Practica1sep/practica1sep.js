/*let lista=document.querySelector(".lista");
let boton=document.querySelector(".boton");
let eliminar=document.querySelector(".eliminar");
let agregar

let li
eliminar.addEventListener("click",()=>{
lista.parentNode.removeChild(lista);

  
  })

boton.addEventListener("click",()=>{
  let funcion= window.onload=function() {
     
    li =document.createElement("li");
    lista.appendChild(li)
     let text=document.createTextNode(agregar);
    li.appendChild(text);
        
   }
<<<<<<< HEAD:miprimerjs/Practica1sep/practica1sep.js

boton.addEventListener("click",()=>{
=======
  agregar=document.querySelector("#textoAgregar").value;
>>>>>>> e73b93fe714e4e4a897bb988307b5c5e6abc8128:miprimerjs/javaScript/practica1sep.js
   funcion(document.body.appendChild(lista))
   
     
})*//*
let boton=document.querySelector(".empezar")
let h1=document.querySelector(".h1")
let contador=0



boton.addEventListener("click",()=>{

 const seguir=setInterval(()=>{
      contador++
      h1.textContent=contador 
     if(contador>=50){
      clearInterval(seguir)}
    },200)
  
      
    

 
  
});*/
let boton=document.querySelector(".empezar")
let horas=document.querySelector(".h1")
let minutos=document.querySelector(".h2")
let segundos=document.querySelector(".h3")
let hours=0
let minut=0
let seconds=1
boton.addEventListener("click",()=>{
  const seguir=setInterval(()=>{
   seconds++
    segundos.textContent=seconds
   if(seconds>=59){
    minut++
   minutos.textContent=minut
    
  seconds=0}
  if(minut>=59){
   hours++
   horas.textContent=hours
    
 minut=0}

  },5)
})

 




  

