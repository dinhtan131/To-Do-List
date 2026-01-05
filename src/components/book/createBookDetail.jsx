import { Button, Input, notification, Modal } from "antd"
import { useState } from "react"
import { createUserApi } from "../../services/apiService";

const CreateBookDetail = (props) => {
    const { loadBook } = props;
    const [api, contextHolder] = notification.useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPhone] = useState("");
    const [category, setPassword] = useState("");
    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setMainText("");
        setAuthor("");
        setPhone("");
        setPassword("");
    }
    const handleSubmit = async () => {
        const res = await createUserApi(mainText, author, price, category)
        if (res.data) {
            api.success({
                message: "create user",
                description: "Tạo mới người dùng thành công"
            });
            resetAndCloseModal();
            await loadBook();
        }
        else {
            api.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            });
        }
    }
    return (
        <>
            {contextHolder}
            <div style={{ margin: "20px0" }}>

                <div style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h3>Table Book</h3>
                    <Button type="primary"
                        onClick={() => setIsModalOpen(true)}> Create Book </Button>
                </div>
                <Modal
                    title="Create User"
                    open={isModalOpen}
                    onOk={() => handleSubmit()}
                    onCancel={() => { resetAndCloseModal() }}
                    maskClosable={false}
                    okText={"Create"}
                >
                    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                        <div>
                            <span> Name</span>
                            <Input
                                value={mainText}
                                onChange={(event) => { setMainText(event.target.value) }}
                            />
                        </div>
                        <div>
                            <span> Author</span>
                            <Input
                                value={author}
                                onChange={(event) => { setAuthor(event.target.value) }} />
                        </div>
                        <div>
                            <span> Price</span>
                            <Input
                                value={price}
                                onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                        <div>
                            <span> Category</span>
                            <Input
                                value={category}
                                onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default CreateBookDetail