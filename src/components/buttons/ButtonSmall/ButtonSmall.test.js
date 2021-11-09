import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ButtonSmall from "./ButtonSmall";

const text = "button";

test("shoul render butto in document", () => {
  const { getByText } = render(<ButtonSmall> {text} </ButtonSmall>);

  expect(getByText(text)).toBeInTheDocument();

  
});

