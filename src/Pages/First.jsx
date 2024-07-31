import React from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps, Input, Space } from "antd";
import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
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
  const [passwordVisible, setPasswordVisible] = React.useState(false);
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
                title:"Financial Goals",
              },
              {
                title:"Existing Debts",
              }
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-['Jura'] text-center font-bold text-3xl">Lets get to know you</h1>
        <h1 className="font-['Jura'] text-center">Fill out general information</h1>
      </div>
      <div className="form">
      <Space direction="vertical" className="formFirst">
        <Space direction="horizontal">
          <Input className="username"
            placeholder="Enter your username"
            prefix={
              <UserOutlined
                style={{
                  color: 'rgba(0,0,0,.25)',
                }}
              />
            }
            // suffix={
            //   <Tooltip title="Extra information">
            //     <InfoCircleOutlined
            //       style={{
            //         color: 'rgba(0,0,0,.45)',
            //       }}
            //     />
            //   </Tooltip>
            // }
          />
          <Input className="username"
            placeholder="Enter your Name"
            prefix={
              <UserOutlined
                style={{
                  color: 'rgba(0,0,0,.25)',
                }}
              />
            }
            // suffix={
            //   <Tooltip title="Extra information">
            //     <InfoCircleOutlined
            //       style={{
            //         color: 'rgba(0,0,0,.45)',
            //       }}
            //     />
            //   </Tooltip>
            // }
          /> 
        </Space>
        <Space direction="horizontal">
          <Input className="age" placeholder="Enter your age" />
          <Input className="gender" placeholder="Enter your gender" />
        </Space>
        <Space direction="horizontal">
          <Input className="email" placeholder="Enter your email" />
          <Input.Password
          placeholder="Input password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Space>
        
        
        
      </Space>
      </div>
      
    </>
  );
};

export default First;
