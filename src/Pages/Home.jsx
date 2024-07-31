import React from "react";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [size, setSize] = useState("large");
  const navigate = useNavigate();

  return (
    <div className="bg flex-col h-screen justify-between ">
      <Navbar type="0"/>
      <div className="body h-[90vh] flex items-center justify-center">
        <div className="sub h-1/2 flex items-center justify-center gap-10">
          <div className="content flex flex-col gap-8">
            <h1 className="font-['Jura'] text-6xl font-bold text-[#003366]">MoneyWise</h1>
            <h2 className="font-['Jura']">Your Path to Smarter Financial Decisions</h2>
            <div className="btns flex gap-6">
              <Button
                type="primary"
                shape="round"
                size={size}
                className="font-bold"
                onClick={() => navigate('/first')}
              >
                Get Started
              </Button>
              <Button
                type="default"
                shape="round"
                size={size}
                className="font-bold"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="logo">
            <img src="illus.png" className="h-96"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
