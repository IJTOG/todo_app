import React from "react";
import moment from "moment";
import queryString from "query-string";

import TodoEdit from "../components/Todo/todoEdit";
import { getTodo } from "../lib/api";

function TodoDetail(props) {
  const [todo, setTodo] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let query = queryString.parse(window.location.search);
        console.log(query);
        let data = await getTodo(query.id);
        setTodo(data);
      } catch (err) {}
    };
    // console.log(queryString.parse(window.location.search));
    fetchData();
  }, []);

  return (
    <div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="todoDetailModalLongTitle">
              View detail
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
                type="text-area"
                className="form-control"
                id="Title"
                value={todo.title}
                disabled={true}
              />
            </div>
            <div className="form-group">
              <label>description</label>
              <textarea
                type="text"
                className="form-control"
                id="Description"
                value={todo.description}
                disabled={true}
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <TodoEdit todo={todo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
