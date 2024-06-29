
import { useState } from 'react';
import './App.css';


function App() {
  const [newData, setNewData] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e){
    e.preventDefault()
    setTodos(todos => {
      return [
        ...todos, {title: newData, completed: false}
      ]
    });
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="App">
      ToDo App
      
      <div className="main-body">

        <input type="text" value={newData} onChange={e => setNewData(e.target.value)} id='inputData'></input>
        <button className="btn">Add</button>
      </div>
      
      
    </div>
    </form>
    {todos.map(todo => {
      return(
        <li>
          <input type='checkbox' checked={todo.completed}/>
          {todo.title}
          <button>delete</button>
        </li>
      )
    }
    )}
    </>
  );
}

export default App;
