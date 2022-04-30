import React from "react";
import { ModalEdit } from "../Modal/ModalEdit.jsx";
import "./TodoItem.css";

function TodoItem(props) {
  const edit = (item) => {
    console.log(item);
    return(
      <ModalEdit datos={item}/>
    )
  };

  return (
    <div className="TodoItem">
      <input
        type={"checkbox"}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      ></input>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <button
        className="btn btn-warning mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={() => edit(props)}
      >
        Edit
      </button>
      <button className="btn btn-danger mx-3" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
}

export { TodoItem };
