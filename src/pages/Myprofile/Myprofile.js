import React, { useState } from "react";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "joseph-ui-kit";

const Myprofile = () => {
  const [userId, setUserId] = useState("zxczxc");

  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
  };

  const withdrawMembership = async () => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/user/userDelete`, {
        data: { id: userId },
      })
      .then(() => {
        alert("정상적으로 탈퇴되었습니다.");
        goToSignIn();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="myprofile_container">
      <div className="button_wrapper">
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
