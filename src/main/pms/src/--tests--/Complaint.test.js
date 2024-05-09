import React from "react";
import { render, screen } from "@testing-library/react";
import Complaint from "../Components/Complaint";

test("Complaint renders and shows title", () => {
  render(<Complaint />);
  expect(screen.getByText(/Complaint Management/i)).toBeInTheDocument();
});

test("Complaint renders table with headers", () => {
  render(<Complaint />);
  const table = screen.getByRole("table");
  const headers = screen.getAllByRole("columnheader");

  expect(table).toBeInTheDocument();
  expect(headers.length).toBeGreaterThan(0);
  expect(headers[0]).toHaveTextContent(/Complaint ID/i);
  expect(headers[1]).toHaveTextContent(/Description/i);
  expect(headers[2]).toHaveTextContent(/Status/i);
});
