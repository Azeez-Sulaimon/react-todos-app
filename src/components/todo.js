import React from 'react';
import { Link } from 'react-router-dom';

const Todo = props =>{ 

    return (
    <tr style={{'text-decoration': props.todo.todo_completed ? 'line-through' : 'none'}}>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id} style={{'text-decoration': 'none'}} >Edit</Link>
        </td>
    </tr>
  
)
}

export default Todo;