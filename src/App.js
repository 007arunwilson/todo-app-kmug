import React, { Component } from 'react';
import './App.css';
import './index.css';
import TodoList from './Todolist/Todolist';

class App extends Component {

  state = {
    todolist:[{todotext:'Sample Task 1'}],
    todoInputValue:'',
  };


  handleTodoSubmit = ()=> {

    let todoValue = this.state.todoInputValue;

    if(!todoValue) return;

    let todoListnewArray = [...this.state.todolist];
    todoListnewArray.push({todotext:todoValue}); 
    
    console.log(todoListnewArray);

    this.setState({todolist:todoListnewArray});
    this.setState({todoInputValue:''});

  }


  handleTodoDelete = (keyValue,event)=> {

    let todolistArray = [...this.state.todolist];

    todolistArray.splice(keyValue,1);

    this.setState({todolist:todolistArray});

  }

  inputChangeEventHandler = (event) => {

    this.setState({todoInputValue:event.target.value});

  }

  inputKeyDownEventHandler = (event) => {
      
    if(event.keyCode==13){
      this.handleTodoSubmit();
    }
    //this.setState({todoInputValue:event.target.value});

  }

  render() {

    return (
      <div className="app-container" >
      <h1>Todo App</h1>
      <hr/>
      <div className="todo-form">

      <input onKeyDown={this.inputKeyDownEventHandler} placeholder="Type your todo Here ..." value={this.state.todoInputValue} onChange={this.inputChangeEventHandler} type="text"/> 
      
      <button onClick={this.handleTodoSubmit} >Add Todo</button>
      </div>
      <hr/>

      <TodoList deleteEvent={this.handleTodoDelete} todolist={this.state.todolist}  />

      </div>

    );

    //return React.createElement('div',null,React.createElement('h1',null,'React Start'));

  }
}

export default App;
