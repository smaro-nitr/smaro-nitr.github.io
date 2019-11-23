import React from "react";
import LoginContainer from '../Component/Login/LoginContainer'
import NavbarContainer from "../Component/Navbar/NavbarContainer";
import Menu1Container from '../Component/Menu1/Menu1Container'
import Menu2Container from '../Component/Menu2/Menu2Container'

export const navbar = [
  {
    path: "/menu1",
    exact: true,
    sidebar: (title: String) => <NavbarContainer title={title}/>,
    main: () => <Menu1Container />,
    title: 'Menu 1'
  },
  {
    path: "/menu2",
    exact: true,
    sidebar: (title: String) => <NavbarContainer title={title}/>,
    main: () => <Menu2Container />,
    title: 'Menu 2'
  }
]

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => null,
    main: () => <LoginContainer />,
    title: 'Login'
  },
  ...navbar
];
