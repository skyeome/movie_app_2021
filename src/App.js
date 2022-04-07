import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return;
    setToDos((current)=> [toDo,...current] );
    setToDo("");
  }
  return (
    <div>
      <h2>My To Dos ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할 일을 입력 해주세요."/>
        <button>할 일 추가</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo,idx)=><li key={idx}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
