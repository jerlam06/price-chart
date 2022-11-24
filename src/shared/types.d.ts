type SalesByDate = {
  date: string;
  sales: number;
};

type Product = {
  id: number;
  type: string;
  name: string;
  salesByDate: SalesByDate[];
};

type ProductCategory = {
  id: number;
  type: string;
  name: string;
  data: Array<ProductCategory | Product>;
};

type SelectedItems = {
  parentId: number | null;
  items: number[];
};

type OnSelectItemCallbackData = { id: number; parentId: number | null };
type OnSelectItemCallback = (data: OnSelectItemCallbackData) => void;
