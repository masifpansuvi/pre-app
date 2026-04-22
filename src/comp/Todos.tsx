import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([
        {
        text: "todos 1",
        id: 1
        },
        {
            text: "todos 2",
            id: 2
        },
        {
            text: "todos 3",
            id: 3
        }
    ])
    const deleteTodo = (itemId:number) => {
        setTodos(todos.filter(itemEl => {
            return itemEl.id != itemId 
        }))
    }

    return (
        <>
        <ul>
            {todos.map((todo)=> {
            return (
            <li onClick={() => {deleteTodo(todo.id)}} key={todo.id}>{todo.text}</li>
            )
        })}
        </ul>
        </>
    )
}
export default Todos;