import React from "react";
import { Routes as RouterContainer, Route } from "react-router-dom";

import { Home, SignUp, SignIn } from './pages'

function Routes() {
    return (
        <RouterContainer>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </RouterContainer>
    )
}

export default Routes