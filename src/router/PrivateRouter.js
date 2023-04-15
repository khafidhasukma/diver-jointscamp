import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    if(localStorage.getItem("Token")){
        return(
            <Outlet/>
        )
    } else {
        return(
            <Navigate to="/"/>
        )
    }
};

export default PrivateRouter;