import { BLOG_ENABLED } from "@/config/features";
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Sobre",
    path: "/#sobre",
    newTab: false,
  },
  {
    id: 2,
    title: "Tratamentos",
    path: "/#tratamentos",
    newTab: false,
  },
  {
    id: 3,
    title: "Perfil Clínico",
    path: "/perfil-clinico",
    newTab: false,
  },
  {
    id: 4,
    title: "Consultas",
    path: "/consultas",
    newTab: false,
  },
  {
    id: 5,
    title: "FAQ",
    path: "/faq",
    newTab: false,
  },
  {
    id: 6,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 7,
    title: "Contacto",
    path: "/#contacto",
    newTab: false,
  },
].filter((item) => BLOG_ENABLED || item.path !== "/blog");
export default menuData;
