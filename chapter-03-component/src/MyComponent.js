import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name}입니다. 저 친구 이름은 {children}입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// Logging the current environment
console.log(process.env.NODE_ENV);

// Default props
MyComponent.defaultProps = {
  name: "기본이름",
};

// Prop types validation
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, // Ensure favoriteNumber is marked as required if needed
};

export default MyComponent;
