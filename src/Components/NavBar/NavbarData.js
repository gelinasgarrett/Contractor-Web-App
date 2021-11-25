import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Calculator",
    path: "/",
    icon: <FaIcons.FaCalculator />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaClipboardList />,
    cName: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: <AiIcons.AiFillContacts />,
    cName: "nav-text",
  },
  {
    title: "Todo List",
    path: "/todo",
    icon: <FaIcons.FaListOl />,
    cName: "nav-text",
  },
];
