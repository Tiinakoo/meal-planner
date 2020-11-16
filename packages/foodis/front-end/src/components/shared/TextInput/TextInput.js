import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./TextInput.module.scss";
import InputWrapper from "../../private/InputWrapper/InputWrapper";

const TextInput = ({
  model = {},
  value = model.value,
  onChange = model.setValue,
  label,
  placeholder,
  ...props
}) => {
  const onNativeChange = ({ target: { value } }) => onChange(value);

  return (
    <InputWrapper label={label}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onNativeChange}
        placeholder={placeholder}
        {...props}
      />
    </InputWrapper>
  );
};

export default observer(TextInput);
