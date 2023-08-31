/*let botonRojo=document.querySelector(".rojo")
let botonAmarillo=document.querySelector(".amarillo");
let botonVerde=document.querySelector(".verde");
let enunciado=document.querySelector(".enunciado");
let botonOtro=document.querySelector(".otro");
botonOtro.style.display="none";
botonRojo.addEventListener("click",()=>{
  document.body.style.backgroundColor="red"
  botonAmarillo.style.display="none"
  botonVerde.style.display="none"
  enunciado.textContent="El rojo color muy bonito"
  botonOtro.style.display="block"
})
botonAmarillo.addEventListener("click",()=>{
    document.body.style.backgroundColor="yellow"
    botonRojo.style.display="none"
    botonVerde.style.display="none"
    enunciado.textContent="El amarillo color de la esperanza"
    botonOtro.style.display="block"
  })
  botonVerde.addEventListener("click",()=>{
    document.body.style.backgroundColor="green"
    botonAmarillo.style.display="none"
  botonRojo.style.display="none"
  enunciado.textContent="El verde color de la tranquilidad"
  botonOtro.style.display="block"
  })
  botonOtro.addEventListener("click",()=>{
    botonAmarillo.style.display="block"
    botonRojo.style.display="block"
    botonVerde.style.display="block"
    botonOtro.style.display="none"
    enunciado.textContent="Escoje un color"
    document.body.style.backgroundColor="white"
  })*/
  let imagenes=document.querySelector(".imagen")
  let titulo=document.querySelector(".titulo")
  let descripcion=document.querySelector(".descripcion")
  let circuloRojo=document.querySelector(".circuloRojo")
  let circuloGris=document.querySelector(".circuloGris")
  let circuloAzul=document.querySelector(".circuloAzul")
  let boton=document.querySelector(".boton")
  console.log(imagenes,titulo)
  
  circuloRojo.addEventListener("click",()=>{
    imagenes.src="./imagenes/carroRojo.jpg"
    titulo.textContent="chevrolet tracker rojo"
    descripcion.textContent="Con Chevrolet Tracker Turbo, no tienes que elegir entre tecnología, rendimiento o seguridad, porque tienes todo en un mismo lugar. Conoce la única camioneta que ofrece frenado de emergencia, 6 airbags, cargador inalámbrico y mucho más, variedad de colores tal como este color rojo"
  })
  circuloAzul.addEventListener("click",()=>{
    imagenes.src="./imagenes/carroAzul.jfif"
    titulo.textContent="chevrolet tracker azul"
    descripcion.textContent="Con Chevrolet Tracker Turbo, no tienes que elegir entre tecnología, rendimiento o seguridad, porque tienes todo en un mismo lugar. Conoce la única camioneta que ofrece frenado de emergencia, 6 airbags, cargador inalámbrico y mucho más, variedad de colores tal como este color azul"
  })
  circuloGris.addEventListener("click",()=>{
    imagenes.src="./imagenes/carroGris.jpg"
    titulo.textContent="chevrolet tracker gris"
    descripcion.textContent="Con Chevrolet Tracker Turbo, no tienes que elegir entre tecnología, rendimiento o seguridad, porque tienes todo en un mismo lugar. Conoce la única camioneta que ofrece frenado de emergencia, 6 airbags, cargador inalámbrico y mucho más, variedad de colores tal como este color gris"

  })
  