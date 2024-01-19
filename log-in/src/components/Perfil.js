import React from "react";
import Form from "./Form";
import Botones from "./Boton";
function Perfil(){
    const mostrar =(x) =>{
        
        console.log(x);
    }
    return(
        <div className="contenedor">
            <Form title="ususario"/>Usuario<p/>
            <Form title="apellido"/>Apellido<p/>
            <Form title="contraseña" tipo="password"/>Contraseña<p/>
            <div>
                <Botones txt="registrar"  funtionb={()=>mostrar("registrar")}/>
            </div>
        </div>
    )
}
export default Perfil;