import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navegation from "../Navegation";

describe("Navegation", () => {
  it("shoul render links in Navegation", () => {
    render(
      <BrowserRouter>
        <Navegation />
      </BrowserRouter>
    );
    const link1 = screen.getByText("Discover");
    expect(link1).toBeInTheDocument();

    const link2 = screen.getByText("My Games");
    expect(link2).toBeInTheDocument();
  });
  it("shoul render search Input in Navegation", () => {
    render(
      <BrowserRouter>
        <Navegation />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/search games/i);
    expect(input).toBeInTheDocument();
  });
});
