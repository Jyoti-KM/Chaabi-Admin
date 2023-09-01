import React from "react";
import styles from "./Layout.module.scss";
import typography from "../global-styles/typography.module.scss";
import TextInput from "../components/InputFields/TextInput/TextInput";
import { ReactComponent as Ellipse } from "../assets/icons/layout-icons/ellipse.svg";
import BrandLogoLightTheme from "../assets/icons/layout-icons/chaabi-icon-light-theme.svg";
import BrandLogoDarkTheme from "../assets/icons/layout-icons/chaabi-icon-dark-theme.svg";
import NavItem from "./NavItem/NavItem";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.layoutContainer}>
      <section
        className={
          isDarkMode ? styles.sidebarDarkTheme : styles.sidebarLightTheme
        }
      >
        <div className={styles.logoContainer}>
          <img
            src={isDarkMode ? BrandLogoDarkTheme : BrandLogoLightTheme}
            alt="#"
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
          <NavItem />
        </nav>
      </section>
      <div className={styles.rightHandSection}>
        <header
          className={
            isDarkMode ? styles.headerDarkTheme : styles.headerLightTheme
          }
        >
          <div className={styles.content}>
            <h4>Hello, Puneet Dhiman</h4>
            <p>Welcome to your Dashboard</p>
          </div>
          <div className={styles.actions}>
            <TextInput />
            <Ellipse />
            <Ellipse />
            <Ellipse />
          </div>
        </header>
        <section className={styles.page}>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
