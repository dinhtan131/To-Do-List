import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Result
            status="403"
            title="Oops"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">
                <Link to="/">
                    <span>Back to HomePage</span>
                </Link></Button>}
        />
    );
} 