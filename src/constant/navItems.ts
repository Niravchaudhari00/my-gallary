export interface NavItems {
  id: number;
  name: string;
  path: string;
}

export const navItems: NavItems[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Categories",
    path: "#",
  },
  {
    id: 3,
    name: "about",
    path: "/about",
  },
];
