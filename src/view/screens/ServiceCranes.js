import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 50px auto 0;
`;

const Title = styled.h2`
  font: 400 36px "Open Sans";
  text-align: left;
  text-transform: uppercase;
  margin: 10px 0px;
`;

const Text = styled.p`
  font: 400 18px "Open Sans";
  text-align: left;
  line-height: 36px;
`;

const Item = styled.li`
  font: 400 18px "Open Sans";
  text-align: left;
  line-height: 36px;
  margin: 0 0 5px 45px;
`;

const ServiceCranes = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>АРЕНДУЙТЕ ТЕХНИКУ ДЛЯ ВАШИХ ЦЕЛЕЙ</Title>
        <Text>
          В компании Атлант-инженеринг представлены мобильные краны
          производителей Liebherr, Demag грузоподъемностью от 50 до 350 тонн.
          <br />
          Основные преимущества мобильных кранов:
        </Text>
        <ul>
          <Item>
            способность передвигаться как по дорогам с твердым покрытием, так и
            по бездорожью
          </Item>
          <Item>
            маневренность и компактные размеры позволяют применять краны при
            работе в стесненных условиях промышленных объектов и в условиях
            плотной городской застройки
          </Item>
          <Item>
            возможность передвигаться по дорогам общего пользования со скоростью
            до 80 км/час, при этом нагрузка на одну ось крана не превышает 12
            тонн
          </Item>
          <Item>
            телескопические стрелы позволяют поднимать грузы на высоту более 80
            метров, а применение различных решетчатых удлинителей стрел –¬ до
            145 метров
          </Item>
          <Item>
            краны грузоподъемностью 300 тонн и выше оснащены специальной
            оттяжкой телескопической стрелы, позволяющей увеличить
            грузоподъемность крана до 50%.
          </Item>
        </ul>
      </Container>
    </>
  );
};

export default ServiceCranes;
