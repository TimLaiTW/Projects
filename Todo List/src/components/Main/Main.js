import React, { Component } from "react";
import Increment from "../Increment/index";
import Display from "../Display/index";
import "./Main.css";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          tasks: []
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.input = React.createRef();
    }

    addTask(event){
        if (this.input.current.value !== "") {
          var newTask = {
            text: this.input.current.value,
            key: Date.now()
          };
          
          var joined = this.state.tasks.concat(newTask);
          this.setState({ tasks: joined });
          // Either way to update State.
          // this.setState((prevState) => {
          //   return  { tasks: prevState.tasks.concat(newTask) }; });

          this.input.current.value = "";
        }
        console.log(this.state.tasks)
        event.preventDefault();
    }

    deleteTask(event){
      var updatedItems = this.state.tasks.filter(function (task){
        return (task.key !== event);
      })
      this.setState({ tasks: updatedItems });
    }
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addTask}>
                <Increment ref={this.input}/>
              </form>       
              <Display 
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}/>
            </div>
          </div>
        );
      }
    }

export default App;