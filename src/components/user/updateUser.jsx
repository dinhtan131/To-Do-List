import { Button, Input, notification, Modal } from "antd"
import { useEffect, useState } from "react"

import { updateUserApi } from "../../services/apiService";
const UpdateUserModal = (props) => {

    const [api, contextHolder] = notification.useNotification();
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const { isModalUpdateOpen, setisModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, dataUpdate)

    const resetAndCloseModal = () => {
        setisModalUpdateOpen(false);
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }
    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            api.success({
                message: "Update User",
                description: "Update người dùng thành công"
            });
            resetAndCloseModal();
            await loadUser();
        }
        else {
            api.error({
                message: "Error Update User",
                description: JSON.stringify(res.message)
            });
        }
        console.log("Check", res.data)
    }

    return (
        <>

            {contextHolder}
            <Modal
                title="Update User"
                open={isModalUpdateOpen}
                onOk={() => handleSubmit()}
                onCancel={() => { resetAndCloseModal() }}
                maskClosable={false}
                okText={"Update"}
            >
                <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                    <div>
                        <span> Id</span>
                        <Input
                            value={id}
                            onChange={(event) => { setId(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span> Username</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span> Phone</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }} />
                    </div>

                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal;