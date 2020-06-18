import React from "react";
import { createTodo } from "../../lib/api";

function Todoform() {
  const [form, setForm] = React.useState({ title: "", description: "" });

  React.useEffect(() => {}, []);

  const onSubmit = async () => {
    try {
      await createTodo(form);
      window.location.href = "todo";
    } catch (err) {}
  };

  return (
    <div>
      <div className="row justify-content-center ">
        <div className="text-center col-12">
          <div className="container" style={{ position: "fixed", bottom: 25 }}>
            <button
              type="button"
              className="btn btn-primary btn-lg "
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              + Create
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add todo
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
                  placeholder="Enter title"
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>description</label>
                <input
                  type="text"
                  className="form-control  App-input"
                  id="Description"
                  placeholder="Enter description"
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
            </div>
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

export default Todoform;
