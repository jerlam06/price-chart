import "./ProductItem.scss";

interface ProductItemProps {
  item: Product;
  isSelected: boolean | undefined;
  onClick: (e: any) => void;
}

export default function ProductItem({ item, isSelected, onClick }: ProductItemProps) {
  return (
    <div onClick={onClick} className={"ProductItem" + (isSelected ? " ProductItem--selected" : "")}>
      {item.name}
    </div>
  );
}
