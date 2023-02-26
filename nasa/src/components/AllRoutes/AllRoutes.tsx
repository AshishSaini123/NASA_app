import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Asteroid from "../scripts/inputAsteroid";
import InputField from "../scripts/inputForm";
import RandomAsteroid from "../scripts/randomAsteroid";

const AllRoutes:React.FC=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<InputField />} />
                <Route path="/userinput/:input" element={<Asteroid />} />
                <Route path="/random" element={<RandomAsteroid />} />
                <Route path="*" element={<div>....Error 404</div>} />
            </Routes>
        </Router>
    )
}
export default AllRoutes;