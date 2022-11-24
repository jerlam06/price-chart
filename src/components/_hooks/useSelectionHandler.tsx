import { useState } from "react";

// Handles selection logic in order to keep UI component purer
export default function useSelectionHandler() {
  const [selectedItems, setSelectedItems] = useState<SelectedItems | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const onSelectItem: any =
    (selectType: string) =>
    ({ id, parentId }: OnSelectItemCallbackData) => {
      let items = [];
      if (selectedItems !== null && selectedItems.items.includes(id)) {
        items = [...selectedItems.items];
        items.splice(items.indexOf(id), 1);
      } else if (!selectedItems || parentId !== selectedItems.parentId) {
        items.push(id);
      } else {
        items = [...selectedItems.items, id];
      }
      setSelectedItems({ parentId, items });
      setSelectedCategory(items.length > 0 ? selectType : "");
    };

  return [selectedItems, selectedCategory, onSelectItem];
}
