import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterComplaint from "../Components/RegisterComplaint";
import "@testing-library/jest-dom/extend-expect";

describe("RegisterComplaint Component", () => {
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("renders without crashing", () => {
    renderWithRouter(<RegisterComplaint />);
    const headers = screen.getAllByText("Register Complaint");
    const title = headers.find((header) => header.tagName === "H4");  
    expect(title).toBeInTheDocument();
  });

  it("has a description text area", () => {
    renderWithRouter(<RegisterComplaint />);
    const descriptionField = screen.getByLabelText(
      "Enter the Complaint Description:"
    );
    expect(descriptionField).toBeInTheDocument();
  });

  it("has a user select dropdown", () => {
    renderWithRouter(<RegisterComplaint />);
    const userDropdown = screen.getByLabelText("User:");
    expect(userDropdown).toBeInTheDocument();
  });

  it("can submit the form with valid input", () => {
    renderWithRouter(<RegisterComplaint />);

    const descriptionField = screen.getByLabelText(
      "Enter the Complaint Description:"
    );
    const userDropdown = screen.getByLabelText("User:");
    const submitButton = screen
      .getAllByText("Register Complaint")
      .find((button) => button.tagName === "BUTTON");

    fireEvent.change(descriptionField, { target: { value: "Test complaint" } });
    fireEvent.change(userDropdown, { target: { value: "1" } });

    fireEvent.click(submitButton);

  });
});
