import React from "react";
import queryString from "query-string";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoEdit from "./todoEdit";
import { getTodo } from "../../lib/api";
import { Link } from "react-router-dom";

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
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <Link to="/todo">
            <button className="btn btn-sm btn-info">
              <FontAwesomeIcon icon={faHome} /> Back to Home
            </button>
          </Link>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <div className="card mt-2 " key={todo._id}>
            <h5 className="card-header bg-light">
              <span aria-hidden="true">View detail</span>
            </h5>
            <div className="card-body">
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
                <label>Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="Description"
                  value={todo.description}
                  disabled={true}
                  rows="3"
                ></textarea>
              </div>
              <hr />
              <div className="float-right">
                <TodoEdit todo={todo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
