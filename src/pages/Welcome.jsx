import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="app-bg">
      <div className="mobile-screen">
        <div className="welcome-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <button
            className="create-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}