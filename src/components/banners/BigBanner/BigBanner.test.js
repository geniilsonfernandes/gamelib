import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BigBanner from "./BigBanner";

const game = {
  id: "002",
  title: "Need for Speed™ Heat",
  description:
    "Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat, corra contra a polícia corrupta da cidade, em eventos das corridas de rua.",
  cover:
    "https://lh3.googleusercontent.com/proxy/AgKmWdISJcBIrR8G9Q8_4BLES1k7BPqA6UjjIrHoj9NUHnGt3iy0AzHqMtKe0YhOGUgqmf0L5EdjKYTst4kkQra2cS0tiAJW_2Lg4kG7tKtMHB0MK1sfiRb8KEikyQkIg98HiGoQ0JPK6i2nU0TWXg0WiQ",
  background:
    "https://lh3.googleusercontent.com/proxy/AgKmWdISJcBIrR8G9Q8_4BLES1k7BPqA6UjjIrHoj9NUHnGt3iy0AzHqMtKe0YhOGUgqmf0L5EdjKYTst4kkQra2cS0tiAJW_2Lg4kG7tKtMHB0MK1sfiRb8KEikyQkIg98HiGoQ0JPK6i2nU0TWXg0WiQ",
  genre: "Racing",
  publisher: "Electronic Arts Inc",
};

describe("BigBanner", () => {
  it("shoul render info games in the document", () => {
    render(
      <BrowserRouter>
        <BigBanner
          title={game.title}
          description={game.description}
          publisher={game.publisher}
          background={game.background}
        />
      </BrowserRouter>
    );

    const title = screen.getByRole("link", { name: game.title });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(game.description);
    expect(description).toBeInTheDocument();

    const publisher = screen.getByText(game.publisher);
    expect(publisher).toBeInTheDocument();

    const button = screen.getByRole("link", { name: /let's go/i });
    expect(button).toBeInTheDocument();

    const imageAlt = screen.getByAltText(game.title);
    expect(imageAlt).toBeInTheDocument();

    const image = screen.getByRole("img", { name: game.title });
    expect(image).toHaveAttribute("src", game.background);
  });

  it("not should render info games in the document", () => {
    render(
      <BrowserRouter>
        <BigBanner />
      </BrowserRouter>
    );

    const title = screen.queryByRole("link", { name: game.title });
    expect(title).not.toBeInTheDocument();

    const description = screen.queryByText(game.description);
    expect(description).not.toBeInTheDocument();

    const publisher = screen.queryByText(game.publisher);
    expect(publisher).not.toBeInTheDocument();

    const button = screen.getByRole("link", { name: /let's go/i });
    expect(button).toBeInTheDocument();

    const imageAlt = screen.queryByAltText(game.title);
    expect(imageAlt).not.toBeInTheDocument();

    const image = screen.queryByRole("img", { name: game.title });
    expect(image).toBeFalsy();
  });
});
