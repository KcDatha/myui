import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
  Pagination
} from '@mui/material';
import {
  Search,
  FilterList,
  Edit,
  Delete,
  Add
} from '@mui/icons-material';
import { useSidebar } from '../context/SidebarContext';
import Sidebar from './Sidebar';
import Header from './Header';
import DriversListWithModal from './DriversListWithModal';

const DriversListPage = ({ setCurrentPage: setAppCurrentPage }) => {
  const { isCollapsed } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(3);
  const [showDriversModal, setShowDriversModal] = useState(false);

  // Sample driver data
  const drivers = [
    {
      id: 1,
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      car: 'Toyota Camry',
      status: 'Active',
      phoneNumber: '+19876543210',
      accessibility: 'Wheel Chair',
      passengerCount: '4 passengers',
      locationSharing: 'Yes'
    },
    {
      id: 2,
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      car: 'Toyota Camry',
      status: 'Assigned',
      phoneNumber: '+19876543210',
      accessibility: 'Wheel Chair',
      passengerCount: '4 passengers',
      locationSharing: 'Yes'
    },
    {
      id: 3,
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      car: 'Toyota Camry',
      status: 'Away',
      phoneNumber: '+19876543210',
      accessibility: 'Wheel Chair',
      passengerCount: '4 passengers',
      locationSharing: 'Yes'
    },
    {
      id: 4,
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      car: 'Toyota Camry',
      status: 'Active',
      phoneNumber: '+19876543210',
      accessibility: 'Wheel Chair',
      passengerCount: '4 passengers',
      locationSharing: 'Yes'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#4CAF50';
      case 'Assigned':
        return '#FF5722';
      case 'Away':
        return '#FFC107';
      default:
        return '#757575';
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Sidebar setCurrentPage={setAppCurrentPage} />

      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: '#f0f1f8',
          marginLeft: isCollapsed ? '60px' : '280px',
          marginTop: '66px',
          transition: 'margin-left 0.3s ease',
          padding: '20px 40px',
          position: 'relative',
          width: '1129px',
          height: '958px',
          left: '31px',
          top: 0
        }}
      >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '28px',
            color: '#000000'
          }}
        >
          Driver's List
        </Typography>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setShowDriversModal(true)}
          sx={{
            backgroundColor: '#4285f4',
            color: 'white',
            textTransform: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            borderRadius: '6px',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#3367d6'
            }
          }}
        >
          Add Driver
        </Button>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3
        }}
      >
        <Box sx={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <Search
            sx={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999999',
              fontSize: '20px'
            }}
          />
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                pl: 5,
                backgroundColor: 'white',
                borderRadius: '6px',
                '& fieldset': {
                  borderColor: '#E0E0E0'
                },
                '&:hover fieldset': {
                  borderColor: '#BDBDBD'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4285f4'
                }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px'
              }
            }}
          />
        </Box>

        <IconButton
          sx={{
            backgroundColor: 'white',
            border: '1px solid #E0E0E0',
            borderRadius: '6px',
            p: 1,
            '&:hover': {
              backgroundColor: '#f5f5f5'
            }
          }}
        >
          <FilterList sx={{ color: '#666666' }} />
        </IconButton>
      </Box>

      {/* Driver Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {drivers.map((driver) => (
          <Box
            key={driver.id}
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #E0E0E0',
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 3
            }}
          >
            {/* Avatar */}
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#000000'
              }}
            />

            {/* Driver Info */}
            <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
              {/* Column 1 */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#000000',
                    mb: 2
                  }}
                >
                  {driver.name}
                </Typography>
                
                <Box sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: '#7F7F7F',
                      mb: 0.5
                    }}
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#000000'
                    }}
                  >
                    {driver.phoneNumber}
                  </Typography>
                </Box>
              </Box>

              {/* Column 2 */}
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: '#7F7F7F',
                      mb: 0.5
                    }}
                  >
                    Current Address:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#000000'
                    }}
                  >
                    {driver.currentAddress}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: '#7F7F7F',
                      mb: 0.5
                    }}
                  >
                    Accessibility
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#000000'
                    }}
                  >
                    {driver.accessibility}
                  </Typography>
                </Box>
              </Box>

              {/* Column 3 */}
              <Box>
                <Box sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: '#7F7F7F',
                      mb: 0.5
                    }}
                  >
                    Car
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#000000'
                    }}
                  >
                    {driver.car}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '10px',
                      color: '#7F7F7F',
                      mb: 0.5
                    }}
                  >
                    Passenger Count
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#000000'
                    }}
                  >
                    {driver.passengerCount}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Status and Actions */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              {/* Status */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '10px',
                    color: '#7F7F7F',
                    mb: 0.5
                  }}
                >
                  Status
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: getStatusColor(driver.status)
                  }}
                >
                  {driver.status}
                </Typography>
              </Box>

              {/* Location Sharing */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '10px',
                    color: '#7F7F7F',
                    mb: 0.5
                  }}
                >
                  Location Sharing
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    color: '#000000'
                  }}
                >
                  {driver.locationSharing}
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <IconButton
                  sx={{
                    backgroundColor: '#f0f8ff',
                    border: '1px solid #4285f4',
                    borderRadius: '50%',
                    p: 1,
                    '&:hover': {
                      backgroundColor: '#e3f2fd'
                    }
                  }}
                >
                  <Edit sx={{ color: '#4285f4', fontSize: '18px' }} />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: '#fff5f5',
                    border: '1px solid #f44336',
                    borderRadius: '50%',
                    p: 1,
                    '&:hover': {
                      backgroundColor: '#ffebee'
                    }
                  }}
                >
                  <Delete sx={{ color: '#f44336', fontSize: '18px' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4
        }}
      >
        <Pagination
          count={5}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            '& .MuiPaginationItem-root': {
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              color: '#666666',
              '&.Mui-selected': {
                backgroundColor: '#4285f4',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#3367d6'
                }
              },
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }
          }}
        />
      </Box>
      </Box>

      {/* Drivers List Modal */}
      <DriversListWithModal
        open={showDriversModal}
        onClose={() => setShowDriversModal(false)}
      />
    </Box>
  );
};

export default DriversListPage;
