import { useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ProductCategory.scss";
import ProductCategoryTitle from "./ProductCategoryTitle/ProductCategoryTitle";

interface ProductCategoryProps {
  itemData: ProductCategory;
  selectedItems: SelectedItems | null;
  parentId?: number | null;
  onSelectItem: OnSelectItemCallback;
}

export default function ProductCategory({
  itemData,
  parentId = null,
  selectedItems,
  onSelectItem,
}: ProductCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isSelected = selectedItems?.items.includes(itemData.id);

  // Only meant to stopPropagation throughout the component tree
  const handleOnSelectItem = (data: OnSelectItemCallbackData) => (e: any) => {
    e.stopPropagation();
    onSelectItem(data);
  };

  return (
    <div className="ProductCategory">
      <ProductCategoryTitle
        title={itemData.name}
        isOpen={isOpen}
        isSelected={isSelected}
        onOpen={() => setIsOpen(!isOpen)}
        onSelect={handleOnSelectItem({ id: itemData.id, parentId })}
      />
      <div className={"ProductCategory__children" + (isOpen ? " ProductCategory__children--open" : "")}>
        {itemData.data.map((item) => {
          return item.type === "product" ? (
            <ProductItem
              onClick={handleOnSelectItem({ id: item.id, parentId: itemData.id })}
              isSelected={selectedItems?.items.includes(item.id)}
              item={item as Product}
              key={item.id}
            />
          ) : (
            <ProductCategory
              selectedItems={selectedItems}
              onSelectItem={onSelectItem}
              parentId={itemData.id}
              itemData={item as ProductCategory}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
