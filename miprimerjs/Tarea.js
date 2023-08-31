let usuario=prompt("registre usuario")
let contraseña=prompt("crea contraseña")
alert("inicio de sesion")
let inicioUsuario=[prompt(" ingrese usuario")]
let inicioContraseña=[prompt("ingrese contraseña")]
let seguir=true
let continuar
while(seguir==true){
    if(usuario== inicioUsuario && contraseña==inicioContraseña){
        alert("acceso concedido")
       continuar=prompt("desea ingresar otro ususario si o no")
       if(continuar =="si"){
        prompt("ingrese usuario")
        prompt("ingrese contraseña")
       }else{
        alert("OK")
       }
       break
    }
    
    else if(usuario!= inicioUsuario || contraseña!=inicioContraseña){
        
        alert("usuario o contraseña son incorrectos")
        inicioUsuario=prompt(" ingrese usuario")
        inicioContraseña=prompt("ingrese contraseña")
    
        
    }
    
    
}