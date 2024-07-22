import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

const TodoDetails = ({
  showModal,
  todoDetails,
  setTodoDetails,
  setShowModal,
}) => {
  return (
    <div>
      <>
        <Dialog open={showModal} onClose={() => setShowModal(false)}>
          <DialogTitle>{todoDetails?.todo}</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setShowModal(false), setTodoDetails(null);
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
};

export default TodoDetails;
