import React, { useState } from "react";

const EventPractice = () => {
  // 상태 관리: form 객체
  const [form, setForm] = useState({ username: "", message: "" });

  // 객체 구조 분해 할당
  const { username, message } = form;

  // onChange 핸들러
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  // onClick 핸들러
  const onClick = () => {
    alert(username + ":" + message);
    setForm({ username: "", message: "" });
  };

  // onKeyPress 핸들러
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력ㄱㄱ"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
