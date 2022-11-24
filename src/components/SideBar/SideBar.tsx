import { ReactNode } from "react";
import "./SideBar.scss";

interface SideBarProps {
  children: ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return <div className="SideBar">{children}</div>;
}
