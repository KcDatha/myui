import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Avatar,
  Pagination,
  IconButton
} from '@mui/material';
import {
  Search,
  FilterList,
  Add,
  Close
} from '@mui/icons-material';
import DriverDetailsModal from './DriverDetailsModal';

const DriversListWithModal = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showDriverDetails, setShowDriverDetails] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [drivers, setDrivers] = useState([]);

  // Initialize drivers data
  React.useEffect(() => {
    if (open && drivers.length === 0) {
      setDrivers([
        {
          id: 1,
          name: 'John Doe',
          phoneNumber: '+19876543210',
          currentAddress: '123 St, Clemson, SC, 12345',
          car: 'Toyota Camry',
          accessibility: 'Wheel Chair',
          locationSharing: 'Yes',
          status: 'Active',
          email: 'john.doe@gmail.com'
        },
        {
          id: 2,
          name: 'John Doe',
          phoneNumber: '+19876543210',
          currentAddress: '123 St, Clemson, SC, 12345',
          car: 'Toyota Camry',
          accessibility: 'Wheel Chair',
          locationSharing: 'Yes',
          status: 'Active',
          email: 'john.doe@gmail.com'
        },
        {
          id: 3,
          name: 'John Doe',
          phoneNumber: '+19876543210',
          currentAddress: '123 St, Clemson, SC, 12345',
          car: 'Toyota Camry',
          accessibility: 'Wheel Chair',
          locationSharing: 'Yes',
          status: 'Active',
          email: 'john.doe@gmail.com'
        },
        {
          id: 4,
          name: 'John Doe',
          phoneNumber: '+19876543210',
          currentAddress: '123 St, Clemson, SC, 12345',
          car: 'Toyota Camry',
          accessibility: 'Wheel Chair',
          locationSharing: 'Yes',
          status: 'Active',
          email: 'john.doe@gmail.com'
        }
      ]);
    }
  }, [open, drivers.length]);

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
    setIsAddMode(false);
    setShowDriverDetails(true);
  };

  const handleAddDriver = () => {
    setSelectedDriver(null);
    setIsAddMode(true);
    setShowDriverDetails(true);
  };

  const handleCloseDriverDetails = () => {
    setShowDriverDetails(false);
    setSelectedDriver(null);
    setIsAddMode(false);
  };

  const handleSaveDriver = (driverData, isAdd) => {
    if (isAdd) {
      // Add new driver
      const newDriver = {
        ...driverData,
        id: Math.max(...drivers.map(d => d.id), 0) + 1
      };
      setDrivers(prev => [...prev, newDriver]);
    } else {
      // Update existing driver
      setDrivers(prev =>
        prev.map(driver =>
          driver.id === driverData.id ? driverData : driver
        )
      );
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1200,
          display: open ? 'block' : 'none'
        }}
        onClick={onClose}
      />

      {/* Main Modal */}
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '600px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          zIndex: 1201,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            borderBottom: '1px solid #E0E0E0'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              color: '#000000'
            }}
          >
            Driver's List
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        {/* Search and Filter Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
            gap: 2
          }}
        >
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#666666', fontSize: '20px' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                height: '40px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                backgroundColor: '#F8F9FA',
                border: 'none',
                '& fieldset': {
                  border: 'none'
                }
              }
            }}
          />
          <Button
            startIcon={<FilterList />}
            sx={{
              color: '#666666',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'none',
              minWidth: 'auto',
              px: 2
            }}
          />
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAddDriver}
            sx={{
              backgroundColor: '#4285f4',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'none',
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

        {/* Driver List */}
        <Box sx={{ flex: 1, overflow: 'auto', px: 3 }}>
          {drivers.map((driver) => (
            <Box
              key={driver.id}
              onClick={() => handleDriverClick(driver)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                mb: 2,
                backgroundColor: '#f0f1f8',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#e8e9f0'
                }
              }}
            >
              {/* Avatar */}
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#000000',
                  mr: 3
                }}
              />

              {/* Driver Info */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#000000',
                    mb: 1
                  }}
                >
                  {driver.name}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 4, mb: 1 }}>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '12px',
                        color: '#666666',
                        mb: 0.5
                      }}
                    >
                      Phone Number
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#000000'
                      }}
                    >
                      {driver.phoneNumber}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '12px',
                        color: '#666666',
                        mb: 0.5
                      }}
                    >
                      Accessibility
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#000000'
                      }}
                    >
                      {driver.accessibility}
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '12px',
                        color: '#666666',
                        mb: 0.5
                      }}
                    >
                      Passengers
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#000000'
                      }}
                    >
                      4 passengers
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#666666'
                    }}
                  >
                    Current Address: {driver.currentAddress}
                  </Typography>
                  
                  <Typography
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      color: '#666666'
                    }}
                  >
                    Car: {driver.car}
                  </Typography>
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
            p: 3,
            borderTop: '1px solid #E0E0E0'
          }}
        >
          <Pagination
            count={5}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '14px'
              }
            }}
          />
        </Box>
      </Box>

      {/* Driver Details Modal */}
      <DriverDetailsModal
        driver={selectedDriver}
        open={showDriverDetails}
        onClose={handleCloseDriverDetails}
        isAddMode={isAddMode}
        onSave={handleSaveDriver}
      />
    </>
  );
};

export default DriversListWithModal;
