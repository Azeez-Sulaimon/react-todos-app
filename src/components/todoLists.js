import React, { Component } from 'react';

import axios from 'axios';
import Todo from './todo'



export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []
          
             
        };
    }

    componentDidMount() {
        axios.get('https://my-mern-todo-app.herokuapp.com/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // onCheckHandler (e) {
    //     this.setState({
    //         todo_completed: true
    //     });
    // }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo 
            todo={currentTodo} key={i}/>;
        })
    }

    render() {

        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}