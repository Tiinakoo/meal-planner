import React from "react";
import BodyText from "../../shared/BodyText/BodyText";
import styles from "./InputWrapper.module.scss";

const InputWrapper = ({ label, children, ...props }) => (
  <div className={styles.inputWrapper} {...props}>
    {label && (
      <div className={styles["inputWrapper_label"]}>
        <BodyText font="primary" size="md">
          {label}
        </BodyText>
      </div>
    )}

    {children}
  </div>
);

export default InputWrapper;
