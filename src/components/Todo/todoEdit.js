import React from "react";
import { useHistory } from "react-router-dom";
import { updateTodo } from "../../lib/api";

function TodoEdit({ todo }) {
  let history = useHistory();

  const [form, setForm] = React.useState({ title: "", description: "" });

  React.useEffect(() => {
    if (todo) setForm({ title: todo.title, description: todo.description });
  }, [todo]);

  const onSubmit = async () => {
    if (form.title !== "" && form.description !== "")
      try {
        await updateTodo(todo._id, form);
        setForm({ title: "", description: "" });
        history.push("/todo");
      } catch (err) {
        console.log(err);
      }
    else alert("Please fill the form");
  };

  return (
    <div>
      <button
        onClick={() =>
          setForm({ title: todo.title, description: todo.description })
        }
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#todoEditModalCenter"
      >
        Edit
      </button>

      <div
        className="modal fade"
        id="todoEditModalCenter"
        role="dialog"
        aria-labelledby="todoEditModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="todoEditModalLongTitle">
                Edit todo
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
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control  App-input"
                  id="Title"
                  value={form.title}
                  placeholder="Enter title"
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control  App-input"
                  id="Description"
                  value={form.description}
                  placeholder="Enter description"
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
            </div>
            <br />
            <br />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={onSubmit}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoEdit;
