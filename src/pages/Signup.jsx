import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="app-bg">
      <div className="mobile-screen signup-screen">
        <div className="signup-content">
          <h1>
            Create your
            <br />
            PopX account
          </h1>

          <div className="floating-group">
            <span className="floating-label">
              Full Name<span className="required">*</span>
            </span>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="floating-group">
            <span className="floating-label">
              Phone number<span className="required">*</span>
            </span>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="floating-group">
            <span className="floating-label">
              Email address<span className="required">*</span>
            </span>
            <input type="email" placeholder="Marry Doe" />
          </div>

          <div className="floating-group">
            <span className="floating-label">
              Password<span className="required">*</span>
            </span>
            <input type="password" placeholder="Marry Doe" />
          </div>

          <div className="floating-group">
            <span className="floating-label">
              Company name
            </span>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="agency-section">
            <p>
              Are you an Agency?
              <span className="required">*</span>
            </p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button
          className="signup-btn"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}