import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const FigmaRequestCard = ({ request }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '1053px',
        minWidth: '800px',
        height: '177px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
        borderRadius: '6px',
        mb: 3,
        mx: 'auto',
        '@media (max-width: 1200px)': {
          minWidth: '700px',
          transform: 'scale(0.85)',
          transformOrigin: 'left top'
        },
        '@media (max-width: 900px)': {
          minWidth: '600px',
          transform: 'scale(0.7)',
          transformOrigin: 'left top'
        }
      }}
    >
      {/* Blue Left Border */}
      <Box
        sx={{
          position: 'absolute',
          width: '5px',
          height: '177px',
          left: 0,
          top: 0,
          background: '#487FFF',
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
          background: '#E8EFFF',
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
            background: '#BBCFFF',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '13px',
              color: '#000000',
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

      {/* Approve Button */}
      <Button
        sx={{
          position: 'absolute',
          width: '137px',
          height: '37px',
          left: '838px',
          top: '38px',
          background: '#3346BD',
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
          borderRadius: '33px',
          '&:hover': {
            background: '#2a3a9d'
          }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FFFFFF',
            textTransform: 'none'
          }}
        >
          Approve
        </Typography>
      </Button>

      {/* Reject Button */}
      <Button
        sx={{
          position: 'absolute',
          width: '137px',
          height: '36px',
          left: '838px',
          top: '99px',
          background: '#FFFFFF',
          border: '1px solid #EE1A18',
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
          borderRadius: '33px',
          '&:hover': {
            background: '#fef5f5'
          }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '15px',
            color: '#EE1A18',
            textTransform: 'none'
          }}
        >
          Reject
        </Typography>
      </Button>
    </Box>
  );
};

export default FigmaRequestCard;
