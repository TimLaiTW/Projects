import React, { Component } from "react";
class Display extends Component{
    displayTasks(task) {    return <li key={task.key}>{task.text}</li>}
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