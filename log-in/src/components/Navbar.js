import React from "react";
import {link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Registro</Link>
                </li>
                <li>
                    <Link to="/">Perfil</Link>
                </li>
                
            </ul>
        </nav>
    );
}