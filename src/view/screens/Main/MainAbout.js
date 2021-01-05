import React from "react";
import styled from "styled-components";
import banner from "../../../pics/aboutImg.png";

const Container = styled.div`
  display: flex;
  max-width: 1410px;
  margin: 100px auto 0;
`;

const Inner = styled.div`
  margin-left: 70px;
  width: 50%;
`;

const Title = styled.h2`
  font: 400 36px "Open Sans";
  color: black;
  text-align: left;
`;

const InnerText = styled.p`
  font: 400 18px "Open Sans";
  color: black;
  line-height: 24px;
  padding-top: 20px;
  max-width: 450px;
`;

const Banner = styled.div`
  background-image: url(${(props) => props.image});
  background-color: black;
  width: 50%;
  height: 488px;
  margin-left: 30px;
`;

const MainAbout = () => {
  return (
    <Container>
      <Banner image={banner} />
      <Inner id="about">
        <Title>О компании</Title>
        <InnerText>
          Компания АТЛАНТ предоставляет услуги аренды мобильных кранов Liebherr,
          Demag, Krupp грузоподъемностью от 50 до 350 тонн.
        </InnerText>
        <InnerText>
          Мы работаем на рынке оказания услуг достаточно давно, и за это время
          собрали первоклассную компанду специалистов, создали обширную
          материально-техническую базу и накопили богатый опыт в проведении
          работ.
        </InnerText>
        <InnerText>
          Современная техника и наши специалисты позволяют решать задачи любой
          сложности и масштабов.
        </InnerText>
        <InnerText>
          Мы можем назвать себя экспертами среди профессионалов в работе с
          крупногабаритными и тяжеловесным грузом.
        </InnerText>
      </Inner>
    </Container>
  );
};

export default MainAbout;
