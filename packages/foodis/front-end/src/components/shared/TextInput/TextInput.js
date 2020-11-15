import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./TextInput.module.scss";

const TextInput = ({
  model = {},
  value = model.value,
  onChange = model.setValue,
  placeholder,
  ...props
}) => {
  const onNativeChange = ({ target: { value } }) => onChange(value);

  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onNativeChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default observer(TextInput);
