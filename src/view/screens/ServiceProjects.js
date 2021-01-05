import React from "react";
import styled from "styled-components";
import Header from "./Header";
import scheme1 from "../../pics/scheme1.png";
import scheme2 from "../../pics/scheme2.png";
import scheme3 from "../../pics/scheme3.png";
import scheme4 from "../../pics/scheme4.png";
import scheme5 from "../../pics/scheme5.png";
import scheme6 from "../../pics/scheme6.png";
import scheme7 from "../../pics/scheme7.png";
import scheme8 from "../../pics/scheme8.png";
import scheme9 from "../../pics/scheme9.png";
import scheme10 from "../../pics/scheme10.png";

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
  text-align: justify;
  line-height: 36px;
`;

const Item = styled.li`
  font: 400 18px "Open Sans";
  text-align: left;
  line-height: 36px;
  margin: 0 0 5px 45px;
`;

const Scheme = styled.img`
  max-height: auto;
  max-width: ${(props) => props.width};
  margin: 20px 30px 50px 0;
`;

const SchemeList = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ServiceProjects = () => {
  return (
    <>
      <Header back={"black"} />
      <Container>
        <Title>проект производства работ кранами (ППРК)</Title>
        <Text>
          Гарантия сохранности грузов (оборудования) при монтаже, безопасность
          персонала, а так же выполнение работ с соблюдением требований
          промышленной безопасности начинается с разработки ППРк
          квалифицированными специалистами. Работа грузоподъемной техники должна
          осуществляться в четком соответствии со специально подготовленным
          проектом (ППРк) или специальными технологическими картами.
        </Text>
        <br />
        <Text>
          Право на подготовку проекта имеют только организации с
          соответствующими допусками и аттестацией в Ростехнадзоре.
          Ответственность за качество ППРк возлагается на автора проекта.
          Осуществление работ с отступлением от прописанных в документах норм
          является недопустимым. При необходимости ППРк может подвергаться
          незначительной корректировке, но выполнять такую работу может только
          сертифицированная компания, которая изначально занималась его
          созданием.
        </Text>
        <br />
        <Text>
          Специалисты Атлант-Инженеринг имеют богатый опыт в реализации
          индивидуальных проектов любой сложности. Мы готовы проконсультировать
          ваших специалистов или самостоятельно разработать ППРк.
        </Text>
        <Title>НЕОБХОДИМЫЙ ПАКЕТ ДОКУМЕНТОВ И ДАННЫХ ДЛЯ СОЗДАНИЯ ППРК</Title>
        <ul>
          <Text>
            Для подготовки ППРк обладателю строительного объекта необходимо
            представить специалистам следующую документацию:
          </Text>
          <Item>проект организации всех этапов стройки (ПОС);</Item>
          <Item>
            генеральный план с информацией о существующих постройках и зданиях,
            возведение которых находится на этапе проектирования;
          </Item>
          <Item>
            полная информация об имеющейся на объекте грузоподъемной технике;
          </Item>
        </ul>
        <Text>
          Подрядчик, осуществляющий выполнение стройки, должен представить такие
          документы как:
        </Text>
        <ul>
          <Item>Свидетельство ОГРН и СРО; </Item>
          <Item>
            Документ, подтверждающий успешное прохождение аттестации в
            Росхенадрозе;
          </Item>
        </ul>
        <Text>
          Организация, являющаяся собственником спецтехники должна предоставить:
        </Text>
        <ul>
          <Item>Свидетельство ОГРН; </Item>

          <Item>
            Документ, подтверждающий то, что ОПО зарегистрирован в госреестре.
          </Item>
          <Item>
            Действующее удостоверение главного механика, специализирующегося на
            облуживании кранов.
          </Item>
        </ul>
        <Text>
          Документы, входящие в состав правильно подготовленного ППРк:
        </Text>
        <ul>
          <Item>разъяснительная записка;</Item>
          <Item>схема привязки погрузочной техники;</Item>
          <Item>
            расчеты всех опасных зон на объекте при перемещении с помощью крана
            тех или иных грузов или их падении со здания и других возвышений.
          </Item>
          <Item>детальные схемы по складированию и строповке грузов;</Item>
          <Item>
            проект усиленной площадки (фундамента) для размещения крана (в том
            случае если планируется использования крупногабаритной техники с
            очень большой грузоподъемностью).
          </Item>
        </ul>
        <Text>
          Если работы предполагают применение строительных лесов и защитных
          экранов, то для успешного согласования и утверждения проекта
          необходимо дополнительно подготовить ППР на эти виды вспомогательных
          конструкций.
        </Text>
        <Title>ЦЕНА ПОДГОТОВКИ ППРК И СРОКИ ВЫПОЛНЕНИЯ ЗАКАЗА</Title>
        <Text>
          Атлант-инженеринг предлагает своим клиентам услуги по разработке ППРк
          на самых выгодных условиях. Окончательная цена проекта просчитывается
          еще на этапе оформления договора о сотрудничестве и напрямую зависит
          от сложности предстоящих работ.{" "}
        </Text>
        <Title>Демонстрация проектов</Title>
        <Text>
          Проектирование и монтаж путепровода железнодорожной развязки Р260
          «Таврида» — автомобильная дорога федерального значения Керчь
          (Московское шоссе). Июнь 2019 года произведены проектные работы и
          успешный монтаж произведен в 3 этапа:
        </Text>
        <ul>
          <Item>
            Этап(Подготовительный) - сборка и монтаж временного пролетного
            строения весом 23,3 тонны краном Liebherr LTM1200-5.1 (стоянка крана
            №1)
          </Item>
          <Item>
            Этап – последовательная продольная надвижка и монтаж в проектное
            положение двумя стреловыми кранами Liebherr LTM1200-5.1
          </Item>
          <Item>
            Монтаж в проектное положение двумя стреловыми кранами Liebherr
            LTM1200-5.1
          </Item>
        </ul>
        <Scheme src={scheme1} width={"525px"} />
        <Text>
          В рамках реконструкции ПС 110/10 кВ «ОБД» с заменой трансформаторов
          2×16 МВА на 2×40 МВА 110/10 кВ» г.Краснодар ул Тихорецкая май-июнь
          2019 года произведены проектные работы, произведены подготовительные
          работы по устройству подъездных путей совместно с партнерами ООО
          «СтройСервис».
          <br />
          Общий вес оборудования составил 180 тонн. Работы производились в 4
          этапа.
          <br />
          Для проведения работ были задействованы мобильный кран Liebherr
          LTM1160-5.1, Liebherr LTM1200-5.1.
        </Text>
        <Scheme src={scheme2} width={"575px"} />
        <Text>
          Проект производства работ (ППР), объем, по установке котлов
          Термотехник ТТ200 в количестве 3 (трёх) штук на фундаменты котлов на
          объекте: «Предприятие по глубокой переработке зерна кукурузы в хуторе
          Шарашенский Алексеевского района Волгоградской области. Котельная".
          <br />
          Март 2019 года, выполнено проектирование и успешный монтаж при помощи
          мобильного крана TODANO ATF-220
        </Text>
        <SchemeList>
          <Scheme src={scheme3} width={"525px"} />
          <Scheme src={scheme4} width={"525px"} />
        </SchemeList>
        <Text>
          Разработка проектной документации для производства работ по замене
          негерметичных шаровых кранов с электроприводом Ду24 на технологических
          линиях станции регулирования давлениями и расхода нефти РП МТ в
          г.Новороссийск.
          <br />
          Декабрь 2018 г.
        </Text>
        <Scheme src={scheme5} width={"525px"} />
        <Text>
          Технологическая схема монтажа плит перекрытия (отм. +8,790 в осях
          10-15 ряд Л-Н) автомобильным краном TADANO FAUN ATF 220G-5 г.п.
          220,0т. (противовес 47,0 тн). Улица Чемпионов в Чкаловском районе г.
          Екатеринбурга Жилой район "Солнечный".
        </Text>
        <Scheme src={scheme6} width={"525px"} />
        <Text>
          Разработка ППРк по е (ГРЭС) в рамках реконструкции коммуникаций, сетей
          связи, демонтажу оборудования и грузоподъемных механизмов. Общий вес
          демонтируемых консолей составил 82 тонны.{" "}
        </Text>
        <Scheme src={scheme7} width={"525px"} />
        <Text>
          Разработка ППРк на работу автомобильных кранов при монтаже стеллажных
          кранов-штабелёров т.м. MIAS по адресу: Краснодарский край, Темрюкский
          район, 1500 м. западнее п. Волна. Январь 2019г.
        </Text>
        <SchemeList>
          <Scheme src={scheme8} width={"525px"} />
          <Scheme src={scheme9} width={"525px"} />
        </SchemeList>
        <Scheme src={scheme10} width={"350px"} />
      </Container>
    </>
  );
};

export default ServiceProjects;
