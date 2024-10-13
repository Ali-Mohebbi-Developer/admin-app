import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../service/api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await getUserDetail(id);
      setUser(res.data.data);
    };
    fetchUserDetail();
  }, [id]);
  if (!user) return <p>loading...</p>;
  return (
    <div>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <img src={user.avatar} alt="avatar" />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
