import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Third = () => {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [jobStability, setJobStability] = useState("");
  const [incomeLevel, setIncomeLevel] = useState("");

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
    console.log("employmentStatus:", employmentStatus);
    console.log("jobStability:", jobStability);
    console.log("incomeLevel:", incomeLevel);
    navigate("/fourth");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={2}
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
            className="employment"
            placeholder="Employment Status"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
          />
          <Input
            className="jobStability"
            placeholder="Job Stability"
            value={jobStability}
            onChange={(e) => setJobStability(e.target.value)}
          />
          <Input
            className="incomeLevel"
            placeholder="Income Level"
            value={incomeLevel}
            onChange={(e) => setIncomeLevel(e.target.value)}
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

export default Third;
