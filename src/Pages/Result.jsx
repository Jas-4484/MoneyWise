import React from "react";
import Navbar from "../Components/Navbar";
import { Select, Space } from "antd";
import { useState } from "react";
import English from "../Components/English";
import Hindi from "../Components/Hindi";

const result = () => {
const [value,setValue]=useState("English");

  const handleChange = (value) => {
    setValue(value);
    console.log(`selected ${value}`);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center py-6">
        <div className="flex justify-between w-11/12">
          <div>
            <h1 className="font-['Jura'] text-3xl font-bold">Mr Aman</h1>
            <h1 className="font-['Jura'] text-l">
              Here is your financial report
            </h1>
          </div>
          <div>
            <Space wrap>
              <Select
                defaultValue="English"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "English",
                    label: "English",
                  },
                  {
                    value: "Hindi",
                    label: "Hindi",
                  },
                  {
                    value: "Punjabi",
                    label: "Punjabi",
                  },
                ]}
              />
            </Space>
          </div>
        </div>
      </div>
      {value==="English" && <English />}
      {value==="Hindi" && <Hindi />}
      <div className="py-5"></div>
    </React.Fragment>
  );
};

export default result;
