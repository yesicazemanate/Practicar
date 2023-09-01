/*let numero=[1,2,3,4,5,6,7,8,9,10]

for(let i=1;i<=numero.length;i++){
 let numeros=i*2
 console.log(numeros)
}*/
/*

const numeroPorDos = numero.map(n=> n*2)
console.log(numeroPorDos)
console.log("hola mundo")*/
//let numero=[1,2,3,4,5,6,7,8,9,10]
/*const arraynumeros=numero.filter(elemento=> elemento%2==0 )
console.log(arraynumeros)*//*
const numeros=numero.forEach((elemento,i)=>{
    console.log(`${elemento} se encuentra en el indice ${i}`)
})*/
/*const numeros=numero.find(elemento=>elemento>4)
console.log(numeros)*/

/*let numero=[1,2,3]
const [p1, p2,p3]=numero
console.log(p1)
const persona={
    nombre:"yesica",edad:22,estado:true
}
console.log(persona.edad);
const {edad,no} = persona*/
//const array=[5,3,6,1,2,4]
//let index=2
//console.log(`usando un index of ${index} el item que retotna es ${array.at(index)}`)
//console.log(array.copyWithin(0,4,5))
//const array1 = ['a', 'b', 'c'];

/*const iterator1 = array1.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);*/
/*const numero = (currentValue) => currentValue < 40;

const array1 = [1, 20, 39, 29, 10, 13];

console.log(array1.every(numero));*/
/*const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

/*console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]*/

//console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

  //const array=[1,2,3,4,5]
 /* let index= 3;
  let posicion=2;
 // console.log(`en el index ${index} esta el valor ${array.at(index)}`)
  console.log("en la posicion " +posicion+ " esta el valor"+array.at(index))*/
 /* const array2=[6,7,8,9,10]
  let arrayResult=array.concat(array2);
  console.log(arrayResult)*/
  //const letras=(Array.from("camila"))

//console.log(letras.copyWithin(3,4))
/*const letra=letras.entries()
console.log(letra.next().value)
console.log(letra.next().value)*/
/*const every0=(n) => n>20
const numero=[21,34,45,69]
console.log(numero.every(every0))*/
/*const array1=[1,2,3,4,5]
console.log(array1.fill(0,2,5))
const nombre=(Array.from("yessica"))
console.log(nombre.fill("h",2))*/
/*const word=["yesica","brayan","daniela","marta"]
const result=word.filter((words)=> words.length <6)
console.log(result)*/
//const array=[12,34,56,6,7]
//const found=array.find((element)=> element%6==0)
//console.log(found)
/*const letras=(Array.from("yessica"))
const result=letras.flatMap((n)=>n==="i"?["f","f"]:"u")
console.log(result)*/
/*const array1=["a","b","c","d","e","f","g","h"]
array1.forEach(element => {
    if(element=="a"){
        console.log("abedecedario")
    
}});*/
/*onst array=[1,2,3,4]
console.log(array.includes(5))
console.log(Array.isArray(new nit12Array(4)));*/

/*const numero=[2,4,5,6]
const array=numero.keys();
for(const key of array){
    console.log(key)

}*/
//console.log(Array.of(1,2,3,4,5,"yessica"))
const array=[1,2,3,4,5,6]

const result=array.reduce((acu,vari)=>acu*vari)
console.log(result)


