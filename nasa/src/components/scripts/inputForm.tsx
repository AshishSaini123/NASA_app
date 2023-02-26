
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../styles/inputField.css"

const InputField:React.FC=()=>{
    const [id,setID]=useState<string>()
    const nav=useNavigate();
    const handleClick:()=>void=()=>{
        nav(`/userinput/${id}`)
    }
    return(
        <div data-testID="input_form" className="input_container">
            <h3 className="heading">NASA App</h3>
            <form className="input_box">
            <input className="input_field" onChange={(e)=>setID(e.target.value)} type="text" placeholder="Enter Asetroid ID" />
            <button className="submit_btn"disabled={id?false:true} onClick={handleClick} type="submit">GO</button>
            <button className="random_btn" onClick={()=>nav("/random")}>Random Asteroid</button>
            </form>
           
        </div>
    )
}

export default InputField;