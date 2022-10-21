import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({children}) => {

    const {user} = useSelector(state => state.authReducer);

    const location = useLocation();

    if (!user) {
        return <Navigate to={'/login'} state={{from: location}}/>
    }

    return children;
}

export {RequireAuth};