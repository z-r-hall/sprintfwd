import React, { useState } from 'react';
import todo from './mock-db/todo';

function Todo() {
  const [todoList, setTodoList] = useState(todo.items);
  const [todoItem, setTodoItem] = useState('');
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [updateInput, setUpdateInput] = useState('');
  const [todoIndex, setTodoIndex] = useState();

  function addItem(e) {
    setShowUpdateInput(false);
    todo.items = [...todo.items, todoItem];
    setTodoList(todo.items);
    document.querySelector('input').value = '';
  }

  function deleteItem(index){
    setShowUpdateInput(false);
    todo.items = todo.items.filter((el, i) => i !== index);
    setTodoList(todo.items);
  }

  function updateItem(index){
    setShowUpdateInput(true);
    setUpdateInput(todoList.filter((el, i)=> i === index)[0]);
    setTodoIndex(index);
  }
  function submitUpdate() {
    setShowUpdateInput(false);
    todo.items = todo.items.map((el, i)=> {
      if(i === todoIndex) {
        el = updateInput
        return el;
      } else {
        return el;
      }
    });
    setTodoList(todo.items);
  }
  return (
    <div className="Todo" >
      <input onChange={(e)=>setTodoItem(e.target.value)} /><button onClick={addItem} >Add Item</button><br/>
      
      {showUpdateInput && <div><input value={updateInput} onChange={(e)=> setUpdateInput(e.target.value)} /><button onClick={submitUpdate} >Update Item</button><br/></div>}
      <h3>To-do List</h3>
      <ul>
        {todoList.map((el, i) => {
          return (
          <div key={i} className="todo-buttons"><li>{el} </li><div><button onClick={()=>deleteItem(i)} >Delete</button><button onClick={()=>updateItem(i)} >Update</button></div></div>)
        })}
      </ul>
    </div>
  )
}

export default Todo