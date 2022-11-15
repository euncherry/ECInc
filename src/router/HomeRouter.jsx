import React from "react"
import Home from "../pages/home"

const homeRouter = ({
    user,
    setUser
}) => {
    return <Home user={user} setUser={setUser} />
}

export default homeRouter