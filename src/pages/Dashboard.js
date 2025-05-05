import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Support Resources</h5>
              <p className="card-text">Find mental health, housing, and financial support options.</p>
              <Link to="/resources" className="btn btn-outline-primary">View Resources</Link> {/* Use Link */}
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Upcoming Appointments</h5>
              <p className="card-text">You have no appointments scheduled.</p>
              <Link to="/schedule" className="btn btn-outline-secondary">Schedule Now</Link> {/* Use Link */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;