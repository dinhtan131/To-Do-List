// import './header.css'
import { AuditOutlined, HomeOutlined, UsergroupAddOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Children, useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { logoutApi } from '../../services/apiService';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const onClick = e => {
        setCurrent(e.key);
        if (e.key === 'logout') {
            handleLogout();
        }
    };
    const handleLogout = async () => {
        const res = await logoutApi();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser(
                {
                    email: "",
                    phone: "",
                    fullName: "",
                    role: "",
                    avatar: "",
                    id: ""
                }
            )
            navigate("/");
        }
    }

    const items = [
        {
            key: 'home',
            label: <Link to={"/"}>Home</Link>,
            icon: <HomeOutlined />,
        },
        {
            key: 'users',
            label: <Link to={"/users"}>User</Link>,
            icon: <UsergroupAddOutlined />,
        },

        {
            key: 'books',
            label: <Link to={"/books"}>Book</Link>,
            icon: <AuditOutlined />,
        },
        ...(!user.id ? [{
            key: 'login',
            label: <Link to={"/login"}>Login</Link>,
            icon: <LoginOutlined />,
        }] : []),

        ...(user.id ? [{
            key: 'setting',
            label: `Welcome User ${user.fullName}`,
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Logout',
                    key: 'logout'
                }
            ]
        }] : []),

    ];
    return (

        <Menu
            onClick={onClick}
            style={{ width: 1024 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="horizontal"
            items={items}
        />
    )
}
export default Header