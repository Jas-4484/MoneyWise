import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Sixth = () => {
  const [riskLevel, setRiskLevel] = useState(""); // useState variable for risk level
  const navigate = useNavigate();

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

  const handleNext = () => {
    // Handle next button click
    // You can access the value of riskLevel using the useState variable
    navigate("/seventh");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-8">
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
                title: "Existing Debts",
              },
              {
                title: "Risk Appetite",
              },
              {
                title: "Financial Goals",
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
      <div className="form flex justify-center form py-8">
        <Space direction="vertical">
          <Input
            className="risk"
            placeholder="Risk Level (on a scale of 1-10)"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
          />
        </Space>
      </div>
      <div className="next flex justify-center">
        <Button type="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Sixth;