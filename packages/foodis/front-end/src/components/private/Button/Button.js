import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Button.module.scss";
import upperFirst from "lodash/fp/upperFirst";
import classNames from "classnames";

const Button = ({
  variant,
  size,
  enabled,
  disabled = enabled === undefined ? undefined : !enabled,
  onClick,
  className,
  children,
  ...props
}) => {
  const classNameParameters = [
    styles.button,
    styles[`button__${variant}`],
    styles[`button__size${upperFirst(size)}`],
    className,
  ];

  if (disabled) classNameParameters.push(styles.button__disabled);

  return (
    <button
      type="button"
      className={classNames(classNameParameters)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default observer(Button);
