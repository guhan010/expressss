import axios from "axios";
import React, { useEffect, useState } from "react";

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [forma, setForma] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/users/")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  };
  const handledelete = (userId) => {
    axios
      .delete(`http://localhost:5000/api/users/${userId}`)
      .then(() => fetchData());
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users/", forma).then((res) => {
      fetchData();
      setForma({ name: "", email: "", age: "", phoneNumber: "" });
    });
  };

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.age} - {user.phoneNumber}{" "}
            <button onClick={() => handledelete(user._id)}>Delete User</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name here"
          value={forma.name}
          onChange={(e) => setForma({ ...forma, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Your Email address"
          name="email"
          value={forma.email}
          onChange={(e) => setForma({ ...forma, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter Your age"
          name="age"
          value={forma.age}
          onChange={(e) => setForma({ ...forma, age: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          name="phoneNumber"
          value={forma.phoneNumber}
          onChange={(e) => setForma({ ...forma, phoneNumber: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Crud;
