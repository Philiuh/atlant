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
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1410px;
  margin: 0 auto;
`;

const BannerTitle = styled.h1`
  font: 700 96px "Silom";
  color: #ffffff;
  text-align: left;
  line-height: 75px;
  padding-bottom: 38px;
`;

const BannerText = styled.h2`
  font: 400 24px "Open Sans";
  color: #ffffff;
  max-width: 700px;
  line-height: 45px;
  padding-bottom: 200px;
  text-align: center;
`;

const MainBanner = () => {
  return (
    <Banner>
      <Header />
      <BannerContainer>
          <BannerTitle>Атлант - ИМК</BannerTitle>
          <BannerText>
            Атлант – инженерно-монтажная компания. Предоставляет услуги по
            проектированию в области монтажа нестандартных грузов. Комплексные
            работы по монтажу, перемещению, погрузке и выгрузке
            крупногабаритного и крупнотоннажного оборудования.
          </BannerText>
      </BannerContainer>
    </Banner>
  );
};

export default MainBanner;
