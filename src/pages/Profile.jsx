import { IoCamera } from "react-icons/io5";

export default function Profile() {
  return (
    <div className="app-bg">
      <div className="mobile-screen profile-screen">

        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-card">

          <div className="profile-top">

            <div className="profile-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                alt="profile"
                className="profile-image"
              />

              <div className="camera-badge">
                <IoCamera size={12} />
              </div>
            </div>

            <div className="profile-info">
              <h3>Marry Doe</h3>
              <p>Marry@Gmail.Com</p>
            </div>

          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

        </div>

        <div className="dashed-line top-line"></div>
        <div className="dashed-line bottom-line"></div>

      </div>
    </div>
  );
}