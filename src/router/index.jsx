import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import MainRouter from "./MainRouter";
import ExerciseRouter from "./ExerciseRouter";


const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<MainRouter />} />
                    <Route exact path="/exercise" element={<ExerciseRouter />} />


                </Routes>
            </BrowserRouter>
        </>
    )

}

export default AppRouter;
