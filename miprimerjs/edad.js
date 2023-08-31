/*let añoNacimiento = prompt("digite año de nacimiento")
let mesNacimiento= prompt("digite mes de nacimiento")
let añoActual = new Date().getFullYear();
const mesActual = new Date().getMonth() + 1;
let cont=0
for (let i = añoNacimiento; i < añoActual; i++) {
    cont ++
    
}
if (mesNacimiento > mesActual) {
        cont--
   }
alert(`la edad actual es ${cont}`)*/
/*let arrayNumeros=[1,3,1,-2,-6,-2,9,9,10,45]

let contenedor
let arrayOrdenado=[]
let nuevo

let contador=0
    for(let i=0; i < arrayNumeros.length;i++){
  for(let j=0; j < arrayNumeros.length-1; j++){
    if(arrayNumeros[j]<arrayNumeros[j+1]){
     nuevo=arrayNumeros[j]
     arrayNumeros[j]=arrayNumeros[j+1]
     arrayNumeros[j+1]=nuevo
    }
    if(arrayNumeros[i]==arrayNumeros[i+1]){
        arrayNumeros[i]=arrayNumeros.pop()
}

}
}
arrayOrdenado=arrayNumeros.sort()
console.log(arrayNumeros)*/
/*let matrizNumeros=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]

]

let suma=0
for(let i=0; i<=matrizNumeros.length; i++) {
    for(let j=0; j<=matrizNumeros.length; j++) {

suma=matrizNumeros[i][j]*8
console.log(" ")
console.log(suma)

    }
    
console.log("")
suma=0
}*/

/*

let matrizAsteriscos=[
    [],
    ["","*",""],
    ["*","*","*"],
    ["*"],
    ["*"]

]
let contador=0



for(let i=0; i<matrizAsteriscos.length;i++){
 let conta=matrizAsteriscos[i].filter((num)=>num==="*",contador++)
    console.log(conta)
}
console.log(`hay ${contador} asteriscos`)


/*let matrizNumeros=[
    [1,2,3],
    [5,6,7],
]
let multi=[
    [2,4,6],
    [5,6,7]
]
let resultado=[]
let num1
for(let i=0; i<=matrizNumeros.length; i++){
    for(let j=0; j<=matrizNumeros.length; j++){
        num1=matrizNumeros[i][j]
    }}
    for(let k=0; k<=multi; k++){
        for(let l=0; l<=multi; l++){
   resultado=num1*multi[k]
   
        }
        console.log(resultado)
    }
*//*
let numero=prompt("ingrese numero")
let matriz=[numero]
let asterisco="*"
for(let i=0;i<numero; i++){
    for(let j=0; j<numero; j++){
matriz[i][j]=asterisco
}

}
console.log(matriz)*/
/*let saludar="hola"
function saludo(a){
    console.log(`${a} yessica`)
    return;
}
saludo(saludar)*/
/*let saludar="hola"
const saludo=function(a){
    console.log(`${a} yessica`)
    return;
}
saludo(saludar)*/
/*function multiplicar(a=4,b=2){
    return console.log(a*b)
}
multiplicar()*//*
let nombre=prompt("ingrese nombre")
let edad=prompt("ingrese edad")
function saludo(a,b){
    console.log(`hola ${a}, tienes ${b} años`)

}
saludo(nombre,edad)*/
/*let saludo="hola"
let saludar=(saludo)=>{
    console.log(`${saludo} yesica`)
}
saludar(saludo)*//*
let nombre=prompt("ingrese nombre")
let edad=prompt("ingrese edad")
let saludar=(a,b)=>{
    console.log(`hola ${a}, tienes ${b} años`)
}
saludar(nombre,edad)*/
/*let altura=prompt("ingrese altura")
let base=prompt("ingrese base")
let areaTriangulo=(altura,base)=>{
    let resultado=(altura*base)/2
    console.log(`el area es ${resultado}`)
}
areaTriangulo(altura,base)*/
/*const div=document.querySelector(".div2")
const a=div.children[0].textContent="hola de nuevo"
console.log(div)
console.log(a)*/
/*
const nombre=document.querySelector("#nombre")
const edad=document.querySelector("#edad")
const div=document.querySelector(".div2")

function validar(){
if(nombre.value=="yesica"&& edad.value==22 ){
    div.children[0].textContent=`hola ${nombre.value} tienes ${edad.value} años`
  
}
else{
    div.children[0].textContent=`hola ${nombre.value} tienes ${edad.value} años`
    
}
}*/











