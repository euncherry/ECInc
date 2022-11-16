import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import MainRouter from "./MainRouter";
import PatientInfoRouter from "./PatientInfoRouter";
import HomeRouter from "./HomeRouter";
import SelectPartRouter from "./SelectPartRouter";
import SelectToolRouter from "./SelectToolRouter";
import ToolProgressRouter from "./ToolProgressRouter";
import ExerciseSettingRouter from "./ExerciseSettingRouter";



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
                    <Route exact path="/selecttool/:body" element={<SelectToolRouter />} />
                    <Route exact path="/toolprogress/:tool" element={<ToolProgressRouter />} />
                    <Route exact path="/exercisesetting" element={<ExerciseSettingRouter />} />
                    <Route exact path="/selectpart" element={<SelectPartRouter />} />


                </Routes>
            </BrowserRouter>
        </>
    )

}

export default AppRouter;
