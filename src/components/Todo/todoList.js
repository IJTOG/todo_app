import React from "react";
import moment from "moment";
import TodoForm from "./todoForm";
import { deleteTodo } from "../../lib/api";

function TodoList({ todos, fetchData }) {
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
      <h1 className="text-center display-3 Title-header mt-5">TODO </h1>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div className="card mt-2 " key={todo._id}>
                <h5 className="card-header bg-light">
                  <button
                    type="button"
                    className="btn btn-light stretched-link"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <span aria-hidden="true">{todo.title}</span>
                  </button>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="close"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h5>
                <button
                  type="button"
                  onClick={() => alert("here")}
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
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Confirm to delete
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">Are you sure?</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            handleRemove(todo._id);
                          }}
                          type="button"
                          class="btn btn-danger"
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
      <TodoForm />
      <br />
    </div>
  );
}

export default TodoList;
