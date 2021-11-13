import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Head from "./Head";

describe("BlogCard", () => {
  it("shoul render head  in the document", () => {
    render(<Head title="title" />);

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();
  });

  it("not should render head  in the document", () => {
    render(<Head />);

    const title = screen.queryByText("title");
    expect(title).not.toBeInTheDocument();
  });
});
