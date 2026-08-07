import type { HTMLAttributes } from "react";
import { menuItems } from "./data";
import { MenuItem } from "./MenuItem";
import "./Menu.css";
import { Dropdown } from "./Dropdown";

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export const Menu = ({ className, ...htmlAttrs }: MenuProps) => {
  return (
    <ul className={`Menu ${className ?? ""}`} {...htmlAttrs}>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}

      <Dropdown menuItems={menuItems} />
    </ul>
  );
};
