import React from "react";
import styled from "styled-components";
import Header from "./Header";
import projectsImg from "../../pics/projectsImg.png";
import mobileCranesImg from "../../pics/mobileCranesImg.png";
import complexImg from "../../pics/complexImg.png";
import cargosImg from "../../pics/cargosImg.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 50px auto 0;
`;

const Service = styled.div`
  display: flex;
  padding-bottom: 25px;
`;

const Title = styled.h1`
  font: 400 36px "Open Sans";
  text-align: center;
  padding: 0 0 50px;
`;

const ServiceImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.back});
  background-color: black;
  color: white;
  font: 700 36px "Open Sans";
  text-transform: lowercase;
  padding: 100px 50px;
  height: 50px;
  width: 340px;
  text-align: center;
`;

const ServicesText = styled.p`
  font: 400 18px "Open Sans";
  text-align: left;
  margin-left: 20px;
  line-height: 24px;
  max-width: 860px;
`;

const Linking = styled(Link)`
  text-decoration: none;
`;

const Services = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>Наши услуги</Title>
        <Service>
          <Linking to={ROUTES.SERVICES + ROUTES.PROJECTS}>
            <ServiceImage back={projectsImg}>Проектирование</ServiceImage>
          </Linking>
          <ServicesText>
            Специалисты Атлант имеют большой опыт и профильное образование.
            Разработка ППРк - это распланирование мероприятия по безопасной
            работе спецтехники на объекте. Мы гарантируем сохранность грузов и
            безопасность персонала на объекте при проведении работ в четком
            соответствии с разработанным ППРк нашими специалистами.
          </ServicesText>
        </Service>
        <Service>
          <Linking to={ROUTES.SERVICES + ROUTES.CRANES}>
            <ServiceImage back={mobileCranesImg}>
              Мобильные
              <br />
              краны
            </ServiceImage>
          </Linking>
          <ServicesText>
            В компании Атлант представлены мобильные краны ведущих
            производителей: Liebherr, Demag, Grove, Галичанин, грузоподъемностью
            от 25 до 500т.
          </ServicesText>
        </Service>
        <Service>
          <Linking to={ROUTES.SERVICES + ROUTES.COMPLEX}>
            <ServiceImage back={complexImg}>
              Комплесные
              <br />
              работы
            </ServiceImage>
          </Linking>
          <ServicesText>
            Атлант усиленно реализуют комплекснче работы по монтажу, демонтажу и
            транспонтированию крупногабаритного и тяжеловесного оборудования.
            Опыт и профессионализм позволяет расчитать оптимальное применение
            техники без установленным сроком срывов и простоев.
          </ServicesText>
        </Service>
        <Service>
          <Linking to={ROUTES.SERVICES + ROUTES.CARGOS}>
            <ServiceImage back={cargosImg}>Грузоперевозки</ServiceImage>
          </Linking>
          <ServicesText>
            Компания Атлант осуществляет перевозку тяжеловесного негабаритного
            груза по всей России, странам СНГ и других стран. Мы производим
            перевозку оборудования массой до 1000 тонн. Выполнение работ по
            перевозке производится с применением тягачей с низкорамными
            полуприцепами и прицепами европейских производителей Scheuerle,
            ES-GE, Noteboom. При работе по транспортировке грузов свыше 100 тон
            применяются самоходные модульные прицепы Sceuerle SPMT. <br />
            Мы ценим Ваше время и гарантируем выполнение работ точно в срок.
          </ServicesText>
        </Service>
      </Container>
    </>
  );
};

export default Services;
