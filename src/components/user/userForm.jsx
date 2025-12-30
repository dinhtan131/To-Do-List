import { Button, Input, notification } from "antd"
import { useState } from "react"
import { createUserApi } from "../../services/apiService";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = async () => {
        const res = await createUserApi(fullName, email, phone, password)
        if (res.data && res.data.data) {
            notification.success({
                message: "create user",
                description: "Tạo mới người dùng thành công"
            });
        }
        console.log("Check", res.data)
    }
    return (
        <div style={{ margin: "20px0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span> Username</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span> Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span> Phone</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <span> Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <Button type="primary"
                        onClick={handleClick}> Create User </Button>
                </div>
            </div>
        </div>
    )

}
export default UserForm