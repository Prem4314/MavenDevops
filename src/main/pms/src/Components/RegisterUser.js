// RegisterUser.js
import React, { useState } from "react";
import PetitionServices from "../Services/PetitionServices";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const [userData, setUserData] = useState({
    userName: "",
    userMobno: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PetitionServices.registerUser(userData);
      alert("User registered successfully.Raise your Petition");
      navigate("/CreatePetition");
      // Clear form fields after successful registration
      setUserData({
        userName: "",
        userMobno: "",
      });
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Register User</h4>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter username"
                  value={userData.userName}
                  onChange={(e) =>
                    setUserData({ ...userData, userName: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userMobno" className="form-label">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  name="userMobno"
                  id="userMobno"
                  placeholder="Enter mobile number"
                  value={userData.userMobno}
                  onChange={(e) =>
                    setUserData({ ...userData, userMobno: e.target.value })
                  }
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-muted mt-5">
        &copy;2024 Petition Management System. All rights reserved.
      </p>
    </div>
  );
}

export default RegisterUser;
