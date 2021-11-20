import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("should render Container in document", () => {
    const { getByText } = render(<Container> teste </Container>);

    expect(getByText("teste")).toBeInTheDocument();
  });

  const tag = "nav";
  it("should render wrapper tag nav Container in document", () => {
    const { container } = render(<Container wrapper={tag}>{tag}</Container>);
    const { textContent } = container.querySelector(tag);
    expect(textContent).toEqual(tag);
  });
  
  const content = "lorem ...";
  it("should render  content inside wrapper tag nav Container in document", () => {
    const { container } = render(
      <Container wrapper={tag}>
        <p>{content}</p>
      </Container>
    );
    const { innerHTML } = container.querySelector(tag);
    expect(innerHTML).toEqual(`<p>${content}</p>`);
  });
});
