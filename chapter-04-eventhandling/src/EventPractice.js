import React, { useState } from "react";

const EventPractice = () => {
  const [state, setState] = useState({
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    alert(`${state.message}: ${state.message}`);
    setState({
      username: "",
      message: "",
    });
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={state.message}
        onChange={handleChange}
        onKeyPress={handleKeypress}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={state.username}
        onChange={handleChange}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
