import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Fourth = () => {
  const [fixedExpenditure, setFixedExpenditure] = useState("");
  const [variableExpenditure, setVariableExpenditure] = useState("");
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

  const handleNextClick = () => {
    console.log("Fixed Expenditure:", fixedExpenditure);
    console.log("Variable Expenditure:", variableExpenditure);
    navigate("/fifth");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={3}
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
            className="fix"
            placeholder="Fixed Expenditure"
            value={fixedExpenditure}
            onChange={(e) => setFixedExpenditure(e.target.value)}
          />
          <Input
            className="variable"
            placeholder="Variable Expenditure"
            value={variableExpenditure}
            onChange={(e) => setVariableExpenditure(e.target.value)}
          />
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

export default Fourth;