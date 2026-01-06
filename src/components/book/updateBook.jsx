import { Button, Input, InputNumber, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateBookApi } from "../../services/apiService";

const UpdateBookModal = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const [thumbnail, setThumbnail] = useState("");
    const [slider, setSlider] = useState([]);
    const [id, setId] = useState("");
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [category, setCategory] = useState("");
    const [sold, setSold] = useState(null);

    const {
        isModalUpdateOpen,
        setisModalUpdateOpen,
        dataUpdate,
        setDataUpdate,
        loadBook
    } = props;
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setMainText(dataUpdate.mainText);
            setAuthor(dataUpdate.author);
            setPrice(dataUpdate.price);
            setQuantity(dataUpdate.quantity);
            setCategory(dataUpdate.category);
            setSold(dataUpdate.sold);
            setThumbnail(dataUpdate.thumbnail);
            setSlider(dataUpdate.slider);
        }
    }, [dataUpdate]);

    const resetAndCloseModal = () => {
        setisModalUpdateOpen(false);
        setDataUpdate(null);

        setId("");
        setMainText("");
        setAuthor("");
        setPrice(null);
        setQuantity(null);
        setCategory("");
        setSold(null);
    };

    const handleSubmit = async () => {
        const res = await updateBookApi(
            id,
            thumbnail,
            slider,
            mainText,
            author,
            price,
            quantity,
            category,
            sold
        );

        if (res?.data) {
            api.success({
                message: "Update Book",
                description: "Cập nhật sách thành công"
            });
            resetAndCloseModal();
            await loadBook();
        } else {
            api.error({
                message: "Error Update Book",
                description: JSON.stringify(res?.message)
            });
        }
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Update Book"
                open={isModalUpdateOpen}
                onOk={handleSubmit}
                onCancel={resetAndCloseModal}
                maskClosable={false}
                okText="Update"
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                        <span>Id</span>
                        <Input value={id} disabled />
                    </div>

                    <div>
                        <span>Main Text</span>
                        <Input
                            value={mainText}
                            onChange={(e) => setMainText(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Author</span>
                        <Input
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Price</span>
                        <InputNumber
                            style={{ width: "100%" }}
                            value={price}
                            onChange={setPrice}
                            min={0}
                        />
                    </div>

                    <div>
                        <span>Quantity</span>
                        <InputNumber
                            style={{ width: "100%" }}
                            value={quantity}
                            onChange={setQuantity}
                            min={0}
                        />
                    </div>

                    <div>
                        <span>Category</span>
                        <Input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Sold</span>
                        <InputNumber
                            style={{ width: "100%" }}
                            value={sold}
                            onChange={setSold}
                            min={0}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default UpdateBookModal;
