import React from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";
const Sixth = () => {
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
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
        <Steps
            current={5}
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
                title:"Existing Debts",
              }
              ,
              {
                title: "Risk Appetite",
              },
              {
                title:"Financial Goals",
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
        <Space direction="vertical">
        <Input className="risk" placeholder="Risk Level (on a scale of 1-10)" />
        </Space>
      </div>
    </>
  );
};

export default Sixth;