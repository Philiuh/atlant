import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";
import arrowLeft from "../../../pics/arrowLeft.png";
import arrowRight from "../../../pics/arrowRight.png";
import project1 from "../../../pics/projectPic1.png";
import project2 from "../../../pics/projectPic2.png";
import project3 from "../../../pics/projectPic3.png";
import project4 from "../../../pics/projectPic4.png";
import project5 from "../../../pics/projectPic5.png";
import project6 from "../../../pics/projectPic6.png";
import backImage from "../../../pics/carouselBackground.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background: url(${backImage});
`;

const Inner = styled.div`
  width: 1400px;
  padding: 60px 0px 160px;
`;

const Title = styled.h2`
  font: 400 36px "Open Sans";
  color: #ffffff;
  text-align: center;
  color: white;
  padding-top: 100px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.img`
  box-shadow: -16px 22px 25px 10px rgba(0, 0, 0, 0.25);
`;

const MainProjects = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Container>
      <Title>Наши проекты</Title>
      <Inner>
        <ItemsCarousel
          requestToChangeActive={
            activeItemIndex === 6 || activeItemIndex === -6
              ? setActiveItemIndex(0)
              : setActiveItemIndex
          }
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={100}
          infiniteLoop={true}
          leftChevron={<img src={arrowLeft} alt="" />}
          rightChevron={<img src={arrowRight} alt="" />}
          outsideChevron
          chevronWidth={40}
          isLastScroll={true}
        >
          <Item>
            <a href={project1}>
              <ItemImage
                src={project1}
                style={{
                  width:
                    activeItemIndex === 5 || activeItemIndex === -1
                      ? "500px"
                      : "300px",
                  height:
                    activeItemIndex === 5 || activeItemIndex === -1
                      ? "400px"
                      : "220px",
                  marginTop:
                    activeItemIndex !== 5 && activeItemIndex !== -1
                      ? "100px"
                      : "0px",
                  marginBottom:
                    activeItemIndex === 5 || activeItemIndex === -1
                      ? "50px"
                      : "0px",
                }}
              />
            </a>
          </Item>
          <Item>
            <a href={project2}>
              <ItemImage
                src={project2}
                style={{
                  width: activeItemIndex === 0 ? "500px" : "300px",
                  height: activeItemIndex === 0 ? "400px" : "220px",
                  marginTop: activeItemIndex !== 0 ? "100px" : "0px",
                  marginBottom: activeItemIndex === 0 ? "50px" : "0px",
                }}
              />
            </a>
          </Item>
          <Item>
            <a href={project3}>
              <ItemImage
                src={project3}
                style={{
                  width:
                    activeItemIndex === 1 || activeItemIndex === -5
                      ? "500px"
                      : "300px",
                  height:
                    activeItemIndex === 1 || activeItemIndex === -5
                      ? "400px"
                      : "220px",
                  marginTop:
                    activeItemIndex !== 1 && activeItemIndex !== -5
                      ? "100px"
                      : "0px",
                  marginBottom:
                    activeItemIndex === 1 || activeItemIndex === -5
                      ? "50px"
                      : "0px",
                }}
              />
            </a>
          </Item>
          <Item>
            <a href={project4}>
              <ItemImage
                src={project4}
                style={{
                  width:
                    activeItemIndex === 2 || activeItemIndex === -4
                      ? "500px"
                      : "300px",
                  height:
                    activeItemIndex === 2 || activeItemIndex === -4
                      ? "400px"
                      : "220px",
                  marginTop:
                    activeItemIndex !== 2 && activeItemIndex !== -4
                      ? "100px"
                      : "0px",
                  marginBottom:
                    activeItemIndex === 2 || activeItemIndex === -4
                      ? "50px"
                      : "0px",
                }}
              />
            </a>
          </Item>
          <Item>
            <a href={project5}>
              <ItemImage
                src={project5}
                style={{
                  width:
                    activeItemIndex === 3 || activeItemIndex === -3
                      ? "500px"
                      : "300px",
                  height:
                    activeItemIndex === 3 || activeItemIndex === -3
                      ? "400px"
                      : "220px",
                  marginTop:
                    activeItemIndex !== 3 && activeItemIndex !== -3
                      ? "100px"
                      : "0px",
                  marginBottom:
                    activeItemIndex === 3 || activeItemIndex === -3
                      ? "50px"
                      : "0px",
                }}
              />
            </a>
          </Item>

          <Item>
            <a href={project6}>
              <ItemImage
                src={project6}
                style={{
                  width:
                    activeItemIndex === 4 || activeItemIndex === -2
                      ? "500px"
                      : "300px",
                  height:
                    activeItemIndex === 4 || activeItemIndex === -2
                      ? "400px"
                      : "220px",
                  marginTop:
                    activeItemIndex !== 4 && activeItemIndex !== -2
                      ? "100px"
                      : "0px",
                  marginBottom:
                    activeItemIndex === 4 || activeItemIndex === -2
                      ? "50px"
                      : "0px",
                }}
              />
            </a>
          </Item>
        </ItemsCarousel>
      </Inner>
    </Container>
  );
};

export default MainProjects;
