import React from "react";
import { useUser } from '../contexts/UserContexts'
import Main from "../Navigaions/Main";
import Auth from "../Navigaions/Auth";

const Route = () => {
    const { signed } = useUser()

    return (
        <>
            {
                signed
                    ? <Main />
                    : <Auth />
            }
        </>
    )
}

export default Route;