import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../../Redux/Features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [isEditId, setIsEditId] = useState(null);
  const todos = useSelector((state) => state.todos.todoVal);

  const handleAddTodo = () => {
    if (isEditId) {
      dispatch(
        editTodo({id:isEditId ,text:todo})
      );
      setIsEditId(null);
    } else {
      dispatch(
        addTodo({
          id: uuidv4(),
          inpText: todo,
        })
      );
    }

    setTodo("");
  };

  const handleEdit = (x) => {
    setTodo(x.inpText);
    setIsEditId(x.id);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>{isEditId ? "edit" : "add"}</button>
      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            {x.inpText}
            {/* onClick={()=>dispatch(editTodo(x.id))} */}
            <button onClick={() => handleEdit(x)}>edit</button>
            <button>save</button>
            <button onClick={() => dispatch(deleteTodo(x.id))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
