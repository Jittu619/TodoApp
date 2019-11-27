import React, { Component } from 'react'
import './App.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InputValue: '',
            todoItems: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.AddItems=this.AddItems.bind(this);
    }

    handleChange = (e) => {
        this.setState({ InputValue: e.target.value });
    }

    AddItems = () => {

        let todoItems = this.state.todoItems;
        let InputValue = this.state.InputValue;

        todoItems.push(InputValue);

        this.setState({ InputValue:'',todoItems: todoItems });
        
    }

    handleDelete=(e)=>{
      let id=  e.target.id;
      let todoItems = this.state.todoItems;
      todoItems.splice(id,1);
      this.setState({todoItems:todoItems});
    }

    render() {
        let todoItems = this.state.todoItems;

        let todoList = todoItems.map((element, index) => {
            return <li key={index}>{element}<span id={index} onClick={this.handleDelete}>X</span></li>
        });

        return (
            <div>
                <div className="header">Todo App</div>
                <div className="body">
                    <ul>
                        {todoList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.InputValue} onChange={this.handleChange} />
                    <button onClick={this.AddItems}>+</button>
                </div>
            </div>
        );
    }
}
export default Todo;