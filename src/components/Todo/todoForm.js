import React from "react";
import { createTodo } from "../../lib/api";

function Todoform({ fetchData, action }) {
  const [form, setForm] = React.useState({ title: "", description: "" });

  React.useEffect(() => {}, []);

  const onSubmit = async () => {
    if (form.title !== "" && form.description !== "")
      try {
        await createTodo(form);
        setForm({ title: "", description: "" });
        fetchData();
      } catch (err) {}
    else alert("Please fill the form");
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="text-center col-12">
          <div
            className="container"
            style={{ position: "fixed", bottom: 25, right: "3%" }}
          >
            <button
              type="button"
              className="btn btn-primary btn-lg "
              data-toggle="modal"
              data-target="#todoFormModalCenter"
            >
              + Create
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="todoFormModalCenter"
        role="dialog"
        aria-labelledby="todoFormModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="todoFormModalLongTitle">
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

export default Todoform;
