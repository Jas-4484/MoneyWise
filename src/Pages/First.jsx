import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Button } from "antd";
import { Popover, Steps, Input, Space } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

const First = () => {
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleNextClick = () => {
    console.log("username:", username);
    console.log("name:", name);
    console.log("age:", age);
    console.log("gender:", gender);
    console.log("email:", email);
    console.log("password:", password);
    navigate("/second");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={0}
            progressDot={customDot}
            items={[
              {
                title: "Personal Details",
              },
              {
                title: "Family Background",
              },
              {
                title: "Career Details",
              },
              {
                title: "Expenses",
              },
              {
                title: "Risk Appetite",
              },
              {
                title: "Financial Goals",
              },
              {
                title: "Existing Debts",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-['Jura'] text-center font-bold text-3xl">
          Lets get to know you
        </h1>
        <h1 className="font-['Jura'] text-center">
          Fill out general information
        </h1>
      </div>
      <div className="flex justify-center form py-8">
        <Space direction="vertical" className="formFirst">
          <Space direction="horizontal">
            <Input
              className="username"
              placeholder="Enter your username"
              prefix={
                <UserOutlined
                  style={{
                    color: "rgba(0,0,0,.25)",
                  }}
                />
              }
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className="username"
              placeholder="Enter your Name"
              prefix={
                <UserOutlined
                  style={{
                    color: "rgba(0,0,0,.25)",
                  }}
                />
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Space>
          <Space direction="horizontal">
            <Input
              className="age"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Input
              className="gender"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </Space>
          <Space direction="horizontal">
            <Input
              className="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              placeholder="Input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Space>
        </Space>
      </div>
      <div className="next flex justify-center">
        <Button type="primary" onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </>
  );
};

export default First;
