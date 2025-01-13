import React from "react";
import PropTypes from "prop-types";
const MyComponent = ({ name, children, favoriteNumber }) => {
  //배열비구조화할당
  return (
    <div>
      안녕하세요! 제 이름은 {name}입니다. 저친구이름은{children}
      입니다.
      <br />
      제가좋아하는숫자는 {favoriteNumber}
    </div>
  );
};

console.log(process.env.NODE_ENV);

MyComponent.defaultProps = { name: "기본이름" };

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number,
};

// MyComponent.defaultProps = {
//   name: "기본이름",
// };

export default MyComponent;
