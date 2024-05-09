import React, { useState, useEffect } from "react";
import PetitionServices from "../Services/PetitionServices";
import { Link } from "react-router-dom";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await PetitionServices.getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Error fetching users. Please try again.");
    }
  };

  const handleUpdateUser = async (userId) => {
    try {
      // Fetch the user data by ID
      const userToUpdate = users.find((user) => user.userId === userId);
      // Perform update logic here...
      console.log("Update user:", userToUpdate);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Perform delete logic here...
      console.log("Delete user:", userId);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Management</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.userMobno}</td>
              <td>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleUpdateUser(user.userId)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user.userId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-success" to="/Adduser">
        Add User
      </Link>
    </div>
  );
}

export default UserPage;
