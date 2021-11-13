import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Notices from "./Notices";

describe("BlogCard", () => {
  it("should render head title in the document", () => {
    render(
      <BrowserRouter>
        <Notices />
      </BrowserRouter>
    );

    const head = screen.getByText("Last notices");
    expect(head).toBeInTheDocument();
  });
});
