/*alert("para saber su indice de masa corporal por favor igresar los suiguientes datos")
let peso=prompt("ingrese peso en kilogramos")
let estatura=prompt("ingrese su estatura en metros")
let IMC=peso/(Math.pow(estatura,2))
//let resultado=peso/estaturaEle
alert(`su indice de masa corporal es ${IMC}`)*/
/*alert("lista de productos")

let producto=[]

    for(let i=1;i<=10;i++){
    let productos=prompt("producto a comprar")
     producto.push(productos)
    }


console.log(producto)*/
/*let palabra=(prompt("digita una palabra"))
let vocales=(Array.from(palabra))
let contA=0
let contE=0
let contI=0
let contO=0
let contU=0

for (let i=0; i<vocales.length; i++){
    let vocal = vocales[i]
    if(vocal =="a"){
        contA++
    }else if(vocal=="e"){
        contE++
    }else if(vocal=="i"){
        contI++
    }else  if(vocal=="o"){
        contO++
    }else if(vocal=="u"){
        contU++
    }
}    
console.log(`las vocales a son ${contA}`)
console.log(`las vocales e son ${contE}`)
console.log(`las vocales i son ${contI}`)
console.log(`las vocales o son ${contO}`)
console.log(`las vocales u son ${contU}`)
console.log(vocales)*/
/*let palabra=prompt("ingresa palabra")
let palindromo=(Array.from(palabra))
let reversa=palindromo.reverse().join("")
if(reversa==palabra){
    console.log("es palindromo")
}else{
    console.log("no es palindromo")
}*/
let numeroContraseñas=prompt("cuantas contraseñas quieres")
let letras=(Array.from("abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"))
let arrayNumeros=[]
let cont=1
while(cont<=numeroContraseñas){
    for(let j=0;j<7;j++){
    let numeros=Math.round(Math.random()*9)
    arrayNumeros.push(numeros)
   
    }
    console.log(arrayNumeros)
cont++
}






