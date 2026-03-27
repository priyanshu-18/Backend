import { useEffect, useState } from "react";

const API = "http://localhost:5001/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  // GET TODOS this is best thing
  const fetchTodos = async () => {
    try { 
      const res = await fetch(API);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD TODO
  const addTodo = async () => {
    if (!title.trim()) return alert("Enter something!");

    try {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, priority })
      });

      setTitle("");
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    fetchTodos();
  };

  // TOGGLE
  const toggleTodo = async (id, completed) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: !completed })
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 Todo App</h1>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task..."
        />

        <select
          style={styles.select}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>

        <button style={styles.addBtn} onClick={addTodo}>
          Add
        </button>
      </div>

      <div style={styles.list}>
        {todos.map((todo) => (
          <div key={todo._id} style={styles.card}>
            <span
              onClick={() => toggleTodo(todo._id, todo.completed)}
              style={{
                ...styles.text,
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.5 : 1
              }}
            >
              {todo.title}
            </span>

            <span style={styles.priority}>
              {todo.priority}
            </span>

            <button
              style={styles.deleteBtn}
              onClick={() => deleteTodo(todo._id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


// 🎨 STYLES
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    padding: "40px",
    textAlign: "center"
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px"
  },

  inputBox: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    width: "200px"
  },

  select: {
    padding: "10px",
    borderRadius: "8px"
  },

  addBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  list: {
    maxWidth: "500px",
    margin: "auto"
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px"
  },

  text: {
    cursor: "pointer"
  },

  priority: {
    fontSize: "12px",
    opacity: 0.7
  },

  deleteBtn: {
    background: "red",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};