import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItems from "./components/todo-items";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Some Error occured");
    }
  }

  async function fetchTodoDetails(getCurrentTodoId) {
    console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();
      if (details) {
        setTodoDetails(details);
        setShowModal(true);
      } else {
        setTodoDetails(null);
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchListOfTodos();
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App with Material UI</h1>
      {loading ? (
        <h3>Data is loading ... Please wait</h3>
      ) : (
        <div className={classes.todoListWrapper}>
          {todoList && todoList.length > 0 ? (
            todoList.map((todoItem) => {
              return (
                <TodoItems
                  todo={todoItem}
                  fetchTodoDetails={fetchTodoDetails}
                />
              );
            })
          ) : (
            <>No data to display</>
          )}
        </div>
      )}

      <TodoDetails
        todoDetails={todoDetails}
        showModal={showModal}
        setShowModal={setShowModal}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
};

export default App;
