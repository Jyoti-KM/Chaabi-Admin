import React from "react";
import styles from "./NavItem.module.scss";
import typography from "../../global-styles/typography.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../assets/icons/layout-icons/dashboard-icon.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/layout-icons/users-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/icons/layout-icons/analytics-icon.svg";
import { ReactComponent as MyAccountIcon } from "../../assets/icons/layout-icons/my-account-icon.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/layout-icons/support-icon.svg";
import { ReactComponent as ComponentsIcon } from "../../assets/icons/layout-icons/components-icon.svg";
import { ReactComponent as TrainingIcon } from "../../assets/icons/layout-icons/training-icon.svg";

import { useSelector } from "react-redux";

function NavItem() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const location = useLocation();
  const currentRoute = location.pathname;

  console.log(isDarkMode);

  // const sidebarNavItems = [
  //   {
  //     text: "Dashboard",
  //     icon: <DashboardIcon className={styles.navIcon} />,
  //     route: "/dashboard",
  //   },
  //   {
  //     text: "Users",
  //     icon: <UsersIcon className={styles.navIcon} />,
  //     route: "/users",
  //   },
  //   {
  //     text: "Analytics",
  //     icon: <AnalyticsIcon className={styles.navIcon} />,
  //     route: "/analytics",
  //   },
  //   {
  //     text: "My Account",
  //     icon: <MyAccountIcon className={styles.navIcon} />,
  //     route: "/my-account",
  //   },
  //   {
  //     text: "Support",
  //     icon: <SupportIcon className={styles.navIcon} />,
  //     route: "/support",
  //   },
  //   {
  //     text: "Components",
  //     icon: <ComponentsIcon className={styles.navIcon} />,
  //     route: "/",
  //   },
  // ];

  return (
    <>
      <Link to="/dashboard" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <DashboardIcon
            className={
              currentRoute === "/dashboard"
                ? styles.navIconActive
                : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/dashboard"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Dashboard
          </div>
          {currentRoute === "/dashboard" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/training" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <TrainingIcon
            className={
              currentRoute === "/support"
                ? styles.navIconActive
                : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/support"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Training
          </div>
          {currentRoute === "/training" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/users" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <UsersIcon
            className={
              currentRoute === "/users" ? styles.navIconActive : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/users"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Users
          </div>
          {currentRoute === "/users" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/analytics" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <AnalyticsIcon
            className={
              currentRoute === "/analytics"
                ? styles.navIconActive
                : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/analytics"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Analytics
          </div>

          {currentRoute === "/analytics" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/my-account" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <MyAccountIcon
            className={
              currentRoute === "/my-account"
                ? styles.navIconActive
                : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/my-account"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            My Account
          </div>
          {currentRoute === "/my-account" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/support" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <SupportIcon
            className={
              currentRoute === "/support"
                ? styles.navIconActive
                : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/support"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Support
          </div>
          {currentRoute === "/support" && (
            <div className={styles.navItemActiveBar} />
          )}
        </div>
      </Link>

      <Link to="/" className={styles.link}>
        <div
          className={
            isDarkMode ? styles.navItemDarkTheme : styles.navItemLightTheme
          }
        >
          <ComponentsIcon
            className={
              currentRoute === "/" ? styles.navIconActive : styles.navIcon
            }
          />
          <div
            className={
              currentRoute === "/"
                ? `${typography.t2Semi} ${styles.navItemTextActive}`
                : `${typography.t2Reg} ${styles.navItemText}`
            }
          >
            Components
          </div>
          {currentRoute === "/" && <div className={styles.navItemActiveBar} />}
        </div>
      </Link>
    </>
  );
}

export default NavItem;
