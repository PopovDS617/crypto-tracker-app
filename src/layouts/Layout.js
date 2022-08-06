import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <main className={styles.main}>
        <MainNavigation />
        <div>{props.children}</div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
