import { getByText, render } from "@testing-library/react";
import React from "react";
import Asteroid from "../scripts/inputAsteroid";

test("input Asteroid rendered correctly or not",()=>{
    const{getByText}=render(<Asteroid />);
    const item=getByText(/name/i);
    expect(item).toBeInTheDocument();
})