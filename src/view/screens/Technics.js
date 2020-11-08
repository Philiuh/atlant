import React from "react";
import styled from "styled-components";
import Header from "./Header";
import crane1 from "../../pics/crane1.png";
import crane2 from "../../pics/crane2.png";
import crane3 from "../../pics/crane3.png";
import crane4 from "../../pics/crane4.png";
import crane5 from "../../pics/crane5.png";
import crane6 from "../../pics/crane6.png";
import crane7 from "../../pics/crane7.png";
import crane8 from "../../pics/crane8.png";
import demag50 from "../../passport/demag50.pdf";
import demag55 from "../../passport/demag55.pdf";
import demag60 from "../../passport/demag60.pdf";
import liebherr40 from "../../passport/liebherr40.pdf";
import liebherr100 from "../../passport/liebherr100.pdf";
import liebherr160 from "../../passport/liebherr160.pdf";
import liebherr300 from "../../passport/liebherr300.pdf";
import liebherr350 from "../../passport/liebherr350.pdf";
import todano220 from "../../passport/todano220.pdf";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  margin: 60px auto 0;
`;

const Title = styled.h2`
  font: 400 36px "Open Sans";
  text-align: center;
  margin: 10px 0px 0px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TopBlock = styled.td`
  text-align: center;
  padding: 5px;
`;

const CraneBlock = styled(TopBlock)`
  border-right: 2px solid black;
  padding-bottom: 35px;
`;

const RightBlock = styled(CraneBlock)`
  border-right: none;
  text-align: center;
`;

const ImgBlock = styled(CraneBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 30px;
`;

const TopTableText = styled.span`
  font: 400 15px "Open Sans";
`;

const TableText = styled(TopTableText)`
  font: 400 20px "Open Sans";
  line-height: 32px;
`;

const TableName = styled.p`
  font: 400 36px "Open Sans";
  padding: 10px 0px;
  border-bottom: 2px solid #000000;
  margin-top: 50px;
  margin-left: 170px;
`;

const CraneImg = styled.img`
  max-width: 300px;
  height: auto;
`;

const TrallTextWrapper = styled.div`
  color: white;
  background: rgba(0, 0, 0, 0.7);
  margin-left: 150px;
  padding: 33px 0px 33px 0px;
`;

const PassportLink = styled.a`
  font: 400 20px "Open Sans";
  color: black;
  text-decoration-color: darkorange;
  &:hover {
    color: darkorange;
  }
`;

const Technics = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>Техника</Title>
        <TableName>Мобильные краны</TableName>
        <Table align="center" border="0">
          <tbody>
            <tr>
              <TopBlock>
                <TopTableText>Наименование крана</TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>
                  Грузоподъемность,
                  <br />
                  тонн
                </TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>
                  Длина стрелы,
                  <br />м
                </TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>
                  Опорный контур,
                  <br />м
                </TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>
                  Паспорт
                  <br />
                  (техническая документация)
                </TopTableText>
              </TopBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>Terex DEMAG AC 50-1</TableText>
                <CraneImg src={crane1} />
              </ImgBlock>
              <CraneBlock>
                <TableText>50</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>40</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  6850х6400
                  <br />
                  (длина 11200)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={demag50}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>Terex DEMAG AC 55L</TableText>
                <CraneImg src={crane2} />
              </ImgBlock>
              <CraneBlock>
                <TableText>55</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  44
                  <br />
                  (44.0+0.35+15)
                </TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  7230х6300
                  <br />
                  (длина 11240)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={demag55}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>LIEBHERR LTM 1040/1</TableText>
                <CraneImg src={crane3} />
              </ImgBlock>
              <CraneBlock>
                <TableText>40</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  30
                  <br />
                  (30.0+8.1)
                </TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  7141х6300
                  <br />
                  (длина 10970)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={liebherr40}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>LIEBHERR LTM 1100-4.2</TableText>
                <CraneImg src={crane4} />
              </ImgBlock>
              <CraneBlock>
                <TableText>100</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>60</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  8531х7009
                  <br />
                  (длина 12958)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={liebherr100}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>LIEBHERR AC 1160-5.1</TableText>
                <CraneImg src={crane5} />
              </ImgBlock>
              <CraneBlock>
                <TableText>160</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>62</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  7984х7500
                  <br />
                  (длина 14740)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={liebherr160}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>LIEBHERR LTM 1300-6.1</TableText>
                <CraneImg src={crane6} />
              </ImgBlock>
              <CraneBlock>
                <TableText>300</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  60
                  <br />
                  (60.0+12.1+21.0)
                </TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  8839.5х8500
                  <br />
                  (длина 19065)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={liebherr300}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>LIEBHERR LTM 1350-6.1</TableText>
                <CraneImg src={crane7} />
              </ImgBlock>
              <CraneBlock>
                <TableText>350</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  70
                  <br />
                  (69.1+42.0)
                </TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  8932х8530
                  <br />
                  (длина 17675)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={liebherr350}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
            <tr>
              <ImgBlock>
                <TableText>TODANO ATF 220 6-5</TableText>
                <CraneImg src={crane8} />
              </ImgBlock>
              <CraneBlock>
                <TableText>220</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>68</TableText>
              </CraneBlock>
              <CraneBlock>
                <TableText>
                  3045х8300
                  <br />
                  (длина 15927)
                </TableText>
              </CraneBlock>
              <RightBlock>
                <PassportLink href={todano220}>Паспорт</PassportLink>
              </RightBlock>
            </tr>
          </tbody>
        </Table>
        <TableName>Низкорамные тралы</TableName>
        <Table align="center" border="0">
          <tbody>
            <tr>
              <TopBlock>
                <TopTableText>Наименование трала</TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>
                  Грузоподъемность,
                  <br />
                  тонн
                </TopTableText>
              </TopBlock>
              <TopBlock>
                <TopTableText>Дополнительные характеристики</TopTableText>
              </TopBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    ES-GE
                    <br />2 TB H NA
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>28</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Погрузочная высота 0.30м;
                  <br />
                  Длина 6.40м + 2.95м;
                  <br />
                  Ширина 2.4м.
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    ES-GE
                    <br />
                    3-ass
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>48</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Погрузочная высота 0.60м;
                  <br />
                  Длина 6.40м + 2.95м;
                  <br />
                  Ширина 1.4м.
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    Nooteboom
                    <br />
                    osd 58-04V
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>46</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Погрузочная высота 0.60м;
                  <br />
                  Длина 6.6м + 2.95м;
                  <br />
                  Ширина 2.4м.
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    Nooteboom
                    <br />
                    OVB-65-04V(ZT)
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>65</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Погрузочная высота 1.25м;
                  <br />
                  Длина 12.25м - 43м;
                  <br />
                  Ширина 2.4м.
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    Sheurle
                    <br />
                    2+3
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>80</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Длина 5.8м;
                  <br />
                  Ширина 2.4м;
                  <br />
                  Высота рабочей части от 0.4м;
                  <br />
                  Максимальная нагрузка на одну ось до 36т.
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    Модульный, самоходный транспортер
                    <br />
                    SHEUERLE
                    <br />
                    SPMT
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>от 100</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Ширина 3.00м;
                  <br />
                  ПЛатформы с осями 3/4/5/6/8;
                  <br />
                  SPMT: рама М78 с допуст. +/- 7785 кНм;
                  <br />
                  Изгибающий момент;
                  <br />
                  Нагрузка на ось 45т;
                  <br />
                  Расстояние между осями 1500м;
                </TableText>
              </RightBlock>
            </tr>
            <tr>
              <CraneBlock>
                <TrallTextWrapper>
                  <TableText>
                    Модульный прицеп-платформа
                    <br />
                    SHEUERLE
                    <br />
                    KAMAG K25
                  </TableText>
                </TrallTextWrapper>
              </CraneBlock>
              <CraneBlock>
                <TableText>от 100</TableText>
              </CraneBlock>
              <RightBlock>
                <TableText>
                  Ширина 3.00м;
                  <br />
                  3/4/5/6/8 осевые модули;
                  <br />
                  Нагрузка на ось 45т;
                  <br />
                  Расстояние между осями 1500м;
                </TableText>
              </RightBlock>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Technics;
