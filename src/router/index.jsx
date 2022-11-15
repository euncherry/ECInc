import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import MainRouter from "./MainRouter";
import PatientInfoRouter from "./PatientInfoRouter";
import HomeRouter from "./HomeRouter";

const AppRouter = ({
    user,
    setUser,
}) => {

    return (
        <>
            <BrowserRouter basename="eclnc">
                <Routes>
                    <Route exact path="/" element={<HomeRouter user={user} setUser={setUser} />} />
                    <Route exact path="/main" element={<MainRouter />} />
                    <Route exact path="/patientinfo" element={<PatientInfoRouter />} />


                </Routes>
            </BrowserRouter>
        </>
    )

}

export default AppRouter;
