import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  Box, 
  Typography, 
  Button, 
  Avatar,
  Switch,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

const DriverListModal = ({ open, onClose, onConfirm }) => {
  const drivers = [
    {
      id: 1,
      name: 'Carlos C',
      number: '+19876543210',
      carModel: 'Toyota Camry',
      accessibility: 'Wheel Chair',
      locationSharing: true,
      passengersAllowed: 4,
      status: 'Available'
    },
    {
      id: 2,
      name: 'Carlos C',
      number: '+19876543210',
      carModel: 'Toyota Camry',
      accessibility: 'Wheel Chair',
      locationSharing: true,
      passengersAllowed: 4,
      status: 'Busy'
    },
    {
      id: 3,
      name: 'Carlos C',
      number: '+19876543210',
      carModel: 'Toyota Camry',
      accessibility: 'Wheel Chair',
      locationSharing: false,
      passengersAllowed: 4,
      status: 'Unavailable'
    },
    {
      id: 4,
      name: 'Carlos C',
      number: '+19876543210',
      carModel: 'Toyota Camry',
      accessibility: 'Wheel Chair',
      locationSharing: true,
      passengersAllowed: 4,
      status: 'Busy'
    },
    {
      id: 5,
      name: 'Carlos C',
      number: '+19876543210',
      carModel: 'Toyota Camry',
      accessibility: 'Wheel Chair',
      locationSharing: false,
      passengersAllowed: 4,
      status: 'Available'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return '#4CAF50';
      case 'Busy':
        return '#FF5722';
      case 'Unavailable':
        return '#FFC107';
      default:
        return '#9E9E9E';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Available':
        return '#E8F5E8';
      case 'Busy':
        return '#FFEBEE';
      case 'Unavailable':
        return '#FFF8E1';
      default:
        return '#F5F5F5';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          width: '900px',
          height: '600px',
          borderRadius: '12px',
          position: 'relative'
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
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
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#666666'
              }}
            >
              Remind to book a Taxi Instead?
            </Typography>
            <IconButton onClick={onClose} sx={{ color: '#666666' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gap: 2,
            p: 2,
            backgroundColor: '#F5F5F5',
            borderBottom: '1px solid #E0E0E0'
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Name</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Number</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Car Model</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Accessibility</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Location Sharing</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Passengers Allowed</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#666' }}>Status</Typography>
        </Box>

        {/* Driver List */}
        <Box sx={{ maxHeight: '350px', overflowY: 'auto' }}>
          {drivers.map((driver) => (
            <Box
              key={driver.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                gap: 2,
                p: 2,
                borderBottom: '1px solid #F0F0F0',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: '#F9F9F9'
                }
              }}
            >
              {/* Name with Avatar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 32, height: 32, backgroundColor: '#E0E0E0' }}>
                  <PersonIcon sx={{ fontSize: 20, color: '#666' }} />
                </Avatar>
                <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
                  {driver.name}
                </Typography>
              </Box>

              {/* Number */}
              <Typography sx={{ fontSize: '14px', color: '#666' }}>
                {driver.number}
              </Typography>

              {/* Car Model */}
              <Typography sx={{ fontSize: '14px', color: '#666' }}>
                {driver.carModel}
              </Typography>

              {/* Accessibility */}
              <Typography sx={{ fontSize: '14px', color: '#666' }}>
                {driver.accessibility}
              </Typography>

              {/* Location Sharing */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Switch
                  checked={driver.locationSharing}
                  size="small"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#2196F3'
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#2196F3'
                    }
                  }}
                />
                <Typography sx={{ fontSize: '12px', color: '#666', ml: 1 }}>
                  {driver.locationSharing ? 'Yes' : 'No'}
                </Typography>
              </Box>

              {/* Passengers Allowed */}
              <Typography sx={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
                {driver.passengersAllowed}
              </Typography>

              {/* Status */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 2,
                  py: 0.5,
                  borderRadius: '12px',
                  backgroundColor: getStatusBgColor(driver.status),
                  border: `1px solid ${getStatusColor(driver.status)}`,
                  minWidth: '80px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: getStatusColor(driver.status)
                  }}
                >
                  {driver.status}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Footer Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            p: 3,
            borderTop: '1px solid #E0E0E0'
          }}
        >
          <Button
            variant="contained"
            onClick={onConfirm}
            sx={{
              backgroundColor: '#FF5722',
              color: 'white',
              px: 4,
              py: 1,
              borderRadius: '6px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#E64A19'
              }
            }}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: '#FF5722',
              color: '#FF5722',
              px: 4,
              py: 1,
              borderRadius: '6px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#E64A19',
                backgroundColor: '#FFF3E0'
              }
            }}
          >
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DriverListModal;
