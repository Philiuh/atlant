import React from "react";
import Main from "../screens/Main";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../../constants";
// import About from "../screens/About";
import Services from "../screens/Services";
// import Contacts from "../screens/Contacts";
import Technics from "../screens/Technics";
import styled from 'styled-components'
import Footer from '../screens/Footer'
import ServiceProjects from "../screens/ServiceProjects";
import ServiceCranes from "../screens/ServiceCranes";
import ServiceCargos from "../screens/ServiceCargos";
import ServiceComplex from "../screens/ServiceComplex";
import Projects from "../screens/Projects";

const Container = styled.div`
  background-color: #F7F7F7;
`

const Root = () => {
  return (
    <Container>
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Main} />
        {/* <Route path={ROUTES.ABOUT} component={} /> */}
        <Route exact path={ROUTES.SERVICES} component={Services} />
        {/* <Route path={ROUTES.CONTACTS} component={} /> */}
        <Route path={ROUTES.PROJECTS} component={Projects} />
        <Route path={ROUTES.TECHNICS} component={Technics} />
        <Route path={ROUTES.SERVICES + ROUTES.PROJECTS} component={ServiceProjects} />
        <Route path={ROUTES.SERVICES + ROUTES.CRANES} component={ServiceCranes} />
        <Route path={ROUTES.SERVICES + ROUTES.CARGOS} component={ServiceCargos} />
        <Route path={ROUTES.SERVICES + ROUTES.COMPLEX} component={ServiceComplex} />
      </Switch>
      <Footer/>
    </Container>
  );
};

export default Root;
