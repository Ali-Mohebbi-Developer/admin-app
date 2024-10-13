import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.first_name} {user.last_name}
          </Link>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
