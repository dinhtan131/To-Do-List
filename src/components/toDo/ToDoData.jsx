const ToDoData = (props) => {
    const { toDoList, deleteToDo } = props;
    console.log("check point Data:", props);
    const handleClickDelete = (id) => {
        deleteToDo(id);
    }
    return (
        <div className='todo-data'>
            {toDoList.map((item, index) => {
                console.log("Check map", item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <span className="todo-text">{item.name}</span>
                        {<button
                            onClick={() => handleClickDelete(item.id)}
                            className="button-delete">
                            Delete
                        </button>}
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoData;