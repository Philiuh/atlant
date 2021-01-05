import React from "react";
import styled from "styled-components";
import banner from "../../../pics/banner.png";
import Header from "../../screens/Header";

const Banner = styled.div`
  background: url(${banner}) no-repeat;
  background-color: black;
  height: 900px;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1410px;
  margin: 110px auto 0;
`;

const BannerInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerTitle = styled.h1`
  font: 700 80px "Open Sans";
  padding-left: 30px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: left;
  line-height: 75px;
`;

const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  color: white;
  font: 400 22px "Open Sans";
  padding: 40px 19px 0px;
  line-height: 30px;
  margin-right: 25px;
`;

const BannerInfoButton = styled.div`
  color: black;
  background-color: #fcd94b;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  padding: 15px 27px;
  margin: 100px 0px 30px;
  visibility: hidden;
`;

const Number = styled.a`
  text-decoration-color: orange;
  color: orange;
`;

const MainBanner = () => {
  return (
    <Banner>
      <Header />
      <BannerContainer>
        <BannerInner>
          <BannerTitle>
            Строительная
            <br />
            компания
            <br />
            Атлант-ИМК
          </BannerTitle>
        </BannerInner>
        <BannerInfo>
          <p>
            г.Москва
            <br />
            тел.<Number href="tel:+79153121312">+7(915)312-13-12</Number>
            <br />
            г. Краснодар
            <br />
            тел.<Number href="tel:+79185431698">+7(918)543-16-98</Number>
          </p>
          <BannerInfoButton>заказать онлайн</BannerInfoButton>
        </BannerInfo>
      </BannerContainer>
    </Banner>
  );
};

export default MainBanner;
