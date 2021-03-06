import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavLinks from "./NavLinks";

describe("NavLinks", () => {
  it("shoul render links in document", () => {
    render(
      <BrowserRouter>
        <NavLinks />
      </BrowserRouter>
    );

    const link1 = screen.getByText("Discover");
    expect(link1).toBeInTheDocument();

    const link2 = screen.getByText("My Games");
    expect(link2).toBeInTheDocument();
  });
});
