import React from "react";
import styled from "styled-components";
import banner from "../../pics/footerImg.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  background-image: url(${banner});
  background-color: black;
  height: 260px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1290px;
  margin: 0px auto;
  height: 65%;
  width: 95%;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #f7f7f7;
  color: white;
  padding: 0px 30px;
`;

const Question = styled.p`
  font: 400 24px "Open Sans";
  text-transform: uppercase;
`;
const InnerText = styled.p`
  font: 400 14px "Open Sans";
  text-align: center;
  line-height: 19px;
`;
const InnerButton = styled.div`
  font: 400 18px "Open Sans";
  text-transform: lowercase;
  background: #ecebeb;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: black;
  padding: 18px 15px;
  visibility: hidden;
`;

const MainFooter = () => {
  return (
    <Container>
      <Inner>
        <Question>Остались вопросы?</Question>
        <InnerText>
          Позвоните на контактный номер телефона и наши сотрудники
          <br />
          проконсультируются с вами.
        </InnerText>
        <InnerButton>Заказать онлайн</InnerButton>
      </Inner>
    </Container>
  );
};

export default MainFooter;
