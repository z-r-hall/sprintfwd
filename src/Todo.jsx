import React, { useState } from 'react';

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [updateInput, setUpdateInput] = useState('');
  const [todoIndex, setTodoIndex] = useState();

  function addItem(e) {
    setTodoList([...todoList, todoItem]);
    setShowUpdateInput(false);
    document.querySelector('input').value = '';
  }

  function deleteItem(index){
    const newList = todoList.filter((el, i) => i !== index);
    setShowUpdateInput(false);
    setTodoList(newList);
  }

  function updateItem(index){
    setShowUpdateInput(true);
    setUpdateInput(todoList.filter((el, i)=> i === index)[0]);
    setTodoIndex(index);
  }
  function submitUpdate() {
    setShowUpdateInput(false);
    setTodoList(todoList.map((el, i)=> {
      if(i === todoIndex) {
        el = updateInput;
        return el;
      } else {
        return el;
      }
    }))
  }
  return (
    <div className="Todo" >
      <input onChange={(e)=>setTodoItem(e.target.value)} /><button onClick={addItem} >Add Item</button><br/>
      
      {showUpdateInput && <div><input value={updateInput} onChange={(e)=> setUpdateInput(e.target.value)} /><button onClick={submitUpdate} >Update Item</button><br/></div>}

      <ul>
        {todoList.map((el, i) => {
          return (
          <li key={i}>{el} <button onClick={()=>deleteItem(i)} >Delete</button> <button onClick={()=>updateItem(i)} >Update</button></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todo