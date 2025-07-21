import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid
} from '@mui/material';

const ActiveRequestCard = ({ request, showStatus = false }) => {
  return (
    <Card
      sx={{
        mb: 1.5,
        borderRadius: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        border: '1px solid #e0e0e0',
        position: 'relative',
        backgroundColor: '#fefefe'
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Grid container spacing={1} alignItems="center">
          {/* Left Section - ID, Type, Time, Date, Button */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <Box
                sx={{
                  width: 3,
                  height: 60,
                  backgroundColor: '#4285f4',
                  borderRadius: 1
                }}
              />
              <Box>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  {request.id}
                </Typography>
                <Chip
                  label={request.type}
                  size="small"
                  sx={{
                    backgroundColor: '#fff3e0',
                    color: '#f57c00',
                    fontSize: 10,
                    height: 20,
                    mb: 1
                  }}
                />
                <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 0.5 }}>
                  {request.time}
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#666', mb: 1 }}>
                  {request.date}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#fff3e0',
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.5,
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#ffe0b2'
                    }
                  }}
                >
                  <Typography sx={{ fontSize: 10, color: '#f57c00', fontWeight: 500 }}>
                    Pickup Details
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Name */}
          <Grid item xs={12} md={1.8}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
              {request.name}
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#999', mt: 0.5 }}>
              Phone Number
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.phoneNumber}
            </Typography>
          </Grid>

          {/* Current Address */}
          <Grid item xs={12} md={2.2}>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5 }}>
              Current Address:
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.currentAddress}
            </Typography>
          </Grid>

          {/* Destination Address */}
          <Grid item xs={12} md={2.2}>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5 }}>
              Destination Address:
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.destinationAddress}
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5, mt: 1 }}>
              Passenger Count:
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.passengerCount}
            </Typography>
          </Grid>

          {/* Return Date */}
          <Grid item xs={12} md={1.8}>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5 }}>
              Return Date:
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.returnDate}
            </Typography>
          </Grid>

          {/* Plate Number */}
          <Grid item xs={12} md={2}>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5 }}>
              Plate Number
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333', mb: 1 }}>
              {request.plateNumber}
            </Typography>
            <Typography sx={{ fontSize: 11, color: '#999', mb: 0.5 }}>
              Driver Name
            </Typography>
            <Typography sx={{ fontSize: 12, color: '#333' }}>
              {request.driverName}
            </Typography>
          </Grid>
        </Grid>

        {/* Status Indicator for specific cards */}
        {showStatus && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#2196f3',
              color: 'white',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: 12,
              fontWeight: 'bold',
              zIndex: 10,
              boxShadow: '0 2px 4px rgba(33, 150, 243, 0.3)'
            }}
          >
            1053 x 177
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ActiveRequestCard;
