import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Profile = () => {
  return (
    <div className="container mt-5">
      <h2>My Profile</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">
            Status: Veteran <br />
            Email: johndoe@example.com <br />
            Location: Texas, USA
          </p>
          <Link to="/edit-profile" className="btn btn-primary">Edit Profile</Link> {/* Use Link */}
        </div>
      </div>
    </div>
  );
};
export default Profile;