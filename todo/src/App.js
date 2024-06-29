
import { useState } from 'react';
import './App.css';


function App() {
  const [newData, setNewData] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e){
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...todos, {title: newData}
      ]
    });
  }
  console.log(todos);
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
    </>
  );
}

export default App;
