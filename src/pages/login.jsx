import { Button, Form, Input, Card, notification, Divider } from "antd";
import { loginApi } from "../services/apiService";
import { AuthContext } from "../components/context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
const LoginPage = () => {

    const { setUser } = useContext(AuthContext)
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();
    const onFinish = async (values) => {
        setLoading(true);
        const res = await loginApi(values.email, values.password)
        if (res.data) {
            api.success({
                message: "Login User",
                description: "Login người dùng thành công"
            });
            localStorage.setItem("access_token", res.data.data.access_token);
            setUser(res.data.data.user);
            navigate("/");
        }
        else {
            api.error({
                message: "Error Login User",
                description: JSON.stringify(res.message)
            });
        }
        console.log(res);
        setLoading(false);
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
                    title="Login"
                    style={{ width: 400 }}
                >
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                    >
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
                            ]}
                        >
                            <Input.Password placeholder="Enter password" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                loading={loading}
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
};

export default LoginPage;
