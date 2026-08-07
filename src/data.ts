import type { ReactNode } from "react";

export interface MenuItemDTO {
  id: string;
  url: string;
  label: ReactNode;
}

export const menuItems: MenuItemDTO[] = [
  {
    id: "home",
    url: "/",
    label: "Home",
  },
  {
    id: "about",
    url: "/about",
    label: "About",
  },
  {
    id: "blog",
    url: "/blog",
    label: "Blog",
  },
  {
    id: "news",
    url: "/news",
    label: "Latest News",
  },
  {
    id: "services",
    url: "/services",
    label: "Our Services",
  },
  {
    id: "products",
    url: "/products",
    label: "Products",
  },
  {
    id: "solutions",
    url: "/solutions",
    label: "Business Solutions",
  },
  {
    id: "pricing",
    url: "/pricing",
    label: "Pricing & Plans",
  },
  {
    id: "resources",
    url: "/resources",
    label: "Resources and Guides",
  },
  {
    id: "case-studies",
    url: "/case-studies",
    label: "Customer Case Studies",
  },
  {
    id: "documentation",
    url: "/documentation",
    label: "Developer Documentation",
  },
  {
    id: "community",
    url: "/community",
    label: "Community",
  },
  {
    id: "careers",
    url: "/careers",
    label: "Careers and Open Positions",
  },
  {
    id: "support",
    url: "/support",
    label: "Help & Support Center",
  },
  {
    id: "partners",
    url: "/partners",
    label: "Technology and Integration Partners",
  },
  {
    id: "contact",
    url: "/contact",
    label: "Get in Touch With Our Team",
  },
];
