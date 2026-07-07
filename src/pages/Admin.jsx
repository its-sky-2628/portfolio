import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  const addProject = async () => {
    await axios.post(
      "http://localhost:5000/api/projects",
      project,
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    );

    alert("Project Added");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <input
        placeholder="Title"
        onChange={(e) =>
          setProject({
            ...project,
            title: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setProject({
            ...project,
            description: e.target.value,
          })
        }
      />

      <button onClick={addProject}>
        Add Project
      </button>
    </div>
  );
};

export default Admin;