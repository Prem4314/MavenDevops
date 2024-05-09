import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import WelcomePage from "./Components/WelcomePage";
import RegisterUser from "./Components/RegisterUser";
import RegisterComplaint from "./Components/RegisterComplaint";
import UserPage from "./Components/UserPage";
import Complaint from "./Components/Complaint";
// import CreatePetition from "./Components/PetitionComponents/CreatePetition";
// import ViewPetitions from "./Components/PetitionComponents/ViewPetitions";
// import ViewUsers from "./Components/UserComponents/ViewUsers";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/AddUser" element={<RegisterUser />} />
          <Route path="/CreatePetition" element={<RegisterComplaint />} />
          <Route path="/ViewUsers" element={<UserPage />} />
          <Route path="/ViewPetitions" element={<Complaint />} />
          {/* <Route path="/CreatePetition" element={<CreatePetition />} />
          <Route path="/ViewPetitions" element={<ViewPetitions />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/ViewUsers" element={<ViewUsers />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
