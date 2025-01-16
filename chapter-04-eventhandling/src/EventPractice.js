import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); // 수정: 괄호 사용
  };

  handleClick = () => {
    alert(this.state.message + ":" + this.state.message);
    this.setState({ username: "", message: "" });
  };

  handleKeypress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onchange={this.handleClick}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
