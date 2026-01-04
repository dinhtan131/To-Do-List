import CreateBookDetail from "../components/book/createBookDetail"
import BookTable from "../components/book/bookTable"
import { useEffect, useState } from "react"
import { fetchAllBookApi } from '../services/apiService';

const BookPage = () => {
    const [dataBook, setdataBook] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const loadBook = async () => {
        const res = await fetchAllBookApi(current, pageSize);
        if (res.data) {
            setdataBook(res.data.data.result);
            setCurrent(res.data.data.meta.current);
            setPageSize(res.data.data.meta.pageSize);
            setTotal(res.data.data.meta.total);
        }
    }
    useEffect(() => {
        loadBook();
    }, [current]);
    return (
        <div>
            <CreateBookDetail
                dataBook={dataBook} />
            <BookTable
                dataBook={dataBook}
                loadBook={loadBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />

        </div>

    )
}
export default BookPage