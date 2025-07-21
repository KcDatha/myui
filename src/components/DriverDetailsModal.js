import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Tabs,
  Tab,
  Button,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import {
  Close,
  LocationOn,
  Verified,
  Edit,
  Save
} from '@mui/icons-material';

const DriverDetailsModal = ({ driver, open, onClose, isAddMode = false, onSave }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditMode, setIsEditMode] = useState(isAddMode);
  const [editedDriver, setEditedDriver] = useState({});

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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

  // Default driver data for add mode
  const defaultDriver = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phoneNumber: '+19876543210',
    currentAddress: '123 St, Clemson, SC, 12345',
    car: 'Toyota Camry',
    accessibility: 'Wheel Chair',
    locationSharing: 'Yes',
    status: 'Active'
  };

  const displayDriver = driver || defaultDriver;

  // Initialize edited driver data when modal opens or driver changes
  useEffect(() => {
    if (open) {
      setEditedDriver(displayDriver);
      setIsEditMode(isAddMode);
    }
  }, [open, displayDriver, isAddMode]);

  // Force edit mode for testing
  useEffect(() => {
    if (open) {
      setIsEditMode(true);
    }
  }, [open]);

  const handleEdit = () => {
    console.log('Edit button clicked, setting edit mode to true');
    setIsEditMode(true);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(editedDriver, isAddMode);
    }
    setIsEditMode(false);
    onClose();
  };

  const handleCancel = () => {
    setEditedDriver(displayDriver);
    setIsEditMode(false);
    if (isAddMode) {
      onClose();
    }
  };

  const handleInputChange = (field, value) => {
    setEditedDriver(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const currentDriver = isEditMode ? editedDriver : displayDriver;

  // Debug logging
  console.log('DriverDetailsModal render:', { isEditMode, isAddMode, open });

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
          zIndex: 1299,
          display: open ? 'block' : 'none'
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          height: '100vh',
          backgroundColor: 'white',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
          zIndex: 1300,
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #E0E0E0'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '20px',
            color: '#000000'
          }}
        >
          Driver's List
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      {/* Driver Profile Section */}
      <Box sx={{ p: 3, borderBottom: '1px solid #E0E0E0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              backgroundColor: '#000000'
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: '#000000',
                mb: 0.5
              }}
            >
              {currentDriver.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#666666',
                mb: 0.5
              }}
            >
              {currentDriver.email}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#666666'
              }}
            >
              {currentDriver.phoneNumber}
            </Typography>
          </Box>
        </Box>

        {/* Location and Status */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOn sx={{ fontSize: '16px', color: '#666666' }} />
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: '#666666'
              }}
            >
              Clemson, SC
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Verified sx={{ fontSize: '16px', color: '#4CAF50' }} />
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '12px',
                color: '#666666'
              }}
            >
              Verified
            </Typography>
          </Box>
          <Chip
            label={currentDriver.status}
            sx={{
              backgroundColor: getStatusColor(currentDriver.status),
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '10px',
              height: '20px'
            }}
          />
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: '1px solid #E0E0E0' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'none',
              color: '#666666',
              '&.Mui-selected': {
                color: '#4285f4'
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#4285f4'
            }
          }}
        >
          <Tab label="Profile" />
          <Tab label="History" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
        {activeTab === 0 && (
          <Box>
            {/* Details Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#000000'
                }}
              >
                Details
              </Typography>
              {!isEditMode ? (
                <Button
                  variant="text"
                  startIcon={<Edit />}
                  onClick={handleEdit}
                  sx={{
                    color: '#4285f4',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '12px',
                    textTransform: 'none'
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="text"
                    startIcon={<Save />}
                    onClick={handleSave}
                    sx={{
                      color: '#4CAF50',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      textTransform: 'none'
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleCancel}
                    sx={{
                      color: '#FF5722',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      textTransform: 'none'
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </Box>

            {/* Details List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Name */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Name
                </Typography>
                {isEditMode ? (
                  <TextField
                    value={currentDriver.name || ''}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    size="small"
                    sx={{ width: '200px', '& .MuiOutlinedInput-root': { fontSize: '14px' } }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.name}
                  </Typography>
                )}
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Email
                </Typography>
                {isEditMode ? (
                  <TextField
                    value={currentDriver.email || ''}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    size="small"
                    type="email"
                    sx={{ width: '200px', '& .MuiOutlinedInput-root': { fontSize: '14px' } }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.email}
                  </Typography>
                )}
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Phone
                </Typography>
                {isEditMode ? (
                  <TextField
                    value={currentDriver.phoneNumber || ''}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    size="small"
                    sx={{ width: '200px', '& .MuiOutlinedInput-root': { fontSize: '14px' } }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.phoneNumber}
                  </Typography>
                )}
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Address
                </Typography>
                {isEditMode ? (
                  <TextField
                    value={currentDriver.currentAddress || ''}
                    onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                    size="small"
                    sx={{ width: '200px', '& .MuiOutlinedInput-root': { fontSize: '14px' } }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.currentAddress}
                  </Typography>
                )}
              </Box>

              {/* Verification - Read only */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Verification
                </Typography>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                  Verified
                </Typography>
              </Box>

              {/* Car */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Car
                </Typography>
                {isEditMode ? (
                  <TextField
                    value={currentDriver.car || ''}
                    onChange={(e) => handleInputChange('car', e.target.value)}
                    size="small"
                    sx={{ width: '200px', '& .MuiOutlinedInput-root': { fontSize: '14px' } }}
                  />
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.car}
                  </Typography>
                )}
              </Box>

              {/* Passengers Capacity - Read only for now */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Passengers Capacity
                </Typography>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                  4
                </Typography>
              </Box>

              {/* Accessibility Features */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Accessibility Features
                </Typography>
                {isEditMode ? (
                  <FormControl size="small" sx={{ width: '200px' }}>
                    <Select
                      value={currentDriver.accessibility || ''}
                      onChange={(e) => handleInputChange('accessibility', e.target.value)}
                      sx={{ fontSize: '14px' }}
                    >
                      <MenuItem value="Wheel Chair">Wheel Chair</MenuItem>
                      <MenuItem value="None">None</MenuItem>
                      <MenuItem value="Hearing Aid">Hearing Aid</MenuItem>
                      <MenuItem value="Visual Aid">Visual Aid</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.accessibility}
                  </Typography>
                )}
              </Box>

              {/* Location Sharing */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Location Sharing
                </Typography>
                {isEditMode ? (
                  <FormControl size="small" sx={{ width: '200px' }}>
                    <Select
                      value={currentDriver.locationSharing || ''}
                      onChange={(e) => handleInputChange('locationSharing', e.target.value)}
                      sx={{ fontSize: '14px' }}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#000000' }}>
                    {currentDriver.locationSharing}
                  </Typography>
                )}
              </Box>

              {/* Status */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#666666' }}>
                  Status
                </Typography>
                {isEditMode ? (
                  <FormControl size="small" sx={{ width: '200px' }}>
                    <Select
                      value={currentDriver.status || ''}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      sx={{ fontSize: '14px' }}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Assigned">Assigned</MenuItem>
                      <MenuItem value="Away">Away</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: getStatusColor(currentDriver.status) }}>
                    {currentDriver.status}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#666666',
                textAlign: 'center',
                mt: 4
              }}
            >
              No history available
            </Typography>
          </Box>
        )}
      </Box>

      {/* Submit Button */}
      <Box sx={{ p: 3, borderTop: '1px solid #E0E0E0' }}>
        <Button
          variant="contained"
          fullWidth
          onClick={isEditMode ? handleSave : onClose}
          sx={{
            backgroundColor: '#FF5722',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'none',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#E64A19'
            }
          }}
        >
          {isEditMode ? 'Submit' : 'Close'}
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default DriverDetailsModal;
