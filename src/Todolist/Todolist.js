import React from 'react';
import Todo from './Todo/Todo';


const Todolist = (props) => {


	const todolist = props.todolist.map((todo,index)=><Todo deleteEvent={props.deleteEvent} key={index} keyValue={index}  text={todo.todotext} / >);

	
	return (

	      <div className="todo-list-cont">
	      {(todolist.length)?(todolist):(<span className="todo-empty-indicator" >Nothing Here ..</span>)}
	      </div>

		)

}


export default Todolist;