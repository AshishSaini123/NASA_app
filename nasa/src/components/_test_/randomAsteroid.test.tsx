import React from "react";
import {render} from "@testing-library/react"
import RandomAsteroid from "../scripts/randomAsteroid";


describe("Random Asteroid",()=>{
    test("should render loading message if no data available",async()=>{
        const {getByText}=render(<RandomAsteroid />)
        const loadingMsg=getByText(/loading/i);
        expect(loadingMsg).toBeInTheDocument();
    })
})

