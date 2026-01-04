import { Button, Form, Input, Card, notification } from "antd";
import { registerUserApi } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log("Register data:", values);
        const res = await registerUserApi(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );
        if (res.data) {
            api.success({
                message: "Register User",
                description: "Register người dùng thành công"
            });
            navigate("/login");
        }
        else {
            api.error({
                message: "Error Register User",
                description: JSON.stringify(res.message)
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#f5f5f5",
                }}
            >
                <Card
                    title="Register"
                    style={{ width: 400 }}
                >
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[
                                { required: true, message: "Please enter your full name" },
                            ]}
                        >
                            <Input placeholder="Enter full name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email" },
                                { type: "email", message: "Invalid email format" },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: "Please enter your password" },
                                { min: 6, message: "Password must be at least 6 characters" },
                            ]}
                        >
                            <Input.Password placeholder="Enter password" />
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                { required: true, message: "Please enter phone number" },
                            ]}
                        >
                            <Input placeholder="Enter phone number" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default RegisterPage;
