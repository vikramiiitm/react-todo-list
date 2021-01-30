import React, {useState} from 'react';

function TodoForm(props) {
    const [input,setInput] = useState('');
    
    const handleChange =(e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setInput('')
    };
    return (
        <form action="" className="className" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a note" 
            value={input}
            name="text"
            onChange = {handleChange}
            className="todo-input"
            />
            <button className="todo-button">Add ToDo</button>
        </form>
    );

}

export default TodoForm;
