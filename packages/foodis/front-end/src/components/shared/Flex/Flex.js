import React from "react";
import styles from "./Flex.module.scss";
import classNames from "classnames";

const Flex = ({
  className,
  children,
  centered,
  centeredVertically = centered,
  centeredHorizontally = centered,
  alignTop,
  alignBottom,
  alignBaseline,
  alignRight,
  spaceBetween,
  wrapContent,
  pileVertically,
  pileVerticallyTo,
  occupyVerticalSpace,
  stretchToSameHeight,
  reverseDirection,
  ...props
}) => {
  const classNameParameters = [
    styles.flex,
    {
      [styles.flex__centeredVertically]: centeredVertically,
      [styles.flex__centeredHorizontally]: centeredHorizontally,
      [styles.flex__alignTop]: alignTop,
      [styles.flex__alignBottom]: alignBottom,
      [styles.flex__alignBaseline]: alignBaseline,
      [styles.flex__alignRight]: alignRight,
      [styles.flex__spaceBetween]: spaceBetween,
      [styles.flex__wrapContent]: wrapContent,
      [styles.flex__stretchToSameHeight]: stretchToSameHeight,
      [styles.flex__pileVerticallyToXsScreen]: pileVerticallyTo === "xs",
      [styles.flex__pileVerticallyToSmScreen]: pileVerticallyTo === "sm",
      [styles.flex__pileVerticallyToMdScreen]: pileVerticallyTo === "md",
      [styles.flex__pileVerticallyToLgScreen]: pileVerticallyTo === "lg",
      [styles.flex__pileVertically]: pileVertically,
      [styles.flex__occupyVerticalSpace]: occupyVerticalSpace,
      [styles.flex__reverseDirection]: reverseDirection,
    },
    className,
  ];

  return (
    <div className={classNames(classNameParameters)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
