import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";

describe("Navbar Component", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const brand = screen.getByText(/Petition Management System/i);
    expect(brand).toBeInTheDocument();
  });

  it("should have correct links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const createPetitionLink = screen.getByText(/Create Petition/i);
    expect(createPetitionLink).toHaveAttribute("href", "/CreatePetition");

    const viewPetitionsLink = screen.getByText(/View All Petitions/i);
    expect(viewPetitionsLink).toHaveAttribute("href", "/ViewPetitions");

    const addUserLink = screen.getByText(/Register User/i);
    expect(addUserLink).toHaveAttribute("href", "/AddUser");

    const viewUsersLink = screen.getByText(/View All Users/i);
    expect(viewUsersLink).toHaveAttribute("href", "/ViewUsers");
  });

  it("should be able to toggle the navbar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggleButton = screen.getByLabelText(/Toggle navigation/i);
    expect(toggleButton).toBeInTheDocument();
  });
});
