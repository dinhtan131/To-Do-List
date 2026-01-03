import { Input, Modal } from "antd";
import { useEffect, useState } from "react";

const ViewUserDetail = (props) => {
    const { isModalViewOpen, setisModalViewOpen, dataView, setDataView } = props;

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        if (dataView) {
            setId(dataView._id || "");
            setFullName(dataView.fullName || "");
            setEmail(dataView.email || "");
            setPhone(dataView.phone || "");
        }
    }, [dataView]);

    return (
        <Modal
            title="User Detail"
            open={isModalViewOpen}
            onOk={() => setisModalViewOpen(false)}
            onCancel={() => {
                setDataView(null);
                setisModalViewOpen(false);
            }}
            maskClosable={false}
            okText="Close"
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input value={id} disabled />
                </div>

                <div>
                    <span>Username</span>
                    <Input value={fullName} disabled />
                </div>

                <div>
                    <span>Email</span>
                    <Input value={email} disabled />
                </div>

                <div>
                    <span>Phone</span>
                    <Input value={phone} disabled />
                </div>
            </div>
        </Modal>
    );
};

export default ViewUserDetail;
