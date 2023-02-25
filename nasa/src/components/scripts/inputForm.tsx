
import React from "react";
import "../styles/inputField.css"

const InputField:React.FC=()=>{
    return(
        <div data-testID="input_form" className="input_container">
            <h3 className="heading">NASA App</h3>
            <form className="input_box">
            <input className="input_field" type="text" placeholder="Enter Asetroid ID" />
            <button className="submit_btn" type="submit">GO</button>
            <button className="random_btn">Random Asteroid</button>
            </form>
           
        </div>
    )
}

export default InputField;