// import './header.css'
import { AuditOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

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