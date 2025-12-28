
import ToDoData from './toDoData'
import './toDo.css'
import ToDoNew from './toDoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const ToDoAPP = () => {
    const [toDoList, setToDoList] = useState([])
    const addNewTodo = (name) => {
        const newToDo = {
            id: randomInt(1, 100),
            name: name
        }
        setToDoList([...toDoList, newToDo])
    }

    const deleteToDo = (id) => {
        const newToDo = toDoList.filter(item => item.id !== id)
        setToDoList(newToDo)
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="todo-container">
            <div className="todo-title">To Do List</div>
            <ToDoNew
                addNewTodo={addNewTodo}
            />
            {toDoList.length > 0 &&
                <ToDoData
                    toDoList={toDoList}
                    deleteToDo={deleteToDo}
                />
            }
            {
                toDoList.length == 0 &&
                <div>
                    <img src={reactLogo} className='logo' />
                </div>
            }
        </div>
    )
}
export default ToDoAPP;