import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={400}
      classNames="animation-right"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles["side-drawer"]} onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.querySelector("#side-drawer"));
};

export default SideDrawer;
