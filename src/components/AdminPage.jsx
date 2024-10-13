import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import UserList from "./UserList";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    const res = await getUsers(page);
    setUsers(res.data.data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UserList users={users} onDelete={handleDelete} />
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
    </div>
  );
};

export default AdminPage;
