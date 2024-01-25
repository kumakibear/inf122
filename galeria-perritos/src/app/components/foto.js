"use client"

import Image from "next/image";
import { useEffect , useState } from "react";
import style from "./foto.module.css";

function Foto(){
    const [perrito,setPerrito]=useState("/vercel");
    const [estado,setEstado]=useState("esperando");
    const [hablidad,setHablilidad]=useState("habilidad");
    const url="https://pokeapi.co/api/v2/pokemon/blastoise";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPerrito(data.sprites.front_default),
            setEstado(data.species.name),
            setHablilidad(data.moves)

        });

    },[]

    );
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito} width={500} height={500}/>
        </div>
    );
}
export default Foto;