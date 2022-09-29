import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput, Button } from "joseph-ui-kit";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [configPassword, setConfigPassword] = useState("");

  const [warnuserId, setWarnUserId] = useState("");
  const [warnpassword, setWarnPassword] = useState("");
  const [warnconfigPassword, setWarnConfigPassword] = useState("");

  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
  };

  const handleClickButton = async () => {
    if (userId.length < 4) {
      setWarnUserId("아이디는 4자 이상이어야 합니다.");
    } else if (password.length < 6) {
      setWarnUserId("");
      setWarnPassword("비밀번호는 6자 이상이어야 합니다.");
    } else if (password !== configPassword) {
      setWarnUserId("");
      setWarnPassword("");
      setWarnConfigPassword("비밀번호가 일치하지 않습니다.");
    } else {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/user/userRegister`, {
          id: userId,
          password: password,
        })
        .then(() => {
          alert("정상적으로 회원가입이 되었습니다.");
          goToSignIn();
        })
        .catch((err) => {
          alert("회원가입에 실패하였습니다.");
          console.log(err);
        });
    }
  };

  return (
    <div className="signup_container">
      <h3>회원가입</h3>
      <form className="signup_input_container">
        <TextInput
          id="아이디"
          label="아이디"
          warn={warnuserId}
          onChange={(data) => setUserId(data.value)}
          placeholder="아이디를 입력하세요."
        />
        <TextInput
          id="비밀번호"
          label="비밀번호"
          warn={warnpassword}
          type="password"
          onChange={(data) => setPassword(data.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <TextInput
          id="비밀번호 확인"
          label="비밀번호 확인"
          warn={warnconfigPassword}
          type="password"
          onChange={(data) => setConfigPassword(data.value)}
          placeholder="다시 한번 비밀번호를 입력하세요."
        />
      </form>
      <div className="signup_buttons_container">
        <Button name="회원 가입" width="200px" onClick={handleClickButton} />
        <Button
          kind="secondary"
          name="로그인 페이지로 가기"
          width="200px"
          onClick={goToSignIn}
        />
      </div>
    </div>
  );
};

export default SignUp;
