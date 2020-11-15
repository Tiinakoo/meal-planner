import React from "react";
import Button from "../../private/Button/Button";
import BodyText from "../BodyText/BodyText";

const PrimaryButton = ({ onClick, size, enabled, children, ...props }) => (
  <Button
    onClick={onClick}
    variant="primary"
    size={size}
    enabled={enabled}
    {...props}
  >
    <BodyText font="primary" size="md">
      {children}
    </BodyText>
  </Button>
);

export default PrimaryButton;
