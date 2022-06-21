import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./style.module.css";
import Button from "react-bootstrap/Button";

const CreateNote = ({ handleSubmit }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  let handleChange = (e) => {
    const { value, name } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let addEvent = () => {
    handleSubmit(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className={styles.textArea}>
        <form action="" className={styles.textArea}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            id=""
            cols="23"
            rows="0"
            placeholder="add notes here..."
            value={note.content}
            onChange={handleChange}
          ></textarea>
          <Button onClick={addEvent} variant="primary">
            <i className="fa-solid fa-circle-plus"></i>
          </Button>{" "}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
