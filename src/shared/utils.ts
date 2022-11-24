export const formatChartData = (data: ProductCategory[] | null, selectedItems: SelectedItems | null) => {
  const aggregatedData: { [key: string]: number } = {};

  const recurs = (d: any[], getVal = false) => {
    d.forEach((item) => {
      let scopedGetVal = getVal;

      if (selectedItems?.items.includes(item.id)) {
        scopedGetVal = true;
      }
      // If we reach the root of the tree
      if (scopedGetVal && "salesByDate" in item) {
        (item as Product).salesByDate.forEach((el) => {
          if (el.date in aggregatedData) {
            aggregatedData[el.date] += el.sales;
          } else {
            aggregatedData[el.date] = el.sales;
          }
        });
      }
      // Else we keep going down the tree
      if ((item as ProductCategory).data) {
        recurs((item as ProductCategory).data, scopedGetVal);
      }
    });
  };

  if (data && selectedItems?.items && selectedItems?.items.length > 0) {
    // Loop recursively through the data in order to aggregate the sales values of selected items
    recurs(data);
  }

  const labels = [];
  const values = [];

  for (let key in aggregatedData) {
    labels.push(key);
    values.push(aggregatedData[key]);
  }

  return { labels, values };
};
