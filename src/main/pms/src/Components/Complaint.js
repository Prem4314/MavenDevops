import React, { useState, useEffect } from "react";
import PetitionServices from "../Services/PetitionServices";

function Complaint() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComplaints(); // Initial fetch of complaints
  }, []); // Only run once when component mounts

  const fetchComplaints = async () => {
    try {
      const response = await PetitionServices.getAllComplaints();
      setComplaints(response.data); // Set the complaints data
      setError(null); // Clear any existing errors
    } catch (error) {
      console.error("Error fetching complaints:", error);
      setError("Error fetching complaints. Please try again later."); // Set error message
    }
  };

  const handleUpdateStatus = async (complaintId, newStatus) => {
    try {
      if (newStatus === "Resolved") {
        await PetitionServices.updateComplaintStatusToResolved(complaintId);
      } else if (newStatus === "Denied") {
        await PetitionServices.updateComplaintStatusToDenied(complaintId);
      }
      await fetchComplaints(); // Refresh the list of complaints after updating status
      window.alert("Status changed successfully"); // Show success message in window alert
    } catch (error) {
      console.error("Error updating complaint status:", error);
      setError("Error updating complaint status. Please try again."); // Set error message on failure
    }
  };

  const handleStatusChange = (complaintId, newStatus) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.complaintId === complaintId
          ? { ...complaint, selectedStatus: newStatus } // Update the selected status
          : complaint
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Complaint Management</h2>
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Show error if any */}
      <table className="table table-striped">
        <thead className="bg-dark text-light text-center">
          <tr>
            <th style={{ width: "15%" }}>Complaint ID</th>
            <th style={{ width: "50%" }}>Description</th>
            <th>Status</th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.complaintId}>
              <td className="text-center">{complaint.complaintId}</td>
              <td>{complaint.description}</td>
              <td>{complaint.status}</td>
              <td className="text-center">
                <select
                  className="form-select"
                  value={complaint.selectedStatus || ""} // Use complaint-specific status
                  onChange={(e) =>
                    handleStatusChange(complaint.complaintId, e.target.value)
                  }
                >
                  <option value="">Review</option>
                  <option value="Pending">Pending</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Denied">Denied</option>
                </select>
              </td>
              <td className="text-center">
                <button
                  onClick={() =>
                    handleUpdateStatus(
                      complaint.complaintId,
                      complaint.selectedStatus
                    )
                  }
                  type="button"
                  className="btn btn-success"
                >
                  Change
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Complaint;
