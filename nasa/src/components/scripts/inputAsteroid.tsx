import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/inputAsteroid.css"
interface obj{
    name:string,
    nasa_jpl_url:string,
    is_potentially_hazardous_asteroid:string;
}

const Asteroid:React.FC=()=>{


    const [val,setVal]=useState<obj>();

    const fetchAPI:()=>void=()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/neo/3703080?api_key=Lw0MuvwQ9X6ArTkRPl6AMW6L37TWQXtdRPohwu0e')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setVal(data);
            // console.log(val?.is_potentially_hazardous_asteroid)
        })
    }

    useEffect(() => {
        fetchAPI();
    }, [])
    return (
        <div className="info_box">
            <div className="info_container">
                <p className="name">{`NAME of the Asteroid is :: ${val?.name}`}</p>
                <p className="url">{`NASA_jpl_url is :: ${val?.nasa_jpl_url}`}</p>
                <p className="haz">{` is_potentially hazardous_asteroid :: ${val?.is_potentially_hazardous_asteroid ?"true":"false"}`}</p>
            </div>
        </div>
    )
}

export default Asteroid