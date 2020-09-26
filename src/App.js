import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they get added/deleted
useEffect(() => {
  //this code here... fires when the app.js loads
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    // console.log(snapshot.docs.map(doc => doc.data()));
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
  })
}, []);


  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //this will prevent from refreshing
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

  
    setInput(''); //clear up the input after clicking add todo button
  }
  
  return (
    <div className="App">
      <h1> To-do List 🕒 </h1>
      <form>
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
      
      <FormControl>
        <InputLabel> ✅Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add ToDo
      </Button>
      {/* <button type="submit" onClick={addTodo}> Add Todo </button> */}
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
