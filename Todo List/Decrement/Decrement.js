import React, { Component } from "react";
class Decrement extends Component{
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }
    
    deleteTask(key) {
        this.props.deleteTask(key);
    }

    render() {
        var taskkey = this.props.taskkey;
        console.log(taskkey);
        return (<button onClick={() => this.deleteTask(taskkey)}>x</button>);
    }
}

export default Decrement;