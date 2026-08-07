import { useState, type HTMLAttributes } from "react";
import type { MenuItemDTO } from "./data";
import "./Dropdown.css";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  menuItems: MenuItemDTO[];
}

export const Dropdown = ({
  className,
  menuItems,
  ...htmlAttrs
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`Dropdown ${className ?? ""}`} {...htmlAttrs}>
      <button
        className="Dropdown_Trigger"
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
      >
        …
      </button>

      <ul className={`Dropdown_Popup ${isDropdownOpen ? "_open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="Dropdown_MenuItem">
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
