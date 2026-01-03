import UserForm from "../components/user/userForm"
import UserTable from "../components/user/userTable"
import { fetchAllUserApi } from '../services/apiService';
import { useEffect, useState } from "react"
const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserApi()
        console.log(res.data)
        setDataUser(res.data.data);
    }
    return (
        <div>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUser={dataUser}
                    loadUser={loadUser} />
            </div>

        </div>
    )
}
export default UserPage