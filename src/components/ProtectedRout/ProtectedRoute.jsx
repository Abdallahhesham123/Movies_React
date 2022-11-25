import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({UserData,children}) => {
if(UserData == null && localStorage.getItem("token") == null){

    return <Navigate to= "/login"/>
}else{

    return children;
}
}

export default ProtectedRoute