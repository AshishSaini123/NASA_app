

import { render } from "@testing-library/react";
import React from "react";
import InputField from "../scripts/inputForm";
test("form render or not",()=>{
    const {getByText}=render(<InputField />)

    let item=getByText(/Name/i);
    expect(item).toBeInTheDocument();
})