import "./App.scss";
import PriceChart from "./components/PriceChart/PriceChart";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import SideBar from "./components/SideBar/SideBar";
import useProductData from "./components/_hooks/useProductData";
import useSelectionHandler from "./components/_hooks/useSelectionHandler";
import { formatChartData } from "./shared/utils";

function App() {
  const [data] = useProductData();
  const [selectedItems, selectedCategory, onSelectItem] = useSelectionHandler();

  return (
    <div className="App">
      <SideBar>
        {data?.map((item) => (
          <ProductCategory
            onSelectItem={onSelectItem(item.name)}
            selectedItems={selectedItems}
            itemData={item}
            key={item.id}
          />
        ))}
      </SideBar>
      {selectedCategory && (
        <PriceChart chartTitle="Sales" data={formatChartData(data, selectedItems)} label={selectedCategory} />
      )}
    </div>
  );
}

export default App;
