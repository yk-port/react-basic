import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/yk-port/react-basic/tasks")
      .then((res) => setTasks(res.data));
  }, []);

  const getTask = () => {
    axios
      .get(
        `https://my-json-server.typicode.com/yk-port/react-basic/tasks/${id}`
      )
      .then((res) => setSelectedTask(res.data));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id}: {task.title}
          </li>
        ))}
      </ul>
      <hr />
      <label>set task id</label>
      <br />
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <button onClick={() => getTask()}>get task!</button>
      <h4>
        {selectedTask.id}: {selectedTask.title}
      </h4>
    </div>
  );
};

export default FetchApi;
