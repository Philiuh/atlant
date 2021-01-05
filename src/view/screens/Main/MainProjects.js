import React from "react";
import styled from "styled-components";
import project1 from "../../../pics/project1.png";
import project2 from "../../../pics/project2.png";
import project3 from "../../../pics/project3.png";
import project4 from "../../../pics/project4.png";
import project5 from "../../../pics/project5.png";
import project6 from "../../../pics/project6.png";
import projectLine from "../../../pics/projectLine.png";

const Projects = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  font: 400 36px "Open Sans";
  text-align: center;
  margin-bottom: 70px;
`;

const ProjectsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font: 400 18px "Open Sans";
  max-width: 1410px;
  margin: 0 auto;
`;

const Project = styled.li`
  display: flex;
  flex-grow: 1;
  flex-basis:450px;
  font: 400 24px "Open Sans";
  background-image: url(${(props) => props.image});
  height: 450px;
  max-width: 450px;
  background-color: black;
  color: white;
`;

const ProjectInner = styled.div`
  padding: 55px 0px 0px 55px;
`;

const ProjectLine = styled.img`
  margin-bottom: 8px;
`;

const MainProjects = () => {
  return (
    <Projects>
      <Title>Фото наших работ</Title>
      <ProjectsList>
        <Project image={project1}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
        <Project image={project2}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
        <Project image={project3}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
        <Project image={project4}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
        <Project image={project5}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
        <Project image={project6}>
          <ProjectInner>
            <ProjectLine src={projectLine} />
          </ProjectInner>
        </Project>
      </ProjectsList>
    </Projects>
  );
};

export default MainProjects;
