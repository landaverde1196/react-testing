import React from "react";

//const withCLass = props => (
//  <div className={props.classes}>{props.children}</div>
//);

const withCLass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withCLass;
