import React from "react";

function WelcomePage() {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 shadow-lg p-5 bg-white rounded">
          <h2
            className="display-4 text-center mb-4"
            style={{
              color: "#333",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "bold",
            }}
          >
            Welcome to the Petition Management System!
          </h2>
          <p className="lead text-muted text-center">
            The Petition Management System empowers users to raise petitions for
            various purposes. You can create petitions to address issues,
            propose changes.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <a
              href="/AddUser"
              className="btn btn-outline-primary btn-lg mx-3"
              style={{ hover: { backgroundColor: "#28a745", color: "#fff" } }}
            >
              Register User
            </a>
            <a
              href="/ViewPetitions"
              className="btn btn-primary btn-lg mx-3"
              style={{ backgroundColor: "green", borderColor: "#28a745" }}
            >
              Resolve Petition ?
            </a>
            <a
              href="/CreatePetition"
              className="btn btn-outline-primary btn-lg mx-3"
              style={{ hover: { backgroundColor: "#28a745", color: "#fff" } }}
            >
              Raise Petition
            </a>
          </div>
          <p className="text-center mt-3">
            <strong>Instructions:</strong> New users must register first.During
            petition submission, select your user Name.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
