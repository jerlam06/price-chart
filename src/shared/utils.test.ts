import { formatChartData } from "./utils";
import { it, describe, expect } from "vitest";
import testData from "./test-data.json";

describe("formatChartData", () => {
  it("should format data when top level product category is selected", () => {
    const selectedItems: SelectedItems = {
      parentId: null,
      items: [1],
    };
    const formated = formatChartData(testData, selectedItems);
    const labels = ["01/01/2021", "02/01/2021", "03/01/2021", "04/01/2021"];
    const values = [3614, 3225, 3052, 3309];
    expect(formated).toStrictEqual({ labels, values });
  });

  it("should format data when middle level product category is selected", () => {
    const selectedItems: SelectedItems = {
      parentId: 1,
      items: [12],
    };
    const formated = formatChartData(testData, selectedItems);
    const labels = ["01/01/2021", "02/01/2021", "03/01/2021", "04/01/2021"];
    const values = [1526, 988, 924, 1590];
    expect(formated).toStrictEqual({ labels, values });
  });

  it("should format data when lowest level product is selected", () => {
    const selectedItems: SelectedItems = {
      parentId: 12,
      items: [123],
    };
    const formated = formatChartData(testData, selectedItems);
    const labels = ["01/01/2021", "02/01/2021", "03/01/2021", "04/01/2021"];
    const values = [761, 543, 342, 865];
    expect(formated).toStrictEqual({ labels, values });
  });
});
