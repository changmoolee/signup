import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput, Button } from "joseph-ui-kit";

const SignIn = ({ setIsLogIn }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [warnuserId, setWarnUserId] = useState("");
  const [warnpassword, setWarnPassword] = useState("");

  const navigate = useNavigate();

  const goToUserlist = () => {
    navigate("/userlist");
  };

  const goToMyProfile = () => {
    navigate("/myprofile");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const handleClickButton = async () => {
    if (userId.length === 0) {
      setWarnUserId("아이디를 입력해 주세요.");
    } else if (password.length === 0) {
      setWarnUserId("");
      setWarnPassword("비밀번호를 입력해 주세요.");
    } else {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/user/userLogIn`, {
          id: userId,
          password: password,
        })
        .then(() => {
          alert("정상적으로 로그인이 되었습니다.");
          goToMyProfile();
          setIsLogIn(true);
        })
        .catch((err) => {
          alert("로그인에 실패하였습니다.");
          console.log(err);
        });
    }
  };

  return (
    <div className="signin_container">
      <h3>로그인</h3>
      <form className="signin_input_container">
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
      </form>
      <div className="signin_buttons_container">
        <Button name="로그인" width="200px" onClick={handleClickButton} />
        <Button
          kind="secondary"
          name="회원가입"
          width="200px"
          onClick={goToSignUp}
        />
        <Button
          kind="tertiary"
          name="유저리스트 페이지로 가기"
          width="200px"
          onClick={goToUserlist}
        />
        <Button
          kind="tertiary"
          name="마이 페이지로 가기"
          width="200px"
          onClick={goToMyProfile}
        />
      </div>
    </div>
  );
};

export default SignIn;
