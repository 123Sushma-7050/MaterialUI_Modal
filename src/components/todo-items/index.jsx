import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const TodoItems = ({ todo, fetchTodoDetails }) => {
  console.log(todo);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 350,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 180,
        }}
      >
        <CardContent>
          <Typography variant="h6" color={"text.secondary"}>
            {todo?.todo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => fetchTodoDetails(todo.id)}
            sx={{
              backgroundColor: "#000000",
              color: "#fff",
              opacity: "0.75",
              "&:hover": {
                backgroundColor: "#000000",
                color: "#fff",
                opacity: "1",
              },
            }}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TodoItems;
