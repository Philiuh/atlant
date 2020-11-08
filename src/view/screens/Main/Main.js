import React from "react";
import MainBanner from "./MainBanner";
import MainServices from "./MainServices";
import MainAbout from "./MainAbout";
import MainProjects from "./MainProjects";
import MainContacts from "./MainContacts";

const Main = () => {
  return (
    <>
      <MainBanner />
      <MainServices />
      <MainProjects />
      <MainAbout />
      <MainContacts />
    </>
  );
};

export default Main;
