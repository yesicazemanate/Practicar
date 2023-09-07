let lista=document.querySelector(".lista");
let boton=document.querySelector(".boton");
let agregar=document.querySelector(".textoAgregar")

let li
let ul
   
  let funcion= window.onload=function(agregar) {
    
    li =document.createElement("li");
    lista.appendChild(li)
     let text=document.createTextNode(agregar);
    li.appendChild(text);
        
   }

boton.addEventListener("click",()=>{
   funcion(document.body.appendChild(lista))
   
     
})
