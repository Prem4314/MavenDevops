import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserPage from "../Components/UserPage";

test("renders UserPage component without crashing", () => {
  render(
    <MemoryRouter>
      <UserPage />
    </MemoryRouter>
  );

  expect(screen.getByText(/User Management/i)).toBeInTheDocument();
});

test("renders a table in UserPage component", () => {
  render(
    <MemoryRouter>
      <UserPage />
    </MemoryRouter>
  );

  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("table should have the expected headers", () => {
  render(
    <MemoryRouter>
      <UserPage />
    </MemoryRouter>
  );

  const headers = screen.getAllByRole("columnheader");
  expect(headers.length).toBeGreaterThan(0);
  expect(headers[0]).toHaveTextContent("User ID");
  expect(headers[1]).toHaveTextContent("User Name");
  expect(headers[2]).toHaveTextContent("Mobile Number");
  expect(headers[3]).toHaveTextContent("Action");
});
test('contains an "Add User" button linking to "/Adduser"', () => {
  render(
    <MemoryRouter>
      <UserPage />
    </MemoryRouter>
  );

  const addUserButton = screen.getByRole("link", { name: /Add User/i });
  expect(addUserButton).toHaveAttribute("href", "/Adduser");
});
