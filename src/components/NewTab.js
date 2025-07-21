import React from 'react';
import { Box, Typography } from '@mui/material';
import NewFigmaCard from './NewFigmaCard';

const NewTab = () => {
  // Sample data matching the Figma design
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
      passengerCount: '4 passengers'
    },
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
      passengerCount: '4 passengers'
    },
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
      passengerCount: '4 passengers'
    },
    {
      id: '#AB123',
      type: 'Round',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      phoneNumber: '+19875543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers'
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
        <NewFigmaCard
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

export default NewTab;
