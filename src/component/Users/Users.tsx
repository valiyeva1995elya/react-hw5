import { useEffect, useState } from "react";
import apiClient from "../../common/api";
import { ITodos, IUser } from "../../types";
import "./style.css"

const Users = (props : ITodos) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const getUser = async () => {
    try {
      const res = await apiClient.get<IUser[]>(`/users?id=${props.userId}`);
      setUsers(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (users.length === 0) {
    return <div>loading...</div>;
  }

  return (
  
    <div className="block">
     
      {users.map((user) => (
        <div className= {(props.completed)? "user-block" : "user-block2"}  key={user.id}>
          <h3>{user.email}</h3>
          <p><b>{user.name}</b></p>
          <p>{props.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;