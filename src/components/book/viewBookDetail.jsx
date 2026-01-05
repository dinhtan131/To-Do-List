import { Input, Modal } from "antd";
import { useEffect, useState } from "react";

const ViewBookDetail = (props) => {
    const { isModalViewOpen, setisModalViewOpen, dataView, setDataView } = props;

    const [id, setId] = useState("");
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [sold, setSold] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    useEffect(() => {
        if (dataView) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setId(dataView._id || "");
            setAuthor(dataView.author || "");
            setMainText(dataView.mainText || "");
            setPrice(dataView.price || "");
            setSold(dataView.sold || "")
            setQuantity(dataView.quantity || "");
            setCategory(dataView.category || "")
            setThumbnail(dataView.thumbnail || "")
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
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${thumbnail}`}></img>
                </div>
                <div>
                    <span>Id</span>
                    <Input value={id} disabled />
                </div>

                <div>
                    <span>Author</span>
                    <Input value={author} disabled />
                </div>

                <div>
                    <span>MainText</span>
                    <Input value={mainText} disabled />
                </div>
                <div>
                    <span>Price</span>
                    <Input value={price} disabled />
                </div>
                <div>
                    <span>Sold</span>
                    <Input value={sold} disabled />
                </div>
                <div>
                    <span>Quantity</span>
                    <Input value={quantity} disabled />
                </div>
                <div>
                    <span>Category</span>
                    <Input value={category} disabled />
                </div>
            </div>
        </Modal>
    );
};

export default ViewBookDetail;
