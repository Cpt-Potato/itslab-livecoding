import type { HTMLAttributes } from "react";
import type { MenuItemDTO } from "./data";
import "./MenuItem.css";

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  className?: string;
  menuItem: MenuItemDTO;
}

export const MenuItem = ({
  className,
  menuItem,
  ...htmlAttrs
}: MenuItemProps) => {
  return (
    <li className={`MenuItem ${className ?? ""}`} {...htmlAttrs}>
      <a href={menuItem.url}>{menuItem.label}</a>
    </li>
  );
};
