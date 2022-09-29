import React, { useState, useEffect } from "react";
import "./Userlist.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataTable, Button } from "joseph-ui-kit";
import convertUserlist from "../../utils/convertUserlist";

const columns = [
  { field: "id", headerName: "NO", width: "100px" },
  { field: "enrolled", headerName: "생성일", width: "200px" },
  { field: "userId", headerName: "아이디", width: "100px" },
];

const Userlist = () => {
  const [userlist, setUserlist] = useState([]);

  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate("/signin");
  };

  const getUserlist = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/user`)
      .then((res) => setUserlist(res.data.data))
      .catch((err) => console.log(err));
  };

  console.log(userlist);

  useEffect(() => {
    getUserlist();
  }, []);

  return (
    <div className="userlist_container">
      <DataTable
        headerText="생성된 유저명단"
        columns={columns}
        rows={convertUserlist(userlist)}
      />
      <div className="button_wrapper">
        <Button
          name="로그인 페이지로 가기"
          width="200px"
          onClick={goToSignIn}
        />
      </div>
    </div>
  );
};

export default Userlist;
