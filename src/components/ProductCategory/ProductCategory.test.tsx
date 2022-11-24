import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import ProductCategory from "./ProductCategory";
import testData from "../../shared/test-data.json";

describe("ProductItem", () => {
  it("should display ProductCategory name", () => {
    render(<ProductCategory selectedItems={null} onSelectItem={() => null} itemData={testData[0]} />);
    expect(screen.getAllByText("13-inch").length).toEqual(1);
  });

  it("should display ProductCategory unselected", () => {
    const { container } = render(
      <ProductCategory selectedItems={null} onSelectItem={() => null} itemData={testData[0]} />
    );
    const selection = container.querySelectorAll(".ProductCategory__title--selected");
    expect(selection.length).toBe(0);
  });

  it("should display ProductCategory selected", () => {
    const selectedItem: SelectedItems = {
      parentId: 1,
      items: [12],
    };
    const { container } = render(
      <ProductCategory selectedItems={selectedItem} onSelectItem={() => null} itemData={testData[0]} />
    );
    const selection = container.querySelectorAll("[class$='--selected']");
    expect(selection.length).toBe(1);
    expect(selection[0]).toContainHTML("13-inch");
  });
});
