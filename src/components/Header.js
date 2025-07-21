import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Avatar
} from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { useSidebar } from '../context/SidebarContext';

const Header = () => {
  const { toggleSidebar, isCollapsed } = useSidebar();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 1300,
        height: '66px',
        left: isCollapsed ? '60px' : '280px', // Start after sidebar
        width: isCollapsed ? 'calc(100% - 60px)' : 'calc(100% - 280px)', // Adjust width
        transition: 'left 0.3s ease, width 0.3s ease'
      }}
    >
      <Toolbar 
        sx={{ 
          height: '66px',
          minHeight: '66px !important',
          px: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Left Side - Menu Icon and Search */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Menu Icon */}
          <IconButton
            onClick={toggleSidebar}
            sx={{
              color: '#666',
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <Menu />
          </IconButton>

          {/* Search Bar */}
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                height: 40,
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#ccc',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4285f4',
                  borderWidth: 1
                }
              },
              '& .MuiInputBase-input': {
                fontSize: 14,
                color: '#333'
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#999', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Right Side - Five Circles */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Avatar
              key={index}
              sx={{
                width: 32,
                height: 32,
                backgroundColor: index === 1 ? '#4285f4' : 
                                 index === 2 ? '#34a853' : 
                                 index === 3 ? '#fbbc04' : 
                                 index === 4 ? '#ea4335' : '#9aa0a6',
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              {index}
            </Avatar>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
