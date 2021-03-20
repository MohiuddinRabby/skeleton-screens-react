import React from "react";
import CustomSkeletonElement from "./CustomSkeletonElement";
// skeleton for title,body text
const CustomSkeletonBody = () => {
  return (
    <div className="custom-skeleton-wrapper">
      <div className="custom-skeleton-body">
        <CustomSkeletonElement type="title" />
        <CustomSkeletonElement type="text" />
        <CustomSkeletonElement type="text" />
        <CustomSkeletonElement type="text" />
      </div>
    </div>
  );
};

export default CustomSkeletonBody;
