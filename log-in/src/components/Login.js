import React from "react";
import Form from "./Form";
import Botones from "./Boton";
import "../style/Login.css";
function Login(){
    
    const mostrar =(x) =>{
        
        console.log(x);
    }
    return(
        <div className="contenedor">
            <Form title="ususario" tipo="text"/><p/>
            <Form title="contraseña" tipo="text"/><p/>
            <div><Botones txt="registrar"  funtionb={()=>mostrar("registrar")}/><Botones txt="ingresar" funtionb={()=>mostrar("ingresar")} /></div>
            
        </div>
        
    );
}
export default Login;