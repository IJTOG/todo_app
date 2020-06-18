import React from "react";
import { login } from "../lib/api";

function Login() {
  const [form, setForm] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState(false);

  const onSubmit = async () => {
    try {
      await login(form.username, form.password);
    } catch (err) {
      setForm({ ...form, password: "" });
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-sm-12 col-md-6">
          <div className="card">
            <div className="text-center mt-4">
              <h4>ลงชื่อเข้าสู่ระบบ</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Username</label>
                <input
                  className="form-control"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />

                {error && (
                  <small className="form-text text-muted">
                    <span style={{ color: "red" }}>
                      Username or Password is incorrect
                    </span>
                  </small>
                )}
              </div>

              <button
                onClick={onSubmit}
                variant="primary"
                className="btn btn-primary btn-block"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
