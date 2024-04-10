import axios from "axios";
import React, { useEffect, useState } from "react";

const Crud = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.age} - {user.phoneNumber}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
