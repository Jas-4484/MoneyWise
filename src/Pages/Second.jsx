import React from "react";
import Navbar from "../Components/Navbar";
import { Popover, Steps } from "antd";

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
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" flex justify-center items-center p-8">
        <div className="progress flex justify-center w-3/4">
          <Steps
            current={2}
            progressDot={customDot}
            items={[
              {
                title: "Finished",
              },
              {
                title: "In Progress",
              },
              {
                title: "Waiting",
              },
              {
                title: "Waiting",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-['Jura'] text-center font-bold text-3xl">Lets get to know you</h1>
        <h1 className="font-['Jura'] text-center">Fill out general information</h1>
      </div>
      <div className="form">

      </div>
    </>
  );
};

export default First;
