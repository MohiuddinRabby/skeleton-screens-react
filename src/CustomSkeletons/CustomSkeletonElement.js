import React from "react";
import "./CustomSkeleton.css";
const CustomSkeletonElement = ({ type }) => {
  const classes = `customSkeleton ${type}`;
  return <div className={classes}></div>;
};

export default CustomSkeletonElement;
