import React from "react";
import styles from "@/styles/TodoList/module.css";

const TodoItem = ({todo, onToggle, onDelete}) => {
    return(
        <li className = {styles.todoItme}>
            {/*체크박스를 렌더링하고 체크박스의 상태를 할 일의 완료 상태와 동기화
            체크박스의 상태가 변경되면 onToggle 함수를 호출하여 완료 상태를 업로드*/}

            <input type = "checkbox" checked = {todo.completed} onChange = {onToggle}/>
            
            {/*할 일의 텍스트를 렌더링하고, 완료 상태에 따라 텍스트에 취소선을 적용*/}
            <span
            className = {styles.todoText}
            style = {{textDecoration: todo.completed ? "line-through" : "none"}}
            >
            {todo.text}
            </span>

{/*삭제 버튼을 렌더링하고 클릭 시 onDelete 함수를 호출하여 해당 할 일을 삭제*/}
<button onClick = {onDelete}>Delete</button>

            </li>
    );
};
//TodoItem 컴포넌트를 내보냄
export default TodoItem;
