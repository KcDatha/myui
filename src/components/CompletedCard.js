import React from 'react';
import { Box, Typography } from '@mui/material';

const CompletedFigmaCard = ({ request, index, showStatus = false }) => {
  // Calculate top position based on index (starting at 150px for first item after header)
  const topPosition = 150 + (index * 200); // 200px spacing between cards

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '1053px',
        height: '177px',
        top: `${topPosition}px`,
        left: '38px',
        background: '#FFFFFF',
        border: '1px solid #B0B0B0',
        borderRadius: '6px',
        opacity: 1
      }}
    >
      {/* Green Left Border */}
      <Box
        sx={{
          position: 'absolute',
          width: '5px',
          height: '177px',
          left: 0,
          top: 0,
          background: '#4CAF50',
          borderRadius: '6px 0px 0px 6px'
        }}
      />

      {/* Pickup Details Section */}
      <Box
        sx={{
          position: 'absolute',
          width: '177px',
          height: '177px',
          left: '5px',
          top: 0,
          background: '#F1F8E9',
          borderRadius: '0 0 0 6px'
        }}
      >
        {/* Unique ID */}
        <Typography
          sx={{
            position: 'absolute',
            left: '52px',
            top: '10px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: '16px',
            color: '#808080',
            textAlign: 'center'
          }}
        >
          {request.id}
        </Typography>

        {/* Trip Type Badge */}
        <Box
          sx={{
            position: 'absolute',
            width: '91px',
            height: '22px',
            left: '43px',
            top: '45px',
            background: '#FFFFFF',
            border: '1px solid #B0B0B0',
            boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '10px',
              lineHeight: '12px',
              color: '#4A4A4A',
              textAlign: 'center'
            }}
          >
            {request.type}
          </Typography>
        </Box>

        {/* Time */}
        <Typography
          sx={{
            position: 'absolute',
            left: '39px',
            top: '80px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '23px',
            lineHeight: '28px',
            color: '#000000',
            textAlign: 'center'
          }}
        >
          {request.time}
        </Typography>

        {/* Date */}
        <Typography
          sx={{
            position: 'absolute',
            left: '38px',
            top: '108px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#808080',
            textAlign: 'center'
          }}
        >
          {request.date}
        </Typography>

        {/* Pickup Details Button */}
        <Box
          sx={{
            position: 'absolute',
            width: '125px',
            height: '25px',
            left: '26px',
            top: '142px',
            background: '#C8E6C9',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #A5D6A7',
            '&:hover': {
              background: '#A5D6A7'
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '13px',
              color: '#2E7D32',
              textAlign: 'center'
            }}
          >
            Pickup Details
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      {/* Name */}
      <Typography
        sx={{
          position: 'absolute',
          left: '217px',
          top: '28px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '27px',
          color: '#000000'
        }}
      >
        {request.name}
      </Typography>

      {/* Current Address Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '428px',
          top: '23px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Current Address:
      </Typography>

      {/* Current Address Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '403px',
          top: '43px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.currentAddress}
      </Typography>

      {/* Return Date Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '630px',
          top: '23px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Return Date:
      </Typography>

      {/* Return Date Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '630px',
          top: '43px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.returnDate}
      </Typography>

      {/* Phone Number Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '236px',
          top: '106px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Phone Number
      </Typography>

      {/* Phone Number Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '230px',
          top: '126px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.phoneNumber}
      </Typography>

      {/* Destination Address Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '422px',
          top: '107px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Destination Address:
      </Typography>

      {/* Destination Address Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '403px',
          top: '127px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.destinationAddress}
      </Typography>

      {/* Passenger Count Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '624px',
          top: '107px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Passenger Count:
      </Typography>

      {/* Passenger Count Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '631px',
          top: '127px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.passengerCount}
      </Typography>

      {/* Plate Number Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '780px',
          top: '23px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Plate Number:
      </Typography>

      {/* Plate Number Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '780px',
          top: '43px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.plateNumber}
      </Typography>

      {/* Driver Name Label */}
      <Typography
        sx={{
          position: 'absolute',
          left: '780px',
          top: '107px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '10px',
          lineHeight: '12px',
          color: '#7F7F7F',
          textAlign: 'center'
        }}
      >
        Driver Name:
      </Typography>

      {/* Driver Name Value */}
      <Typography
        sx={{
          position: 'absolute',
          left: '780px',
          top: '127px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          lineHeight: '13px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        {request.driverName}
      </Typography>

      {/* Status Indicator for specific cards */}
      {showStatus && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#4CAF50',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: 12,
            fontWeight: 'bold',
            zIndex: 10,
            boxShadow: '0 2px 4px rgba(76, 175, 80, 0.3)'
          }}
        >
          1053 x 177
        </Box>
      )}
    </Box>
  );
};

export default CompletedFigmaCard;
