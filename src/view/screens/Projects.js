import React from "react";
import styled from "styled-components";
import Header from "./Header";
import projectPic1 from "../../pics/projectPic1.png";
import projectPic2 from "../../pics/projectPic2.png";
import projectPic3 from "../../pics/projectPic3.png";
import projectPic4 from "../../pics/projectPic4.png";
import projectPic5 from "../../pics/projectPic5.png";
import projectPic6 from "../../pics/projectPic6.png";
import projectPic7 from "../../pics/projectPic7.png";
import projectPic8 from "../../pics/projectPic8.png";
import projectPic9 from "../../pics/projectPic9.png";
import projectPic10 from "../../pics/projectPic10.png";
import projectPic11 from "../../pics/projectPic11.png";
import projectPic12 from "../../pics/projectPic12.png";

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
  max-width: inherit;
`;

const ProjectsList = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 430px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 80px;
`;

const ProjectImage = styled.img`
  width: 270px;
  height: 191px;
  z-index: 0;
`;

const ProjectImageRotateLeft = styled.img`
  width: 270px;
  height: 191px;
  position: absolute;
  transform: rotate(-15deg);
`;

const ProjectImageRotateRight = styled.img`
  width: 270px;
  height: 191px;
  position: absolute;
  transform: rotate(+15deg);
`;

const Text = styled.p`
  font: 400 14px "Open Sans";
  text-align: left;
  line-height: 28px;
  padding-top: 45px;
`;

const Projects = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>Наши проекты</Title>
        <ProjectsList>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic1} />
            <ProjectImageRotateRight src={projectPic1} />
            <ProjectImage src={projectPic1} />
            <Text>
              Разработка ППРк на работу автомобильных кранов при монтаже
              стеллажных кранов-штабелёров т.м. MIAS по адресу: Краснодарский
              край, Темрюкский район, 1500 м. западнее п. Волна.
              <br />
              Январь 2019г.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic2} />
            <ProjectImageRotateRight src={projectPic2} />
            <ProjectImage src={projectPic2} />
            <Text>
              Разработка ППРк по демонтажу консолей козлового крана г.Серов
              Свердловская область. (ГРЭС) в рамках реконструкции коммуникаций,
              сетей связи, демонтажу оборудования и грузоподъемных механизмов.
              <br />
              Общий вес демонтируемых консолей составил 82 тонны.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic3} />
            <ProjectImageRotateRight src={projectPic3} />
            <ProjectImage src={projectPic3} />
            <Text>
              Технологическая схема монтажа плит перекрытия (отм. +8,790 в осях
              10-15 ряд Л-Н) автомобильным краном TADANO FAUN ATF 220G-5 г.п.
              220,0т. (противовес 47,0 тн).
              <br />
              Улица Чемпионов в Чкаловском районе г. Екатеринбурга Жилой район
              "Солнечный".
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic4} />
            <ProjectImageRotateRight src={projectPic4} />
            <ProjectImage src={projectPic4} />
            <Text>
              Разработка проектной документации для производства работ по замене
              негерметичных шаровых кранов с электроприводом Ду24 на
              технологических линиях станции регулирования давлениями и расхода
              нефти РП МТ в г.Новороссийск.
              <br />
              Декабрь 2018 г.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic5} />
            <ProjectImageRotateRight src={projectPic5} />
            <ProjectImage src={projectPic5} />
            <Text>
              Проект производства работ (ППР), объем, по установке котлов
              Термотехник ТТ200 в количестве 3 (трёх) штук на фундаменты котлов
              на объекте: «Предприятие по глубокой переработке зерна кукурузы в
              хуторе Шарашенский Алексеевского района Волгоградской области.
              Котельная".
              <br />
              Март 2019 года, выполнено проектирование и успешный монтаж при
              помощи мобильного крана TODANO ATF-220
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic6} />
            <ProjectImageRotateRight src={projectPic6} />
            <ProjectImage src={projectPic6} />
            <Text>
              В рамках реконструкции ПС 110/10 кВ «ОБД» с заменой
              трансформаторов 2×16 МВА на 2×40 МВА 110/10 кВ» г.Краснодар
              улюТихорецкая май-июнь 2019 года произведены проектные работы,
              произведены подготовительные работы по устройству подъездных путей
              совместно с партнерами ООО «СтройСервис». Общий вес оборудования
              составил 180 тонн. Работы производились в 4 этапа.
              <br />
              Для проведения работ были задействованы мобильный кран Liebherr
              LTM1160-5.1, Liebherr LTM1200-5.1.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic7} />
            <ProjectImageRotateRight src={projectPic7} />
            <ProjectImage src={projectPic7} />
            <Text>
              Проектирование и монтаж путепровода железнодорожной развязки Р260
              «Таврида» — автомобильная дорога федерального значения Керчь
              (Московское шоссе).
              <br />
              Июнь 2019 года произведены проектные работы и успешный монтаж
              произведен в 3 этапа.
              <br />1 Этап(Подготовительный) - сборка и монтаж временного
              пролетного строения весом 23,3 тонны краном Liebherr LTM1200-5.1
              (стоянка крана №1)
              <br />
              2. Этап – последовательная продольная надвижка и монтаж в
              проектное положение двумя стреловыми кранами Liebherr LTM1200-5.1
              <br />
              3. Монтаж в проектное положение двумя стреловыми кранами Liebherr
              LTM1200-5.1
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic8} />
            <ProjectImageRotateRight src={projectPic8} />
            <ProjectImage src={projectPic8} />
            <Text>
              Работа автокрана LIEBHERR LTM-1250 по демонтажу консолей козлового
              крана г. Серов (Cеровская ГРЭС) в рамках реконструкции
              коммуникаций, сетей связи, демонтажу оборудования и грузоподъемных
              механизмов. Общий вес демонтируемых консолей составил 82 тонны,
              Данные работы производились совместно с партнерской организацией
              предоставившие монтажников с допуском при работе на высоте.
              Демонтаж консолей происходил на высоте 34 метра.
              <br />
              Работы выполнены ранее запланированного срока.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic9} />
            <ProjectImageRotateRight src={projectPic9} />
            <ProjectImage src={projectPic9} />
            <Text>
              Доставка крупногабаритных балок с завода изготовителя и Монтаж
              путепровода железнодорожной развязки Р260 «Таврида» —
              автомобильная дорога федерального значения Керчь (Московское
              шоссе).
              <br />
              Этап (Подготовительный) - сборка и монтаж временного пролетного
              строения весом 23,3 тонны краном Liebherr LTM1200-5.1 (стоянка
              крана №1).
              <br />
              Дополнительно нашими специалистами подготовлена площадка для
              безопасного проведения работ мобильными кранами.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic10} />
            <ProjectImageRotateRight src={projectPic10} />
            <ProjectImage src={projectPic10} />
            <Text>
              Заменой трансформаторов 2×16 МВА на 2×40 МВА 110/10 кВ»
              г.Краснодар ул.Тихорецкая май-июнь 2019 года. Замена
              трансформаторов на рабочей подстанции проводились в два этапа.
              Замена ТП1 и замена ТП2 включала в себя демонтаж трансформаторов
              выработавших свой ресурс, перевозка и разгрузка на складах
              хранения. Установка новых трансформаторов производилась
              автокранами 100 и 200 тонн. Для проведения данных работ,
              специалистами нашей организации заблаговременно были подготовлены
              временные подъездные пути для перевозки тяжеловесного оборудования
              и площадка для безопасного проведения работ мобильным краном.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic11} />
            <ProjectImageRotateRight src={projectPic11} />
            <ProjectImage src={projectPic11} />
            <Text>
              Монтаж стеллажных кранов-штабелёров т.м. MIAS по адресу:
              Краснодарский край, Темрюкский район, 1500 м. западнее п. Волна.
              <br />
              Предварительно специалистами Атлант-инженеринг проведены работы по
              разработке проектной документации. Перед началом работ выполнена
              подготовка площадки для безопасного проведения работ кранами.
              Работа произведена без срывов, качественно и сдана в срок.
            </Text>
          </ProjectItem>
          <ProjectItem>
            <ProjectImageRotateLeft src={projectPic12} />
            <ProjectImageRotateRight src={projectPic12} />
            <ProjectImage src={projectPic12} />
            <Text>
              Разгрузка и монтаж модульных блоков пожарной защиты общим весом 48
              тонн на подстанции г.Краснодар.
              <br />
              Работы производились в ночное время.
            </Text>
          </ProjectItem>
        </ProjectsList>
      </Container>
    </>
  );
};

export default Projects;
