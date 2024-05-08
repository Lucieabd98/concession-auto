import "../LandingPage/LandingPage.css";
import PageTitle from "../PageTitle/PageTitle";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import Forms from "../Forms/Forms";

import { useState } from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container">
        <PageTitle />
        <SecondaryTitle />
        <Forms />
      </div>
    </div>
  );
};

export default LandingPage;
