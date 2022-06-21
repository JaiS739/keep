import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./style.module.css";

const Notes = ({ finalData, onDelete, id }) => {
  const { title, content } = finalData;

  let deleteNotes = () => {
    onDelete(id);
  };
  return (
    <>
      <div className={styles.content}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Button onClick={deleteNotes} variant="success">
              <i className="fa-solid fa-circle-minus"></i>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;
