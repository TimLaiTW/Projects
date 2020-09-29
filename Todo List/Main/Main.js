import React, { Component } from "react";
import Increment from "../Increment/index";
import Display from "../Display/index";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          tasks: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event){
        if (this.input.current.value !== "") {
          var newTask = {
            text: this.input.current.value,
            key: Date.now()
          };
          
          var joined = this.state.tasks.concat(newTask);
          this.setState({tasks: joined});
          // Either way to update State.
          // this.setState((prevState) => {
          //   return {
          //     tasks: prevState.tasks.concat(newTask)
          //   };
          // });

          this.input.current.value = "";
        }
        console.log(this.state.tasks)
        event.preventDefault();
    }

    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.handleSubmit}>
                <Increment ref={this.input}/>
              </form>       
              <Display tasks={this.state.tasks}/>
            </div>
          </div>
        );
      }
    }

export default App;