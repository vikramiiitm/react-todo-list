import React from 'react';
import TodoForm from './TodoForm';
import Todo from './TodoForm'

const Todo = () => {
    const [todos,setTodos] = useState([])
    return (
        <div>
            <h1>What's the plan fopr today?</h1>
            <TodoForm/>
        </div>
    );
}

export default Todo;
