import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  IconButton,
  Tooltip
} from '@mui/material';
import { useSidebar } from '../context/SidebarContext';
import logo from '../images/logo.png';
import {
  Business,
  DirectionsRun,
  Message,
  Assessment,
  DirectionsBus,
  FiberManualRecord,
  Build,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

const Sidebar = ({ setCurrentPage }) => {
  const { isCollapsed } = useSidebar();

  // Open state keyed by unique IDs now
  const [openMenus, setOpenMenus] = useState({
    'facilities-1': false,
    'transportation': true
  });

  const [activeSubmenu, setActiveSubmenu] = useState('requests'); // Track active submenu

  const toggleMenu = (menuId) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const menuItems = [
    { icon: <Business />, text: 'Facilities', hasSubmenu: true, id: 'facilities-1' },
    { icon: <DirectionsRun />, text: 'Activity Registration', id: 'activity' },
    { icon: <Message />, text: 'Messaging', id: 'messaging' },
    { icon: <Assessment />, text: 'Surveys', id: 'surveys' },
    {
      icon: <DirectionsBus />,
      text: 'Transportation Request',
      hasSubmenu: true,
      active: true,
      id: 'transportation'
    },
    { icon: <Build />, text: 'Service Request', id: 'service' }
  ];

  return (
    <Box
      sx={{
        width: isCollapsed ? 60 : 280,
        backgroundColor: 'white',
        borderRight: '1px solid #e0e0e0',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      {/* Header with Logo */}
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isCollapsed ? '40px' : '60px',
              width: 'auto',
              maxWidth: isCollapsed ? '40px' : '180px',
              transition: 'all 0.3s ease',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Box>

      {/* Menu Section */}
      {!isCollapsed && (
        <Box sx={{ px: 2, py: 1 }}>
          <Typography sx={{ fontSize: 12, color: '#999', fontWeight: 'bold' }}>
            Menu
          </Typography>
        </Box>
      )}

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, px: 1 }}>
        {menuItems.map((item) => (
          <Box key={item.id}>
            <Tooltip
              title={isCollapsed ? item.text : ''}
              placement="right"
              arrow
            >
              <ListItem
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  backgroundColor: item.active ? '#f0f8ff' : 'transparent',
                  cursor: 'pointer',
                  minHeight: 48,
                  px: isCollapsed ? 1 : 2,
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  '&:hover': {
                    backgroundColor: item.active ? '#f0f8ff' : '#f5f5f5'
                  }
                }}
                onClick={() => {
                  if (item.hasSubmenu && !isCollapsed) {
                    toggleMenu(item.id);
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: isCollapsed ? 'auto' : 40,
                    color: item.active ? '#4285f4' : '#666',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {!isCollapsed && (
                  <>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 14,
                          fontWeight: item.active ? 'bold' : 'normal',
                          color: item.active ? '#4285f4' : '#333'
                        }
                      }}
                    />
                    {item.hasSubmenu && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(item.id);
                        }}
                        sx={{
                          color: item.active ? '#4285f4' : '#666',
                          '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.04)'
                          }
                        }}
                      >
                        {openMenus[item.id] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    )}
                  </>
                )}
              </ListItem>
            </Tooltip>

            {/* Submenu for Transportation Request */}
            {!isCollapsed && item.id === 'transportation' && (
              <Collapse in={openMenus['transportation']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    sx={{
                      pl: 6,
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    }}
                    onClick={() => {
                      setActiveSubmenu('requests');
                      if (typeof setCurrentPage === 'function') {
                        setCurrentPage('requests');
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <FiberManualRecord
                        sx={{
                          fontSize: 8,
                          color: activeSubmenu === 'requests' ? '#ff4444' : '#666'
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Requests"
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 13,
                          color: activeSubmenu === 'requests' ? '#ff4444' : '#666',
                          fontWeight: activeSubmenu === 'requests' ? 'bold' : 'normal'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      pl: 6,
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#f5f5f5' }
                    }}
                    onClick={() => {
                      setActiveSubmenu('drivers');
                      if (typeof setCurrentPage === 'function') {
                        setCurrentPage('drivers');
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <FiberManualRecord
                        sx={{
                          fontSize: 8,
                          color: activeSubmenu === 'drivers' ? '#8B5CF6' : '#666'
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Cars and Drivers"
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 13,
                          color: activeSubmenu === 'drivers' ? '#8B5CF6' : '#666',
                          fontWeight: activeSubmenu === 'drivers' ? 'bold' : 'normal'
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Collapse>
            )}

            {/* Submenu for Facilities */}
            {!isCollapsed && item.id === 'facilities-1' && item.hasSubmenu && (
              <Collapse in={openMenus['facilities-1']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    sx={{
                      pl: 6,
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <FiberManualRecord sx={{ fontSize: 8, color: '#666' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Facility Management"
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 13,
                          color: '#666'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      pl: 6,
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 20 }}>
                      <FiberManualRecord sx={{ fontSize: 8, color: '#666' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bookings"
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: 13,
                          color: '#666'
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
