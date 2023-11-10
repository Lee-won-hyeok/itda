import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginView from "../domain/LoginView";
import IdRecovery from "../domain/IdRecovery";
import PwdRecovery from "../domain/PwdRecovery";

export default function () {
    return<>
    <Routes>
        <Route path="/" element={<LoginView />}></Route>
        <Route path="IdRecovery" element={<IdRecovery />}></Route>
        <Route path="PwdRecovery" element={<PwdRecovery />}></Route>  
    </Routes>
    </> 
}