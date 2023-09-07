/*const image=document.querySelector(".imagen")
const anterior=document.querySelector(".anterior")
const siguiente=document.querySelector(".siguiente")
 

const imagenes=["../imagenes/carroAzul.jfif","../imagenes/carroGris.jpg","../imagenes/carroRojo.jpg"]
let contador=0
function img(){
    image.src=imagenes[contador]
}

img()
anterior.addEventListener("click",()=>{
   contador--
    if(contador<0){
        contador=imagenes.length-1

    }
    img()
})
siguiente.addEventListener("click",()=>{
    contador++
    if(contador>=imagenes.length){
        contador=0
    }
    img()*/
/*
const sumar=function(num1,num2){
   
    console.log(num1+num2)
}
sumar(1,2)*//*
let edades=prompt("ingrese edad")
const edad=function(edad){
    if(edad<18){
        console.log("menor de edad")
    }else {
        console.log("mayor de edad")
    }
}
edad(edades)*//*
const sumar=(num1,num2)=>{
    console.log(num1+num2)
}
sumar(1,2)*//*
const saludar=(nombre)=>{
    return"hola"+nombre
}
saludar("yesica")*//*
const saludar2=(nombre)=>`hola ${nombre}`
console.log(saludar2("yesica"))*//*
const datos=(nom,city)=>({
    id:1,
    nombre:nom,
    cuidad:city,
    edad:22
})
console.log(datos("yesica","popayan"))*//*
let palabra=prompt("ingrese palabra")

const vocales=(palabra)=>{
    let palabras=Array.from(palabra)
    let vocal=palabras.filter((item)=> item=="a"||item=="e"||item=="i"||item=="o"||item=="u")
    if(vocal.length!=0){
        return true
    }else{
        return false
    }
}
let palabras=palabra.toLowerCase()
 
console.log(vocales(palabras))*/

const image=document.querySelector(".imagen")

 

const imagenes=["../imagenes/carroAzul.jfif","../imagenes/carroGris.jpg","../imagenes/carroRojo.jpg"]
let contador=0
function img(){
    setInterval (()=>{
    image.src=imagenes[contador]
    contador++
    if(contador>imagenes.length-1){
contador = 0
    }
    },1000)
    
}

img()
