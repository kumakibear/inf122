import React from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Navbar</Link>
                    </li>
                    <li>
                        <Link to="/registro">Registro</Link>
                    </li>
                    <li>
                        <Link to="/perfil">Perfil</Link>
                    </li>
                
                </ul>
            </nav>
        <OutLet/>
        </>
    );
}