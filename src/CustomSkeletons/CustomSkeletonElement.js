import React from "react";

const CustomSkeletonElement = ({ type }) => {
  const classes = `customSkeleton ${type}`;
  return <div className={classes}></div>;
};

export default CustomSkeletonElement;
