import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Flex, Space, Table, Tag, Button, message, Popconfirm, notification } from 'antd';
import UpdateUserModal from './updateUser';
import { useState } from "react"
import ViewUserDetail from './viewUserDetail';
import { deleteUserApi } from '../../services/apiService'
const UserTable = (props) => {
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState();
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalViewOpen, setisModalViewOpen] = useState();
    const [dataView, setDataView] = useState(null);
    const { dataUser, loadUser } = props;
    const [api, contextHolder] = notification.useNotification();

    const handleDeleteUser = async (id) => {
        const res = await deleteUserApi(id)
        if (res.data) {
            api.success({
                message: "Delete User",
                description: "Delete người dùng thành công"
            });
            await loadUser();
        }
        else {
            api.error({
                message: "Error Delete User",
                description: JSON.stringify(res.message)
            });
        }
    }


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <span
                        style={{ color: '#1677ff', cursor: 'pointer' }}
                        onClick={() => {
                            setDataView(record);
                            setisModalViewOpen(true);
                        }}
                    >
                        {record._id}
                    </span>
                )
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setisModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "orange" }}
                    >Invite {record.name}</EditOutlined>
                    <Popconfirm
                        title="Delete User"
                        description="Are you sure to delete user?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <DeleteOutlined
                            style={{ cursor: "pointer", color: "red" }}
                        >Delete</DeleteOutlined>
                    </Popconfirm>

                </div>
            ),
        },
    ];
    return (
        <>
            {contextHolder}
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setisModalUpdateOpen={setisModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isModalViewOpen={isModalViewOpen}
                setisModalViewOpen={setisModalViewOpen}
                dataView={dataView}
                setDataView={setDataView}
            />
        </>
    )
}
export default UserTable;