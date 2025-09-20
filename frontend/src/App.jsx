import React, { useEffect, useState } from "react";
export default function App() {
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/hello").then(res => res.json()).then(data => setMsg(data.message));
    fetch("http://localhost:5000/api/users").then(res => res.json()).then(data => setUsers(data));
  }, []);
  return (<div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>⚡ React 19.1.1 + Vite + Docker (Full Stack)</h1>
    <p>{msg}</p>
    <h2>Users from DB:</h2>
   
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.first_name} {u.last_name} -{u.user_password} - {u.email_id} - {u.mobile_id}
        </li>
      ))}
    </ul>

  </div>);
}
