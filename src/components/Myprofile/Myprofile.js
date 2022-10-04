import React, { useState, useEffect } from "react";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import { Button } from "joseph-ui-kit";
import { useWithdrawUserMutation } from "../../services/user";

const Myprofile = ({ isLogIn, setIsLogIn }) => {
  const [userId, setUserId] = useState("qweqwe");

  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
  };

  const LogOut = () => {
    setIsLogIn(false);
    goToSignIn();
  };
  const [withdrawUser] = useWithdrawUserMutation();

  const withdrawMembership = async () => {
    withdrawUser(userId)
      .unwrap()
      .then(() => {
        alert("정상적으로 탈퇴되었습니다.");
        goToSignIn();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!isLogIn) {
      alert("잘못된 접근입니다.");
      goToSignIn();
    }
  }, []);

  return (
    <div className="myprofile_container">
      <div className="button_wrapper">
        <Button
          kind="secondary"
          name="로그아웃"
          width="200px"
          onClick={LogOut}
        />
        <Button
          kind="danger"
          name="회원탈퇴"
          width="200px"
          onClick={withdrawMembership}
        />
      </div>
    </div>
  );
};

export default Myprofile;
