import React, { useState } from 'react';
import axios from 'axios';
function Create() {
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    axios
      .post('http://localhost:5000/add', { task })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="text" className="creat_form" onChange={(e) => setTask(e.target.value)} />
      <button type="button" style={{ padding: '10px', backgroundColor: 'black', color: 'white', cursor: 'pointer' }} onClick={handleAdd}>
        Submit{' '}
      </button>
    </div>
  );
}

export default Create;
