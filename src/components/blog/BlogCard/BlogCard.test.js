import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BlogCard from "./BlogCard";

const article = {
  id: "333",
  type: "Review",
  cover:
    "https://media.comicbook.com/2021/06/marvels-guardians-of-the-galaxy-top-1272177-1280x0.jpeg",
  author: "Start Miller",
  date: "9. 6. 2021",
  title: "Marvel's Guardians of the Galaxy - Review",
};

describe("BlogCard", () => {
  it("should render the article in the document", () => {
    render(
      <BrowserRouter>
        <BlogCard {...article} />
      </BrowserRouter>
    );

    const button = screen.getByRole("link", { name: article.title });
    expect(button).toBeInTheDocument();

    const type = screen.getByText(article.type);
    expect(type).toBeInTheDocument();

    const author = screen.getByText(article.author);
    expect(author).toBeInTheDocument();

    const date = screen.getByText(article.date);
    expect(date).toBeInTheDocument();

    const imageAlt = screen.getByAltText(article.title);
    expect(imageAlt).toBeInTheDocument();

    const image = screen.getByAltText(article.title);
    expect(image).toHaveAttribute("src", article.cover);
  });

  it("not should render the article in the document", () => {
    render(
      <BrowserRouter>
        <BlogCard />
      </BrowserRouter>
    );

    const title = screen.queryByRole("link", { name: article.title });
    expect(title).not.toBeInTheDocument();

    const type = screen.queryByText(article.type);
    expect(type).not.toBeInTheDocument();

    const author = screen.queryByText(article.author);
    expect(author).not.toBeInTheDocument();

    const date = screen.queryByText(article.date);
    expect(date).not.toBeInTheDocument();

    const imageAlt = screen.queryByAltText(article.title);
    expect(imageAlt).not.toBeInTheDocument();

    const image = screen.queryByRole("img", { name: false });
    expect(image).toBeFalsy();
  });
});
