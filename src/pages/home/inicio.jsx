import React from 'react'
import { useState } from 'react';
const Inicio = () => {

    const [text, setText]=useState("");

    const handletext=(e)=>{
        setText(e.target.value)
    }

  return (
    <div>   
       <h1>bienvenido a nuestra pagina de inicio, pokemon go</h1>
       <br />
       <h3>Registrate </h3>
       <input type="text" onChange={handletext} />
       <br />
       <h5>{text}</h5>

    </div>
  )
}

export default Inicio

