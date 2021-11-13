import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BlogDisplay from "./BlogDisplay";

const articles = [
  {
    id: "333",
    type: "Review",
    cover:
      "https://media.comicbook.com/2021/06/marvels-guardians-of-the-galaxy-top-1272177-1280x0.jpeg",
    author: "Start Miller",
    date: "9. 6. 2021",
    title: "title1",
  },
  {
    id: "33334",
    type: "Review",
    cover:
      "https://media.comicbook.com/2021/06/marvels-guardians-of-the-galaxy-top-1272177-1280x0.jpeg",
    author: "Start Miller",
    date: "9. 6. 2021",
    title: "title2",
  },
  {
    id: "334243",
    type: "Review",
    cover:
      "https://media.comicbook.com/2021/06/marvels-guardians-of-the-galaxy-top-1272177-1280x0.jpeg",
    author: "Start Miller",
    date: "9. 6. 2021",
    title: "title3",
  },
];

describe("BlogDisplay", () => {
  it("should render articles in the document", () => {
    render(
      <BrowserRouter>
        <BlogDisplay articles={articles} />
      </BrowserRouter>
    );

    const title = screen.getByRole("link", { name: articles[0].title });
    expect(title).toBeInTheDocument();

    const title2 = screen.getByRole("link", { name: articles[1].title });
    expect(title2).toBeInTheDocument();

    const title3 = screen.getByRole("link", { name: articles[2].title });
    expect(title3).toBeInTheDocument();
  });
  it("not should render articles in the document", () => {
    render(
      <BrowserRouter>
        <BlogDisplay />
      </BrowserRouter>
    );

    const title = screen.queryByRole("link", { name: articles[0].title });
    expect(title).not.toBeInTheDocument();

    const title2 = screen.queryByRole("link", { name: articles[1].title });
    expect(title2).not.toBeInTheDocument();

    const title3 = screen.queryByRole("link", { name: articles[2].title });
    expect(title3).not.toBeInTheDocument();
  });
});
