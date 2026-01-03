import { Button, Input, notification, Modal } from "antd"
import { useState } from "react"
import { createUserApi } from "../../services/apiService";

const UserForm = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }
    const handleSubmit = async () => {
        const res = await createUserApi(fullName, email, phone, password)
        if (res.data) {
            api.success({
                message: "create user",
                description: "Tạo mới người dùng thành công"
            });
            resetAndCloseModal();
            await loadUser();
        }
        else {
            api.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            });
        }
        console.log("Check", res.data)
    }
    return (
        <>
            {contextHolder}
            <div style={{ margin: "20px0" }}>

                <div style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Table User</h3>
                    <Button type="primary"
                        onClick={() => setIsModalOpen(true)}> Create User </Button>
                </div>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={() => handleSubmit()}
                    onCancel={() => { resetAndCloseModal() }}
                >
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
                    </div>
                </Modal>
            </div>
        </>
    )

}
export default UserForm