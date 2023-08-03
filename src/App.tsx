import React, { useState } from 'react';
import { add,remove, toggleCompleted } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';
import { fetchUser } from './features/userSlice';

function App() {
  const todos = useAppSelector((state) => state.todos);
  const user = useAppSelector((state) => state.user);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () =>{
    dispatch(add(title));
    setTitle("");
  }

  const removeTodo = (id: number) => {
    dispatch(remove(id));
  } 

  const toggle = (id:number) => {
    dispatch(toggleCompleted(id));
  }

  const currentUser = user.data && user.data.results[0];

  return (
    <div className="App">
      <input name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button onClick={onSave}>Save</button>
      <ul>
        {
            todos.map((todo,idx) => (
              <li key={idx}>
                <button onClick={() => toggle(todo.id)}>{!todo.completed ? "Mark Not Completed" : "Mark Completed"}</button>
                <button onClick={() => removeTodo(todo.id)}>Delete</button>
                <span>{todo.title}</span>
              </li>
          ))
        }
      </ul>
      <div>
        <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
        {user.loading && "Loading..."}
        {user.error && user.error}
        {
          currentUser && 
          <div>
              Name: {currentUser.name.title}-{currentUser.name.first}-{currentUser.name.last}
              <img alt="avatar" src={currentUser.picture.large}/>
            </div>
          
        }

      </div>
    </div>
  );
}

export default App;
