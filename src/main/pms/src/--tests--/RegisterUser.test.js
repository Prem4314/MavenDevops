import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterUser from "../Components/RegisterUser";
import "@testing-library/jest-dom/extend-expect";
import PetitionServices from "../Services/PetitionServices";

jest.mock("../Services/PetitionServices", () => ({
  registerUser: jest.fn().mockResolvedValue({}),
}));

global.alert = jest.fn();

describe("RegisterUser Component", () => {
  const renderWithRouter = (component) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("renders without crashing", () => {
    renderWithRouter(<RegisterUser />);
    const title = screen.getByRole("heading", { name: "Register User" });
    expect(title).toBeInTheDocument();
  });

  it("has a username input field", () => {
    renderWithRouter(<RegisterUser />);
    const userNameField = screen.getByLabelText("Username:");
    expect(userNameField).toBeInTheDocument();
  });

  it("has a mobile number input field", () => {
    renderWithRouter(<RegisterUser />);
    const userMobnoField = screen.getByLabelText("Mobile Number:");
    expect(userMobnoField).toBeInTheDocument();
  });

  it("can submit the form with valid input", async () => {
    renderWithRouter(<RegisterUser />);

    const userNameField = screen.getByLabelText("Username:");
    const userMobnoField = screen.getByLabelText("Mobile Number:");
    const submitButton = screen.getByRole("button", { name: "Register User" });

    fireEvent.change(userNameField, { target: { value: "Test User" } });
    fireEvent.change(userMobnoField, { target: { value: "1234567890" } });

    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(global.alert).toHaveBeenCalledWith(
        "User registered successfully.Raise your Petition"
      )
    );
  });

  it("shows an error message when user registration fails", async () => {
    jest
      .mocked(PetitionServices.registerUser)
      .mockRejectedValueOnce(new Error("Failed to register user"));

    renderWithRouter(<RegisterUser />);

    const submitButton = screen.getByRole("button", { name: "Register User" });

    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      "Error registering user. Please try again."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
