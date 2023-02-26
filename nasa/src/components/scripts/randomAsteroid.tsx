import React ,{useState,useEffect} from "react";
import "../styles/inputAsteroid.css"
interface obj{
    id:string,
    name:string;
    nasa_jpl_url:string
    is_potentially_hazardous_asteroid:boolean;
}

interface obj1{
    near_earth_objects:[obj];
}
const RandomAsteroid:React.FC=()=>{

    const [val,setVal]=useState<obj1>();
    

    let random:number=Math.floor(Math.random()*(15-0)+0);
    const fetchAPI:()=>void=()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Lw0MuvwQ9X6ArTkRPl6AMW6L37TWQXtdRPohwu0e')
        .then(res=>res.json())
        .then(data=>{
            setVal(data);
        })
    }

     

    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <div>
            {val?.near_earth_objects?
            <div className="info_box">
            <div className="info_container">
                <p className="name">{`NAME of the Asteroid is :: ${val?.near_earth_objects[random].name}`}</p>
                <p className="url">{`NASA_jpl_url is :: ${val?.near_earth_objects[random].nasa_jpl_url}`}</p>
                <p className="haz">{` is_potentially hazardous_asteroid :: ${val?.near_earth_objects[random].is_potentially_hazardous_asteroid ?"true":"false"}`}</p>
            </div>
        </div>:<div className="load">...loading</div>}
        </div>
    )
}

export default RandomAsteroid;