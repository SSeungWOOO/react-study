import React, { useState } from "react";

const IterationSample2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "이승우" },
    { id: 2, text: "박상현" },
    { id: 3, text: "김진교" },
    { id: 4, text: "김가원" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if (!inputText.trim()) {
      alert("값을 입력해주세요!");
      return;
    }
    const nextNames = names.concat({ id: nextId, text: inputText.trim() });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return (
    <div style={{ padding: "20px" }}>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="이름을 입력하세요"
        style={{ marginRight: "10px" }}
      />
      <button onClick={onClick}>추가</button>
      <ul style={{ marginTop: "20px" }}>{nameList}</ul>
    </div>
  );
};

export default IterationSample2;
