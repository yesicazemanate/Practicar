
let seguir=true
let cont="*"
let filas=prompt("ingrese numero de filas")
while(seguir==true){
    
    
    if(filas % 1==0){
    for(let i=1;i<=filas;i++){
        if(filas%2==0 || filas%2==1){
    console.log(cont)
cont=cont+"*"
    }}
break
}
else {
    alert("numero invalido")
    filas=prompt("ingrese numero de filas")
}
}

