import React, { useState } from 'react';
import {Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = ['Главная', 'О нас', 'Контакты', 'Профиль'];

  return (
    <>
    <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon sx={{ fontSize: '30px' }} /> {/* Увеличение размера иконки */}
          </IconButton>
        </Toolbar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={index} onClick={toggleDrawer} >
                <ListItemText 
                primary={text} 
                primaryTypographyProps={{ 
                    sx: { fontSize: '20px' }
                    }} 
                    />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
