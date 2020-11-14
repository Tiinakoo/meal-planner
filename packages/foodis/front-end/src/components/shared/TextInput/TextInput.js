import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./TextInput.module.scss";

const TextInput = ({
  model = {},
  value = model.value,
  onChange = model.setValue,
  ...props
}) => {
  const onNativeChange = ({ target: { value } }) => onChange(value);

  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onNativeChange}
      placeholder="Add new department"
      {...props}
    />
  );
};

export default observer(TextInput);
