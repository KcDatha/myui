import React from 'react';
import { Box, Typography } from '@mui/material';
import ActiveFigmaCard from './ActiveFigmaCard';

const ActiveTab = () => {
  // Sample data matching the default structure used by New, Completed, and Rejected tabs
  const requests = [
    {
      id: '#AB123',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      phoneNumber: '+19875543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      plateNumber: 'ABC 1234',
      driverName: 'Cooper Dan'
    },
    {
      id: '#AB124',
      type: 'Round',
      time: '10:30 AM',
      date: '16 Jul 2025',
      name: 'John Doe',
      currentAddress: '456 Ave, Columbia, SC, 29201',
      returnDate: '22 July, 2025',
      phoneNumber: '+19875543211',
      destinationAddress: '789 Blvd, Raleigh, NC, 27601',
      passengerCount: '2 passengers',
      plateNumber: 'DEF 5678',
      driverName: 'Alex Johnson'
    },
    {
      id: '#AB125',
      type: 'One Way',
      time: '2:15 PM',
      date: '17 Jul 2025',
      name: 'John Doe',
      currentAddress: '321 Rd, Charleston, SC, 29401',
      returnDate: '23 July, 2025',
      phoneNumber: '+19875543212',
      destinationAddress: '654 Dr, Durham, NC, 27701',
      passengerCount: '3 passengers',
      plateNumber: 'GHI 9012',
      driverName: 'Sarah Davis'
    },
    {
      id: '#AB126',
      type: 'Round',
      time: '4:45 PM',
      date: '18 Jul 2025',
      name: 'John Doe',
      currentAddress: '987 Ln, Greenville, SC, 29601',
      returnDate: '25 July, 2025',
      phoneNumber: '+19875543213',
      destinationAddress: '147 Way, Winston-Salem, NC, 27101',
      passengerCount: '5 passengers',
      plateNumber: 'JKL 3456',
      driverName: 'Tom Miller'
    }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '800px',
        background: '#f0f1f8'
      }}
    >
      {/* Render all cards */}
      {requests.map((request, index) => (
        <ActiveFigmaCard
          key={index}
          request={request}
          index={index}
        />
      ))}

      {/* Pagination - positioned within the main container */}
      <Box
        sx={{
          position: 'absolute',
          width: '200px',
          height: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: `${150 + (requests.length * 200) + 30}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {/* Page Numbers */}
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#B0B0B0',
            cursor: 'pointer'
          }}
        >
          1
        </Typography>
        
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#B0B0B0',
            cursor: 'pointer'
          }}
        >
          &lt;
        </Typography>
        
        <Box
          sx={{
            width: '30px',
            height: '30px',
            background: '#E3F2FD',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #BBDEFB'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#1976D2'
            }}
          >
            3
          </Typography>
        </Box>
        
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#B0B0B0',
            cursor: 'pointer'
          }}
        >
          &gt;
        </Typography>
        
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: '#B0B0B0',
            cursor: 'pointer'
          }}
        >
          5
        </Typography>
      </Box>
    </Box>
  );
};

export default ActiveTab;
