import * as React from "react";
import ReactModal from "react-modal";
import useLocalStorage from "use-local-storage";

ReactModal.setAppElement("#root");

export const useWelcomeModal = () => {
  const [isOpen, setIsOpen] = useLocalStorage("ok-daily-welcome", true);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const Modal = () => (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Welcome to OKDAILY.IO"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          backgroundColor: "#333",
          border: "none",
          borderRadius: "4px",
          bottom: "auto",
          left: "50%",
          padding: "20px",
          position: "fixed",
          right: "auto",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
        },
      }}
    >
      <h1>Welcome to OKDAILY.IO</h1>
      <p>
        This is a simple todo app that helps you keep track of your daily
        activities.
      </p>
      <p>
        You can add new todos by clicking the "Edit" button. You can check off
        todos by clicking the checkbox next to the todo. You can delete todos by
        clicking the "x" button next to the todo.
      </p>
      <p>
        When you're done editing, click the "Save" button to save your todos.
      </p>
      <p>
        You can also check out the source code for this app <a href="">here</a>.
      </p>
      <button onClick={handleClose}>Close</button>
    </ReactModal>
  );

  const ModalButton = () => (
    <button
      onClick={handleOpen}
      style={{ position: "fixed", top: 0, right: 0 }}
    >
      ?
    </button>
  );

  return { Modal, ModalButton };
};
