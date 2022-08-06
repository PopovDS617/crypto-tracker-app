import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const appTheme = useSelector((state) => state.ui.theme);

  let currentTheme;
  if (appTheme === "dark") {
    currentTheme = [`${styles.main} ${styles["main-dark"]}`];
  } else {
    currentTheme = ["styles.main styles.main-light"];
  }

  return (
    <React.Fragment>
      <main className={currentTheme}>
        <MainNavigation />
        <div>{props.children}</div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;