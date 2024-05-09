import React, { useState, useEffect } from "react";
import PetitionServices from "../Services/PetitionServices";

function RegisterComplaint() {
  const [complaintData, setComplaintData] = useState({
    description: "",
    user: {
      userId: "",
    }, // Changed from 'user' to 'userId' for consistency
  });
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    populateUsers();
  }, []);

  const populateUsers = async () => {
    try {
      const response = await PetitionServices.getAllUsers();
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(complaintData);
    try {
      await PetitionServices.registerComplaint(complaintData);
      alert("Complaint registered successfully");

      // Clear form fields after successful registration
      setComplaintData({
        description: "",
        userId: "", // Reset userId to empty string
      });
      setError(null);
    } catch (error) {
      console.error("Error registering complaint:", error);
      setError("Error registering complaint. Please try again.");
    }
  };

  const handleUserChange = (e) => {
    const selectedUserId = e.target.value;
    console.log(selectedUserId);
    setComplaintData({
      ...complaintData,
      user: {
        userId: selectedUserId,
      }, // Changed from 'user' to 'userId' for consistency
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">
                Register Complaint
              </h4>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Enter the Complaint Description:
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter complaint description"
                  value={complaintData.description}
                  onChange={(e) =>
                    setComplaintData({
                      ...complaintData,
                      description: e.target.value,
                    })
                  }
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                  User:
                </label>
                <select
                  name="userId"
                  id="userId"
                  className="form-select"
                  value={complaintData.userId}
                  onChange={handleUserChange}
                  required
                >
                  <option value="">Select User</option>
                  {userList.map((user) => (
                    <option key={user.userId} value={user.userId}>
                      {user.userName}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register Complaint
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

export default RegisterComplaint;
