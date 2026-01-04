import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Popconfirm } from 'antd';
const BookTable = (props) => {

    const { dataBook, loadBook, current, pageSize, total, setPageSize, setCurrent } = props;
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
            // render: (_, record) => {
            //     return (
            //         <span
            //             style={{ color: '#1677ff', cursor: 'pointer' }}
            //             onClick={() => {
            //                 // setDataView(record);
            //                 // setisModalViewOpen(true);
            //             }}
            //         >
            //             {record._id}
            //         </span>
            //     )
            // }
        },
        {
            title: 'Name',
            dataIndex: 'mainText',
        },
        {
            title: 'Author',
            dataIndex: 'author',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            // render: (_, record) => (
            //     <div style={{ display: "flex", gap: "20px" }}>
            //         <EditOutlined
            //             onClick={() => {
            //                 // setDataUpdate(record);
            //                 // setisModalUpdateOpen(true);
            //             }}
            //             style={{ cursor: "pointer", color: "orange" }}
            //         >Invite {record.name}</EditOutlined>
            //         <Popconfirm
            //             title="Delete User"
            //             description="Are you sure to delete user?"
            //             // onConfirm={() => handleDeleteUser(record._id)}
            //             okText="Yes"
            //             cancelText="No"
            //             placement="left"
            //         >
            //             <DeleteOutlined
            //                 style={{ cursor: "pointer", color: "red" }}
            //             >Delete</DeleteOutlined>
            //         </Popconfirm>

            //     </div>
            // ),
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
            < Table
                columns={columns}
                dataSource={dataBook}
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
        </>
    )
}
export default BookTable