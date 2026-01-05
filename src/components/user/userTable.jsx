import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Popconfirm, notification } from 'antd';
import UpdateUserModal from './updateUser';
import { useState } from "react"
import ViewUserDetail from './viewUserDetail';
import { deleteUserApi } from '../../services/apiService'
const UserTable = (props) => {
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState();
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalViewOpen, setisModalViewOpen] = useState();
    const [dataView, setDataView] = useState(null);
    const { dataUser, loadUser, current, pageSize, total, setPageSize, setCurrent } = props;
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
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
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
    const onChange = (pagination) => {
        if (pagination.current !== current) {
            setCurrent(pagination.current);
        }
        if (pagination.pageSize !== pageSize) {
            setPageSize(pagination.pageSize);
            setCurrent(1);
        }

        console.log("current:", pagination.current);
        console.log("pageSize:", pagination.pageSize);
    };

    return (
        <>
            {contextHolder}
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => {
                            return (
                                <div> {range[0]}-{range[1]} trên {total} rows</div>)
                        }
                    }}
                onChange={onChange}
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