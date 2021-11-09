import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("shoul render Container in document", () => {
    const { getByText } = render(<Container> teste </Container>);

    expect(getByText("teste")).toBeInTheDocument();
  });
});
