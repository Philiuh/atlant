import React from "react";
import styled from "styled-components";
import banner from "../../../pics/contactsImg.png";

const Container = styled.div`
  display: flex;
  max-width: 1410px;
  margin: 100px auto 0;
`;

const Inner = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Title = styled.h2`
  font: 400 36px "Open Sans";
  color: black;
  text-align: left;
`;

const MiniTitle = styled.p`
  font: 400 24px "Open Sans";
  text-align: left;
  margin-top: 15px;
`;

const InnerText = styled.p`
  font: 400 18px "Open Sans";
  color: black;
  line-height: 25px;
  padding-top: 20px;
  max-width: 450px;
`;

const Phone = styled.a`
  color: orange;
  text-decoration: underline;
`;

const Banner = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-color: black;
  width: 50%;
  height: 480px;
  margin-right: 30px;
`;

const MainContacts = () => {
  return (
    <Container>
      <Inner id="contacts">
        <Title>Контакты</Title>
        <InnerText>
          г.Москва
          <br />
          тел.<Phone>+7 (915) 312-13-12</Phone>
          <br />
          г.Краснодар
          <br />
          тел.<Phone>+7 (918) 543-16-98</Phone>
          <MiniTitle>Адрес центрального офиса</MiniTitle>
          г.Москва
          <br />
          Гжельский переулок, 3
        </InnerText>
      </Inner>
      <Banner image={banner} />
    </Container>
  );
};

export default MainContacts;
