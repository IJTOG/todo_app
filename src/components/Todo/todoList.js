import React from "react";

function TodoList({ todos }) {
  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [todos]);

  const handleRemove = () => {};

  return (
    <div className="container">
      <h1 className="text-center display-3 Title-header mt-5">TODO APP</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-8">
          {todos.map((todo) => (
            <div className="card mt-2" key={todo._id}>
              <h5 className="card-header">
                {todo.title}
                <button
                  onClick={() => handleRemove()}
                  type="button"
                  className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </h5>
              <div className="card-body">
                <p className="card-text">{todo.description}</p>
                <p className="card-text float-right">{todo.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
