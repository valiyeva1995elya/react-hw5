import React, { useEffect, useState } from "react";
import apiClient from "../../common/api";
import { ITodos } from "../../types";
import  Users  from "../Users/Users";

const Todo = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [isLoading, setIsLoding] = useState(true);

  const getPost = async () => {
    try {
      const res = await apiClient.get<ITodos[]>("/todos");
      setTodos(res.data);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoding(false);
    }
  };
  console.log(todos);

  useEffect(() => {
    getPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => <Users key={todo.id} {...todo}/>)}
     
    </div>
  );
};

export default Todo;