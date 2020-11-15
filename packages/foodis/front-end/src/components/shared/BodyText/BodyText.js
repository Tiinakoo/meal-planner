import React from "react";
import upperFirst from "lodash/fp/upperFirst";
import styles from "./BodyText.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

const BodyText = ({ size, font, className, children, ...props }) => {
  const classes = classNames([
    styles.bodyText,
    styles[`bodyText__${font}`],
    styles[`bodyText__size${upperFirst(size)}`],
    className,
  ]);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default observer(BodyText);
