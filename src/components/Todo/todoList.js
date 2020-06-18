import React from "react";
import moment from "moment";
import TodoForm from "./todoForm";
import { removeToken } from "../../lib/auth";

import { deleteTodo } from "../../lib/api";

function TodoList({ todos, fetchData }) {
  const [selectedForRemove, setSelectedForRemove] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [todos]);

  const handleRemove = async (id) => {
    try {
      await deleteTodo(id);
      fetchData();
    } catch (err) {}
  };

  return (
    <div className="container">
      <button className="btn btn-light float-right" onClick={removeToken}>
        Logout
      </button>
      <h1 className="text-center display-3 Title-header mt-5">TODO </h1>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div className="card mt-2 " key={todo._id}>
                <h5 className="card-header bg-light">
                  <span aria-hidden="true">{todo.title}</span>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="close"
                    aria-label="Close"
                    onClick={() => setSelectedForRemove(todo._id)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h5>
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = `/detail?id=${todo._id}`)
                  }
                  className="list-group-item list-group-item-action"
                >
                  <div className="card-body">
                    <p className="card-text">{todo.description}</p>
                    <p className="card-text float-right">
                      {moment(todo.createdAt).locale("th").format("LLL")}
                    </p>
                  </div>
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Confirm to delete
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">Are you sure?</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            handleRemove(selectedForRemove);
                          }}
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="text-center mt-5">
              Empty press 'Create' for add new todo
            </h5>
          )}
        </div>
      </div>
      <TodoForm fetchData={fetchData} />
      <br />
    </div>
  );
}

export default TodoList;
