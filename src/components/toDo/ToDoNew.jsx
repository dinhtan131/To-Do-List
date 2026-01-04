import { useState } from "react";

const ToDoNew = (props) => {
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState("Tan123")

    const handleClick = () => {
        console.log("Check Input", valueInput);
        addNewTodo(valueInput);
    }

    const handleChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <div className="todo-action">
                <input
                    type="text"
                    value={valueInput}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Enter new todo..."
                />
                <button onClick={handleClick}>Add</button>
            </div>

            <div className="text-input">
                My text input is: <span>{valueInput}</span>
            </div>
        </div>

    )
}
export default ToDoNew;