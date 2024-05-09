import axios from "axios";

const PetitionServices = {
  getAllUsers: async () => {
    return axios.get("http://localhost:1234/users/all");
  },

  registerUser: async (user) => {
    return axios.post("http://localhost:1234/users/register", user);
  },

  updateUser: async (userId, user) => {
    return axios.put(`http://localhost:1234/users/${userId}`, user);
  },

  getAllComplaints: async () => {
    return axios.get("http://localhost:1234/complaints/all");
  },

  registerComplaint: async (complaint) => {
    return axios.post("http://localhost:1234/complaints/register", complaint);
  },

  updateComplaint: async (complaintId, complaint) => {
    return axios.put(
      `http://localhost:1234/complaints/${complaintId}`,
      complaint
    );
  },

  updateComplaintStatusToResolved: async (complaintId) => {
    return axios.put(
      `http://localhost:1234/complaints/${complaintId}/status?status=Resolved`
    );
  },

  updateComplaintStatusToDenied: async (complaintId) => {
    return axios.put(
      `http://localhost:1234/complaints/${complaintId}/status?status=Denied`
    );
  },
};

export default PetitionServices;
