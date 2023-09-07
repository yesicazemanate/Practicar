let tareas=document.querySelector(".tarea")
let boton1=document.querySelector(".boton1")
let texto1=document.querySelector(".texto1")
let boton2=document.querySelector(".boton2")
let texto2=document.querySelector(".texto2")
let boton3=document.querySelector(".boton3")
let texto3=document.querySelector(".texto3")
let boton4=document.querySelector(".boton4")
let texto4=document.querySelector(".texto4")
let barra=document.querySelector(".barra")
let contador=0
let seguir1=1
let seguir2=1
let seguir3=1
let seguir4=1


barra.style.display="none"

boton1.addEventListener("click",()=>{
    if(seguir1==1){
   contador+=25
 texto1.style.color="green"
 barra.style.display="block"
 barra.style.width= contador+"%"
 boton1.textContent="terminado"
 seguir1++
    }else{
        contador-=25
        texto1.style.color="red"
        barra.style.display="red"
        barra.style.width= contador+"%"
        boton1.textContent="Por terminar"
        seguir1=1
    }
})
boton2.addEventListener("click",()=>{
    if(seguir2==1){
        contador+=25
      texto2.style.color="green"
      barra.style.display="block"
      barra.style.width= contador+"%"
      boton2.textContent="terminado"
      seguir2++
         }else{
             contador-=25
             texto2.style.color="red"
             barra.style.display="red"
             barra.style.width= contador+"%"
             boton2.textContent="Por terminar"
             seguir2=1
         }
   })

boton3.addEventListener("click",()=>{
    if(seguir3==1){
        contador+=25
      texto3.style.color="green"
      barra.style.display="block"
      barra.style.width= contador+"%"
      boton3.textContent="terminado"
      seguir3++
         }else{
             contador-=25
             texto3.style.color="red"
             barra.style.display="red"
             barra.style.width= contador+"%"
             boton3.textContent="Por terminar"
             seguir3=1
         }
})
boton4.addEventListener("click",()=>{
    if(seguir4==1){
        contador+=25
      texto4.style.color="green"
      barra.style.display="block"
      barra.style.width= contador+"%"
      boton4.textContent="terminado"
      seguir4++
         }else{
             contador-=25
             texto4.style.color="red"
             barra.style.display="red"
             barra.style.width= contador+"%"
             boton4.textContent="Por terminar"
             seguir4=1
         }
   })
   

 
