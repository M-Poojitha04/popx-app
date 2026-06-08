import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="app-bg">
      <div className="mobile-screen login-screen">

        <div className="login-content">

          <h1>
            Signin to your
            <br />
            PopX account
          </h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <div className="floating-group">
            <span className="floating-label">
              Email Address
            </span>

            <input
              type="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="floating-group">
            <span className="floating-label">
              Password
            </span>

            <input
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button
            className="login-submit-btn"
            onClick={() => navigate("/profile")}
          >
            Login
          </button>

        </div>

      </div>
    </div>
  );
}