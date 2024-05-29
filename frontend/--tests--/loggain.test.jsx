import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loggain from "../app/loggain/page";

describe("Loggain", () => {
  it("updates username and password fields correctly", () => {
    render(<Loggain />);


    fireEvent.change(screen.getByLabelText("Användarnamn:"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Lösenord:"), {
      target: { value: "testpassword" },
    });

    expect(screen.getByLabelText("Användarnamn:")).toHaveValue("testuser");
    expect(screen.getByLabelText("Lösenord:")).toHaveValue("testpassword");
  });
});
