import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Grid, ButtonBase } from "@mui/material";
import '../../../Pages/HomePage/ComponentsCss/MainPageGrid.css';
import Settings from '../../../assets/MainPageGridIcons/setting.png';
import LaunchForKey from '../../../assets/MainPageGridIcons/flask.png';
import Check from '../../../assets/MainPageGridIcons/check.png';
import Conveyor from '../../../assets/MainPageGridIcons/conveyor-belt.png';
import Museum from '../../../assets/MainPageGridIcons/museum.png';
import Automatization from '../../../assets/MainPageGridIcons/robotics.png';
import Audit from '../../../assets/MainPageGridIcons/audit.png';
import Customer from '../../../assets/MainPageGridIcons/customer-service.png';
import Conference from '../../../assets/MainPageGridIcons/conference.png';
import Forum from '../../../assets/MainPageGridIcons/scientist.png';
import Buy from '../../../assets/MainPageGridIcons/checklist.png';
import Presentation from '../../../assets/MainPageGridIcons/presentation.png';

const services = [
  {
    icon: Settings, 
    title: "Квалификация лабораторного оборудования",
    description: "Квалификация / валидация любого лабораторного оборудования"
  },
  {
    icon: LaunchForKey, 
    title: "Запуск лабораторий (под ключ)",
    description: "Запуск физико-химических и микробиологических испытательных лабораторий"
  },
  {
    icon: Check, 
    title: "Проверка работоспособности приборов",
    description: "Поверка, аттестация, валидация, калификация приборов"
  },
  {
    icon: Conveyor, 
    title: "Собственное производство товаров для лабораторий",
    description: "ООО 'Научно-производственный центр 'Референс' является нашим производством инновационных товаров Беларуси"
  },
  {
    icon: Museum, 
    title: "Утверждение типа СИ",
    description: "Организация всех задач при утверждении типа средств измерений"
  },
  {
    icon: Automatization, 
    title: "Автоматизация лабораторий LIMS (ЛИМС)",
    description: "Автоматизация работы испытательных лабораторий"
  },
  {
    icon: Audit, 
    title: "Метрологический аудит",
    description: "Метрологический аудит с целью проверки соответствия законодательству"
  },
  {
    icon: Customer, 
    title: "Авторизованный сервисный центр",
    description: "Сервисное обслуживание и ремонт лабораторного оборудования"
  },
  {
    icon: Conference, 
    title: "LABORATORIKA",
    description: "Ежегодная международная конференция для работников лабораторий"
  },
  {
    icon: Forum, 
    title: "ПЕРВЫЙ МЕТРОЛОГИЧЕСКИЙ",
    description: "Ежегодный форум для метрологов"
  },
  {
    icon: Buy, 
    title: "Купить лабораторное оборудование",
    description: "Проект, посвященный продаже премиального лабораторного оборудования"
  },
  {
    icon: Presentation,
    title: "Центр обучения",
    description: "Проект, направленный на обучение специалистов"
  }
];
const ServiceText = () => {
  return (
    <Box sx={{ marginBottom: 4, textAlign: 'center' }}>
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: { xs: '25px', sm: '35px', md: '40px' }, // Адаптивный размер шрифта
          fontWeight: 'bold', 
          marginBottom: { xs: '15px', sm: '20px', md: '20px' }, // Адаптивный отступ
          color: '#262626'
        }}
      >
        Мы специализируемся на испытательных лабораториях
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Адаптивный размер шрифта
          fontWeight: 'normal', 
          marginBottom: { xs: '50px', sm: '60px', md: '70px' }, // Адаптивный отступ
          color: '#969696' 
        }}
      >
        И предоставляем широкий перечень услуг для наших клиентов
      </Typography>
    </Box>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <ButtonBase
      sx={{ width: '96%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}
      onClick={() => console.log(`Clicked on: ${title}`)}  // Замените на свою функцию
    >
      <Card
        sx={{
          maxWidth: 'auto',
          width:'100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 2,
          boxShadow: 3,
          height: '240px',
        }}
      >
        <CardMedia
        component="img"
        image={icon}
        alt={title}
        sx={{ 
          width: { xs: 40, sm: 50, md: 80 }, 
          height: { xs: 40, sm: 50, md: 80 },
          marginTop: 2
  }}
/>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

const ServicesGrid = () => {
  return (
    <Box sx={{ padding: 0, width: 'auto' }}>
    <ServiceText/>
      <Grid
        container
        rowSpacing={5}
        justifyContent="center"
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl ={4} key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
