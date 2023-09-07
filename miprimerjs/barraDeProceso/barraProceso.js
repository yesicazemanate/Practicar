const div=document.querySelector(".div")
const boton=document.querySelector(".boton")
function llenar(){
div.classList.toggle("final")
}
boton.addEventListener("click",() =>{
   llenar()
})