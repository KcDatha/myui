import React from 'react';
import { Box, Typography } from '@mui/material';
import RejectedFigmaCard from './RejectedFigmaCard';

const RejectedTab = () => {
  // Sample data matching the Figma design for rejected requests
  const requests = [
    {
      id: '#AB123',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      rejectedBy: 'John Doe',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      reason: 'No Longer Required'
    },
    {
      id: '#AB123',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      rejectedBy: 'Admin',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      reason: 'No Drivers Available'
    },
    {
      id: '#AB123',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      rejectedBy: 'John Doe',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      reason: 'No Longer Required'
    },
    {
      id: '#AB123',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      rejectedBy: 'Admin',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      reason: 'No Drivers Available'
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
        <RejectedFigmaCard
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
            background: '#FFEBEE',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #FFCDD2'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#D32F2F'
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

export default RejectedTab;
