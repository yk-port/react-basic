import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchApi = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/yk-port/react-basic/tasks")
      .then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id}: {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
