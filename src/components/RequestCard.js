import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid
} from '@mui/material';

const RequestCard = ({ request }) => {
  return (
    <Card 
      sx={{ 
        mb: 2, 
        borderRadius: 3,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Left Blue Border and ID */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box
                sx={{
                  width: 4,
                  height: 80,
                  backgroundColor: '#4285f4',
                  borderRadius: 2
                }}
              />
              <Box>
                <Typography sx={{ fontSize: 14, color: '#666', mb: 1 }}>
                  {request.id}
                </Typography>
                <Chip
                  label={request.type}
                  size="small"
                  sx={{
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    fontSize: 12,
                    height: 24,
                    mb: 2
                  }}
                />
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', mb: 0.5 }}>
                  {request.time}
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#666', mb: 2 }}>
                  {request.date}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    fontSize: 12,
                    textTransform: 'none',
                    borderColor: '#e0e0e0',
                    color: '#666',
                    '&:hover': {
                      borderColor: '#ccc'
                    }
                  }}
                >
                  Pickup Details
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {/* Name and Address */}
              <Grid item xs={12} md={4}>
                <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 1 }}>
                  {request.name}
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  Current Address:
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#333', mb: 2 }}>
                  {request.currentAddress}
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  Phone Number:
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#333' }}>
                  {request.phoneNumber}
                </Typography>
              </Grid>

              {/* Destination */}
              <Grid item xs={12} md={4}>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  Destination Address:
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#333', mb: 2 }}>
                  {request.destinationAddress}
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  Passenger Count:
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#333' }}>
                  {request.passengerCount}
                </Typography>
              </Grid>

              {/* Return Date and Additional Info */}
              <Grid item xs={12} md={4}>
                <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                  Return Date:
                </Typography>
                <Typography sx={{ fontSize: 14, color: '#333', mb: 2 }}>
                  {request.returnDate}
                </Typography>
                {request.plateNumber && (
                  <>
                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                      Plate Number:
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: '#333', mb: 2 }}>
                      {request.plateNumber}
                    </Typography>
                  </>
                )}
                {request.driverName && (
                  <>
                    <Typography sx={{ fontSize: 12, color: '#999', mb: 0.5 }}>
                      Driver Name:
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: '#333' }}>
                      {request.driverName}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-end' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#4285f4',
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontSize: 14,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#3367d6'
                  }
                }}
              >
                Approve
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#ff4444',
                  color: '#ff4444',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  fontSize: 14,
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: '#ff3333',
                    backgroundColor: '#fff5f5'
                  }
                }}
              >
                Reject
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RequestCard;
