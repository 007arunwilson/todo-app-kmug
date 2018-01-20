import React from 'react';
import Radium from 'radium';

const Todo = (props) => {



    let todoListStyle = {
      border:'1px solid #ccc',
      padding:'10px 20px',
      'borderRadius':'4px',
      'width':'400px',
      margin:'12px auto',
      ':hover':{
      	'background':'rgb(244, 243, 243)',
      }
    }

    let todoDeleteBtnStyle = {
      'float':'right',
      'color':'red',
      'textDecoration':'none',
      ':hover':{
        'color':'#CC0033',
        'textDecoration':'underline'
      }
    }

	return (
		<div key={props.keyValue}  style={todoListStyle} >
      <span className="todo-text">{props.text}</span>
      <a onClick={props.deleteEvent.bind(this,props.keyValue)} key={'a_'} href="javascript:;" style={todoDeleteBtnStyle} className="todo-delete-btn" >Delete</a>
    </div>
		);

}

export default Radium(Todo);