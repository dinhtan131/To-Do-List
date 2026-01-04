import UserForm from "../components/user/userForm"
import UserTable from "../components/user/userTable"
import { fetchAllUserApi } from '../services/apiService';
import { useEffect, useState } from "react"
const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState();
    // const loadUser = async () => {
    //     const res = await fetchAllUserApi()
    //     setDataUser(res.data.result);
    // }
    const loadUser = async () => {
        const res = await fetchAllUserApi(current, pageSize);
        if (res.data) {
            setDataUser(res.data.data.result);
            setCurrent(res.data.data.meta.current);
            setPageSize(res.data.data.meta.pageSize);
            setTotal(res.data.data.meta.total);
        }
    }

    useEffect(() => {
        loadUser();
    }, [current]);
    return (
        <div>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUser={dataUser}
                    loadUser={loadUser}
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    setCurrent={setCurrent}
                    setPageSize={setPageSize}
                />
            </div>

        </div>
    )
}
export default UserPage