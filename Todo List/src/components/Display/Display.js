import React, { Component } from "react";
import Decrement from "../Decrement/index";
import './Display.css';
class Display extends Component{
    constructor(props) {
        super(props);
        this.displayTasks = this.displayTasks.bind(this);
    }
    displayTasks(task) {    
        return <li key={ task.key }>{ task.text }
            <Decrement deleteTask={this.props.deleteTask} taskkey={task.key}/>
            </li>}

    render() {
        var tasks = this.props.tasks;
        var listTasks = tasks.map(this.displayTasks);
        return (
            <ul className="theList">
                    {listTasks}
            </ul>
        )
    }
}
export default Display;