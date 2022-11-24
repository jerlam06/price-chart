import Arrow from "../../assets/icon_triangle.svg";
import "./RotatingArrow.scss";

export default function RotatingArrow({ rotate, onClick }: { rotate: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className={"RotatingArrow" + (rotate ? " RotatingArrow--rotate" : "")}>
      <Arrow />
    </div>
  );
}
