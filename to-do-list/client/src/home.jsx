import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Create from './create';

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/get')
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>To do list</h2>
      <Create />

      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <>
            <div>{todo.task}</div>
          </>
        ))
      )}
    </div>
  );
}

export default Home;
