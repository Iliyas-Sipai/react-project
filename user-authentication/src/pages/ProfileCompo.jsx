import axios from "axios";
import React, { use, useState,} from "react";
import { Navigate, useNavigate } from "react-router";


const ProfileCompo = () => {
  const [userdata, setUserData] = useState("");
  const navigate = useNavigate();
  
  

  const getProfile = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    };
    axios
      .get(" https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setUserData(res.data);
        console.log("profile are geted", res);
      })
      .catch((err) => {
        console.log("profile are not geted");
      });
  };

  const hanleLogout = () => {
    setUserData();
    localStorage.removeItem("token");
    alert("logout are complted please login");
    navigate("/login")
    
  };
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="h4 text-primary" style={{marginRight:'100px'}}>👤 Profile Page</p>
          <div>
            <button className="btn btn-dark me-4" onClick={getProfile}>
              Get Profile
            </button>
            <button className="btn btn-danger" onClick={hanleLogout}>
              Log Out
            </button>
          </div>
        </div>
        {userdata && (
          <div className="card p-4 shadow mb-5">
            <h5 className="mb-3">👨‍💼 User Details</h5>
            <p>
              <strong>Name:</strong> {userdata?.name}
            </p>
            <p>
              <strong>Email:</strong> {userdata?.email}
            </p>
            <p>
              <strong>Password:</strong> {userdata?.password}
            </p>
            <p>
              <strong>Role:</strong> {userdata?.role}
            </p>
            <img
              src={userdata?.avatar}
              alt="User"
              className="img-fluid rounded shadow mt-2"
              style={{ maxWidth: "200px" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileCompo;
