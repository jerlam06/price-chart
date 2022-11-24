import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import ProductItem from "./ProductItem";

const item = {
  id: 1,
  type: "product",
  name: "Hello",
  salesByDate: [],
};

describe("ProductItem", () => {
  it("should display ProductItem name", () => {
    render(<ProductItem onClick={() => null} isSelected={false} item={item} />);
    expect(screen.getAllByText(item.name).length).toEqual(1);
  });

  it("should display ProductItem unselected", () => {
    const { container } = render(<ProductItem onClick={() => null} isSelected={false} item={item} />);
    expect(container.querySelector(".ProductItem--selected")).toBeNull();
  });

  it("should display ProductItem selected", () => {
    const { container } = render(<ProductItem onClick={() => null} isSelected={true} item={item} />);
    expect(container.querySelector(".ProductItem--selected")).toBeTruthy();
  });
});
