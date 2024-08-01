import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";
import { Input, Space } from "antd";

const Second = () => {
  const [householdSize, setHouseholdSize] = useState("");
  const [dependents, setDependents] = useState("");
  const [familyIncome, setFamilyIncome] = useState("");

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
    console.log("Household Size:", householdSize);
    console.log("Dependents:", dependents);
    console.log("Family Income:", familyIncome);
    navigate("/third");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={1}
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
            placeholder="Household Size"
            value={householdSize}
            onChange={(e) => setHouseholdSize(e.target.value)}
          />
          <Input
            placeholder="Dependents"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
          />
          <Input
            placeholder="Family Income"
            value={familyIncome}
            onChange={(e) => setFamilyIncome(e.target.value)}
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

export default Second;
