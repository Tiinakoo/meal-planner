import React from "react";
import { observer } from "mobx-react-lite";

const TextInput = ({
  model = {},
  value = model.value,
  onChange = model.setValue,
  ...props
}) => {
  const onNativeChange = ({ target: { value } }) => onChange(value);

  return (
    <input
      className="input"
      value={value}
      onChange={onNativeChange}
      placeholder="Add new department"
      {...props}
    />
  );
};

export default observer(TextInput);
