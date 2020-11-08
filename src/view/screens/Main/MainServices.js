import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";
import projectsBanner from "../../../pics/projectsBanner.png";
import mobileCranesBanner from "../../../pics/mobileCranesBanner.png";
import complexBanner from "../../../pics/complexBanner.png";
import cargosBanner from "../../../pics/cargosBanner.png";
import projectsIcon from "../../../pics/projectsIcon.png";
import mobileCranesIcon from "../../../pics/mobileCranesIcon.png";
import complexIcon from "../../../pics/complexIcon.png";
import cargosIcon from "../../../pics/cargosIcon.png";

const Services = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  font: 400 36px "Open Sans";
  text-align: center;
  margin-bottom: 70px;
`;

const ServicesList = styled.ul`
  display: flex;
  justify-content: center;
  font: 400 18px "Open Sans";
  text-transform: lowercase;
  max-width: 1410px;
  margin: 0 auto;
`;

const ServicesItem = styled.li`
  display: inline-block;
  background-image: url(${(props) => props.image});
  background-size: 100%;
  background-color: black;
  margin: 0px auto;
  max-width: 300px;
  max-height: 480px;
`;

const ServiceItemInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 250px;
  margin: 45px 37px 0px 37px;
  padding: 0px 10px 10px 20px;
  border: 2px solid #ffffff;
  color: #ecebeb;
`;

const ServiceItemIcon = styled.img`
  padding: 50px 55px 35px 55px;
`;

const ServiceItemButton = styled.div`
  text-align: center;
  background-color: #ecebeb;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 18px 40px;
  margin: 30px 37px;
`;

const Linking = styled(Link)`
  text-decoration: none;
  color: black;
`;

const MainServices = () => {
  return (
    <Services>
      <Title>Наши услуги</Title>
      <ServicesList>
        <ServicesItem image={projectsBanner}>
          <ServiceItemInner>
            <ServiceItemIcon src={projectsIcon} />
            <p>Проектирование</p>
          </ServiceItemInner>
          <Linking to={ROUTES.SERVICES + ROUTES.PROJECTS}>
            <ServiceItemButton>подробнее</ServiceItemButton>
          </Linking>
        </ServicesItem>
        <ServicesItem image={mobileCranesBanner}>
          <ServiceItemInner>
            <ServiceItemIcon src={mobileCranesIcon} />
            <p>
              Мобильные
              <br />
              краны
            </p>
          </ServiceItemInner>
          <Linking to={ROUTES.SERVICES + ROUTES.CRANES}>
            <ServiceItemButton>подробнее</ServiceItemButton>
          </Linking>
        </ServicesItem>
        <ServicesItem image={complexBanner}>
          <ServiceItemInner>
            <ServiceItemIcon src={complexIcon} />
            <p>
              Комплексные
              <br />
              работы
            </p>
          </ServiceItemInner>
          <Linking to={ROUTES.SERVICES + ROUTES.COMPLEX}>
            <ServiceItemButton>подробнее</ServiceItemButton>
          </Linking>
        </ServicesItem>
        <ServicesItem image={cargosBanner}>
          <ServiceItemInner>
            <ServiceItemIcon src={cargosIcon} />
            <p>Грузоперевозки</p>
          </ServiceItemInner>
          <Linking to={ROUTES.SERVICES + ROUTES.CARGOS}>
            <ServiceItemButton>подробнее</ServiceItemButton>
          </Linking>
        </ServicesItem>
      </ServicesList>
    </Services>
  );
};

export default MainServices;
