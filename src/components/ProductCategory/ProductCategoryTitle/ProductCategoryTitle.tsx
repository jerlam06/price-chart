import RotatingArrow from "../../RotatingArrow/RotatingArrow";
import "./ProductCategoryTitle.scss";

interface ProductCategoryTitleProps {
  title: string;
  isOpen: boolean;
  isSelected: boolean | undefined;
  onOpen: () => void;
  onSelect: (e: any) => void;
}

export default function ProductCategoryTitle({
  title,
  isOpen,
  isSelected,
  onOpen,
  onSelect,
}: ProductCategoryTitleProps) {
  return (
    <div className="ProductCategoryTitle">
      <RotatingArrow onClick={onOpen} rotate={isOpen} />
      <div
        onClick={(e) => onSelect(e)}
        className={"ProductCategoryTitle__title" + (isSelected ? " ProductCategoryTitle__title--selected" : "")}
      >
        {title}
      </div>
    </div>
  );
}
