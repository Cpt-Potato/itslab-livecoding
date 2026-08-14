import { type HTMLAttributes, useLayoutEffect, useRef} from "react";
import { menuItems } from "./data";
import { MenuItem } from "./MenuItem";
import "./Menu.css";
import { Dropdown } from "./Dropdown";

interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export const Menu = ({ className, ...htmlAttrs }: MenuProps) => {
    const listRef = useRef<HTMLUListElement>(null)

    useLayoutEffect(() => {
        const container = listRef.current
        if (!container) return

        const calculateVisible = () => {
            let width = 0
            let count = 0

            for (let i = 0; i < container.children.length; i++) {
                const item = container.children[i] as HTMLElement
                item.style.display = 'block'
                const nextWidth = width + item.offsetWidth + 10

                if (nextWidth > container.clientWidth - 40 - 30 - 10 - 40) break

                width = nextWidth
                count += 1
            }

            for (let i = count; i < container.children.length; i++) {
                (container.children[i] as HTMLElement).style.display = 'none'
            }
        }

        const resizeObserver = new ResizeObserver(calculateVisible)
        resizeObserver.observe(container)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <>
            <ul ref={listRef} className={`Menu ${className ?? ""}`} {...htmlAttrs}>
                {menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.id} menuItem={menuItem} />
                ))}
            </ul>
            <Dropdown menuItems={menuItems} />
        </>
    );
};
