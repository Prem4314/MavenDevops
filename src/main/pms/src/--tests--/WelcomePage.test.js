import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomePage from "../Components/WelcomePage";

test("displays welcome message on WelcomePage", () => {
  render(<WelcomePage />);
  const welcomeMessage = screen.getByText(
    /Welcome to the Petition Management System!/i
  );
  expect(welcomeMessage).toBeInTheDocument();
});

test("displays a system description", () => {
  render(<WelcomePage />);
  const description = screen.getByText(
    /The Petition Management System empowers users to raise petitions/i
  );
  expect(description).toBeInTheDocument();
});

test("contains navigation links", () => {
  render(<WelcomePage />);
  const registerLink = screen.getByRole("link", { name: /Register User/i });
  const resolveLink = screen.getByRole("link", { name: /Resolve Petition/i });
  const raiseLink = screen.getByRole("link", { name: /Raise Petition/i });
  expect(registerLink).toBeInTheDocument();
  expect(resolveLink).toBeInTheDocument();
  expect(raiseLink).toBeInTheDocument();
});
