import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Fifth = () => {
  const [currentLoans, setCurrentLoans] = useState("");
  const [creditCardDebt, setCreditCardDebt] = useState("");
  const [otherObligations, setOtherObligations] = useState("");

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
    console.log("currentLoans:", currentLoans);
    console.log("creditCardDebt:", creditCardDebt);
    console.log("otherObligations:", otherObligations);
    navigate("/sixth");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={4}
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
            className="loans"
            placeholder="Current Loans"
            value={currentLoans}
            onChange={(e) => setCurrentLoans(e.target.value)}
          />
          <Input
            className="debt"
            placeholder="Credit Card Debt"
            value={creditCardDebt}
            onChange={(e) => setCreditCardDebt(e.target.value)}
          />
          <Input
            className="obligations"
            placeholder="Other Obligations"
            value={otherObligations}
            onChange={(e) => setOtherObligations(e.target.value)}
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

export default Fifth;