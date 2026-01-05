import { Button, Input, InputNumber, notification, Modal } from "antd";
import { useState } from "react";
import { createBookApi } from "../../services/apiService";

const CreateBookDetail = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const { loadBook } = props;

    const [thumbnail, setThumbnail] = useState("");
    const [slider, setSlider] = useState("");
    const [mainText, setMainText] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [category, setCategory] = useState("");
    const [sold, setSold] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setThumbnail("");
        setSlider("");
        setMainText("");
        setAuthor("");
        setPrice(null);
        setQuantity(null);
        setCategory("");
        setSold(null);
    };

    const handleSubmit = async () => {
        const data = {
            thumbnail,
            slider: slider ? slider.split(",") : [],
            mainText,
            author,
            price,
            quantity,
            category,
            sold,
        };
        const res = await createBookApi(data);
        if (res?.data) {
            api.success({
                message: "Create Book",
                description: "Tạo mới sách thành công",
            });
            resetAndCloseModal();
            await loadBook();
        } else {
            api.error({
                message: "Error Create Book",
                description: JSON.stringify(res?.message),
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div style={{ margin: "20px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table Book</h3>
                    <Button type="primary" onClick={() => setIsModalOpen(true)}>
                        Create Book
                    </Button>
                </div>

                <Modal
                    title="Create Book"
                    open={isModalOpen}
                    onOk={handleSubmit}
                    onCancel={resetAndCloseModal}
                    maskClosable={false}
                    okText="Create"
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div>
                            <span>Thumbnail</span>
                            <Input
                                value={thumbnail}
                                onChange={(e) => setThumbnail(e.target.value)}
                                placeholder="abc.png"
                            />
                        </div>

                        <div>
                            <span>Slider (comma separated)</span>
                            <Input
                                value={slider}
                                onChange={(e) => setSlider(e.target.value)}
                                placeholder="a.png,b.png,c.png"
                            />
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
            </div>
        </>
    );
};

export default CreateBookDetail;
