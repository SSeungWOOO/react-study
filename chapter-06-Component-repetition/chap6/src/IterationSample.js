import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if (inputText) {
      const nextNames = names.concat({ id: nextId, text: inputText });
      setNextId(nextId + 1);
      setNames(nextNames);
      setInputText(""); // Clear the input field after adding the name
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
