import { useEffect, useState } from "react";

export default function useProductData() {
  const [productData, setProductData] = useState<ProductCategory[] | null>(null);

  useEffect(
    () => {
      // Fake API call
      (async () => {
        try {
          const response = await fetch("data.json");
          const data = await response.json();
          setProductData(data);
        } catch (exception) {
          // TODO: Handle error
          console.error(exception);
        }
      })();
    },
    [] // Could pass date range as dependency to query new data for specific dates
  );

  // Could also return error to handle error on UI
  return [productData];
}
