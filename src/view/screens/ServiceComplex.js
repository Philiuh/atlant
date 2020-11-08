import React from "react";
import styled from "styled-components";
import Header from "./Header";
import complexPic1 from "../../pics/complexPic1.png";
import complexPic2 from "../../pics/complexPic2.png";
import complexPic3 from "../../pics/complexPic3.png";
import complexPic4 from "../../pics/complexPic4.png";
import complexPic5 from "../../pics/complexPic5.png";
import complexPic6 from "../../pics/complexPic6.png";
import complexPic7 from "../../pics/complexPic7.png";
import complexPic8 from "../../pics/complexPic8.png";
import complexPic9 from "../../pics/complexPic9.png";
import complexPic10 from "../../pics/complexPic10.png";
import complexPic11 from "../../pics/complexPic11.png";
import complexPic12 from "../../pics/complexPic12.png";
import complexPic13 from "../../pics/complexPic13.png";
import complexPic14 from "../../pics/complexPic14.png";
import complexPic15 from "../../pics/complexPic15.png";
import complexPic16 from "../../pics/complexPic16.png";
import complexPic17 from "../../pics/complexPic17.png";
import complexPic18 from "../../pics/complexPic18.png";

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

const Pic = styled.img`
  max-height: auto;
  max-width: 525px;
  margin: 10px 20px 10px 0;
`;

const PicList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 30px 0px;
`;

const PicListColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ServiceComplex = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА</Title>
        <Text>
          Компания А-инженеринг работает с 2008 года и мы опытный партнер во
          всех отраслях бизнеса, где необходимо применение специальной техники.
          В нашем автопарке мобильные краны любой грузоподъемности, для
          производства всего спектра погрузочных, монтажных, транспортировочных
          работ. Важные преимущества взаимодействия:
        </Text>
        <ul>
          <Item>быстрая обработка заявок на аренду;</Item>
          <Item>высокий уровень обслуживания;</Item>
          <Item>консультации;</Item>
          <Item>оптимальный результат.</Item>
        </ul>
        <Text>Мы гарантируем комплексный подход к поставленным задачам.</Text>
        <Title>ДЕМОНСТРАЦИЯ ПРОЕКТОВ</Title>
        <Text>
          Работа автокрана LIEBHERR LTM-1250 по демонтажу консолей козлового
          крана г. Серов (Cеровская ГРЭС) в рамках реконструкции коммуникаций,
          сетей связи, демонтажу оборудования и грузоподъемных механизмов.
          <br />
          Общий вес демонтируемых консолей составил 82 тонны.
          <br />
          Данные работы производились совместно с партнерской организацией
          предоставившие монтажников с допуском при работе на высоте. Демонтаж
          консолей происходил на высоте 34 метра.
          <br />
          Работы выполнены ранее запланированного срока.
          <PicList>
            <Pic src={complexPic1} />
            <Pic src={complexPic2} />
          </PicList>
        </Text>
        <Text>
          Доставка крупногабаритных балок с завода изготовителя и Монтаж
          путепровода железнодорожной развязки Р260 «Таврида» — автомобильная
          дорога федерального значения Керчь (Московское шоссе).
          <br />
          Этап (Подготовительный) - сборка и монтаж временного пролетного
          строения весом 23,3 тонны краном Liebherr LTM1200-5.1 (стоянка крана
          №1).
          <br />
          Дополнительно нашими специалистами подготовлена площадка для
          безопасного проведения работ мобильными кранами.
        </Text>
        <PicList>
          <Pic src={complexPic3} />
          <PicListColumn>
            <Pic src={complexPic4} />
            <Pic src={complexPic5} />
          </PicListColumn>
        </PicList>
        <Text>
          Заменой трансформаторов 2×16 МВА на 2×40 МВА 110/10 кВ» г.Краснодар
          ул.Тихорецкая май-июнь 2019 года.
          <br />
          Замена трансформаторов на рабочей подстанции проводились в два этапа.
          Замена ТП1 и замена ТП2 включала в себя демонтаж трансформаторов
          выработавших свой ресурс, перевозка и разгрузка на складах хранения.
          Установка новых трансформаторов производилась автокранами 100 и 200
          тонн.
          <br />
          Для проведения данных работ, специалистами нашей организации
          заблаговременно были подготовлены временные подъездные пути для
          перевозки тяжеловесного оборудования и площадка для безопасного
          проведения работ мобильным краном.
        </Text>
        <PicList>
          <Pic src={complexPic6} />
          <Pic src={complexPic7} />
          <Pic src={complexPic8} />
          <Pic src={complexPic9} />
          <Pic src={complexPic10} />
        </PicList>
        <Text>
          Монтаж стеллажных кранов-штабелёров т.м. MIAS по адресу: Краснодарский
          край, Темрюкский район, 1500 м. западнее п. Волна.
          <br />
          Предварительно специалистами Атлант-инженеринг проведены работы по
          разработке проектной документации. Перед началом работ выполнена
          подготовка площадки для безопасного проведения работ кранами. Работа
          произведена без срывов, качественно и сдана в срок.
        </Text>
        <PicList>
          <Pic src={complexPic11} />
          <Pic src={complexPic12} />
          <Pic src={complexPic13} />
          <Pic src={complexPic14} />
        </PicList>
        <Text>
          Разгрузка и монтаж модульных блоков пожарной защиты общим весом 48
          тонн на подстанции г.Краснодар.
          <br />
          Работы производились в ночное время.
        </Text>
        <PicList>
          <Pic src={complexPic15} />
          <Pic src={complexPic16} />
          <Pic src={complexPic17} />
          <Pic src={complexPic18} />
        </PicList>
      </Container>
    </>
  );
};

export default ServiceComplex;
