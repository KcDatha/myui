import React from 'react';
import { Box, Typography } from '@mui/material';
import ActiveFigmaCard from './ActiveFigmaCard';

const ActiveTab = () => {
  // Sample data matching the Active tab design
  const requests = [
    {
      id: '#AB123',
      name: 'David Johnson',
      time: '3:20 PM',
      date: '15 Jul 2025',
      type: 'One Way',
      currentAddress: '111 Main St, Florence, SC, 29501',
      returnDate: '25 July, 2025',
      phoneNumber: '+19876543215',
      destinationAddress: '222 Oak Ave, Asheville, NC, 28801',
      passengerCount: '2 passengers',
      plateNumber: 'MNO 1234',
      driverName: 'Chris Taylor',
      status: 'In Progress'
    },
    {
      id: '#AB129',
      name: 'Susan Miller',
      time: '10:30 AM',
      date: '20 Jul 2025',
      type: 'Round',
      currentAddress: '333 Pine St, Sumter, SC, 29150',
      returnDate: '27 July, 2025',
      phoneNumber: '+19876543216',
      destinationAddress: '444 Elm Dr, Raleigh, NC, 27601',
      passengerCount: '4 passengers',
      plateNumber: 'PQR 5678',
      driverName: 'Mark Thompson',
      status: 'En Route'
    },
    {
      id: '#AB130',
      name: 'Jennifer Garcia',
      time: '2:15 PM',
      date: '20 Jul 2025',
      type: 'One Way',
      currentAddress: '555 Cedar Ln, Anderson, SC, 29621',
      returnDate: '26 July, 2025',
      phoneNumber: '+19876543217',
      destinationAddress: '666 Maple St, Durham, NC, 27701',
      passengerCount: '3 passengers',
      plateNumber: 'STU 9012',
      driverName: 'Kevin Brown',
      status: 'Assigned'
    },
    {
      id: '#AB131',
      name: 'Michael Rodriguez',
      time: '4:45 PM',
      date: '21 Jul 2025',
      type: 'Round',
      currentAddress: '777 Birch Ave, Greenwood, SC, 29646',
      returnDate: '29 July, 2025',
      phoneNumber: '+19876543218',
      destinationAddress: '888 Willow Rd, Winston-Salem, NC, 27101',
      passengerCount: '5 passengers',
      plateNumber: 'VWX 3456',
      driverName: 'Amanda Wilson',
      status: 'Scheduled'
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
          showStatus={index === 1} // Show status for second card
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
