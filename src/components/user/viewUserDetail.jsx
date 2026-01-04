import { Input, Modal } from "antd";
import { useEffect, useState } from "react";

const ViewUserDetail = (props) => {
    const { isModalViewOpen, setisModalViewOpen, dataView, setDataView } = props;

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");
    useEffect(() => {
        if (dataView) {

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setId(dataView._id || "");
            setFullName(dataView.fullName || "");
            setEmail(dataView.email || "");
            setPhone(dataView.phone || "");
            setAvatar(dataView.avatar || "")
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
                    <img
                        height={60} width={60}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${avatar}`}></img>
                </div>
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
                <div>
                    <label
                        htmlFor="btnLoad"
                        style={{
                            display: "inline-block",
                            padding: "8px 16px",
                            backgroundColor: "#1677ff",
                            color: "#fff",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: 500
                        }}
                    >
                        Upload
                        <input type="file" hidden id="btnLoad" />
                    </label>
                </div>


            </div>
        </Modal>
    );
};

export default ViewUserDetail;
