import React from "react";
import styled from "styled-components";
import logo from "../../pics/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ROUTES } from "../../constants";

const Wrapper = styled.div`
  background-color: ${(props) => props.back};
`;

const Logo = styled.img`
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  max-width: 1360px;
  margin: 0 auto;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #f7f7f7;
  padding: 14px 10px;
  font: 400 18px "Open Sans";
  &:hover {
    background-color: darkorange;
    border-radius: 5px;
  }
`;

const MenuAnchor = styled(HashLink)`
  text-decoration: none;
  color: #f7f7f7;
  padding: 14px 10px;
  font: 400 18px "Open Sans";
  &:hover {
    background-color: darkorange;
    border-radius: 5px;
  }
`;

const Header = ({ back }) => {
  return (
    <Wrapper back={back}>
      <Container>
        <Logo src={logo} />
        <MenuItem to={ROUTES.MAIN}>
          <a>Главная</a>
        </MenuItem>
        <MenuItem to={ROUTES.SERVICES}>
          <a>Наши услуги </a>
        </MenuItem>
        <MenuItem to={ROUTES.TECHNICS}>
          <a>Техника</a>
        </MenuItem>
        <MenuItem to={ROUTES.PROJECTS}>
          <a>Наши проекты</a>
        </MenuItem>
        <MenuAnchor to={ROUTES.MAIN + "#about"}>
          <a>О компании</a>
        </MenuAnchor>
        <MenuAnchor to={ROUTES.MAIN + "#contacts"}>
          <a>Контакты</a>
        </MenuAnchor>
      </Container>
    </Wrapper>
  );
};

export default Header;
