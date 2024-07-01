import { useContext } from "react";
import { authUseContext } from "./AuthContext";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(authUseContext)

    if(loading){
    
        return <span className="loading loading-ring loading-lg"></span>

    }

    if(user){

     return children
 
    }

    return <Navigate to="/login" ></Navigate>







    
};

export default PrivateRoute;