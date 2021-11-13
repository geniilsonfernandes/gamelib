import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading", () => {
  it("should Loading element with svg inside", () => {
    const { container } = render(<Loading title="title" />);
    const { firstElementChild } = container.querySelector("span");
    expect(firstElementChild.nodeName).toEqual("svg");
  });
});
