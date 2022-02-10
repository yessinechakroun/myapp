import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const auth = useSelector(state => state.auth)
    if (auth.token !== null && auth.user !== null) {
        return props.children
    } else {
        return <Navigate to="/" replace />
    }

}

export default PrivateRoute