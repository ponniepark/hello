/*할일 목록을 관리하고 렌더링하는 주요 컴포넌트 */

import React, {useState} from "react";
import TodoItem from "@/components/TodoItem";
import styles from "@/styles/TodoList.module.css";

//Todolist 컴포넌트 생성
const TodoList = ()=> {

    const [todos, setTodos] = useState([]);
    cnost [Input, setInput] = useState("");

    const addTodo = ()=> {
        if (input.trim() === "") return;

        setTodos([...todos, {id: Date.now(), text:input, completed: false}]);
        setInput("");

    };

    const toggleTodo = (id) => {
        setTodos(

            todos.map((todo)=> {
                return todo.id === id ? { ...todo, completed : !todo.completed} : todo;

            })
        )
    };

    return(
        <div className={styles.container}>
        <h1>Todo List</h1>

        <input
        type = "text"
        className = {styles.itemInput}
        value ={input}
        onChange = {(e)=> setInput(e.target.value)}
        />
<button className = {styles.addbutton} onClick={addTodo}>
    Add Todo
</button>
<ul>
    {todos.map((todo)=> (
        <TodoItem
        key = {todo.id}
        todo={todo}
        onToggle ={()=> toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
        />

    ))}
</ul>


        </div>
    );


};

export default TodoList;
