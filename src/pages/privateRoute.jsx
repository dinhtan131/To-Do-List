import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/context/authContext";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext)
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    // return <Navigate to="/login" replace />
    return (
        <Result
            status="403"
            title="Unathorize"
            subTitle="Sorry, you need to login to do this"
            extra={<Button type="primary">
                <Link to="/">
                    <span>Back to HomePage</span>
                </Link></Button>}
        />
    )
}
export default PrivateRoute;