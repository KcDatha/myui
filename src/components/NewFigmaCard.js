import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import DriverListModal from './DriverListModal';
import RejectReasonModal from './RejectReasonModal';

const NewFigmaCard = ({ request, index }) => {
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  // Calculate top position based on index (starting at 150px for first item after header)
  const topPosition = 150 + (index * 200); // 200px spacing between cards

  const handleApprove = () => {
    setIsDriverModalOpen(true);
  };

  const handleDriverModalClose = () => {
    setIsDriverModalOpen(false);
  };

  const handleDriverConfirm = () => {
    // Handle driver confirmation logic here
    console.log('Driver confirmed for request:', request.id);
    setIsDriverModalOpen(false);
  };

  const handleReject = () => {
    setIsRejectModalOpen(true);
  };

  const handleRejectModalClose = () => {
    setIsRejectModalOpen(false);
  };

  const handleRejectSubmit = (reason) => {
    console.log('Rejecting request:', request.id, 'with reason:', reason);
    setIsRejectModalOpen(false);
    // Here you would typically call an API or update state to reject the request
  };

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
      {/* Blue Left Border */}
      <Box
        sx={{
          position: 'absolute',
          width: '5px',
          height: '177px',
          left: 0,
          top: 0,
          background: '#4A90E2',
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
          background: '#E3F2FD',
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
            background: '#BBDEFB',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #90CAF9',
            '&:hover': {
              background: '#90CAF9'
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              lineHeight: '13px',
              color: '#1976D2',
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
        variant="contained"
        onClick={handleApprove}
        sx={{
          position: 'absolute',
          width: '100px',
          height: '35px',
          left: '845px',
          top: '25px',
          background: '#3F51B5',
          borderRadius: '20px',
          textTransform: 'none',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          color: '#FFFFFF',
          '&:hover': {
            background: '#303F9F'
          }
        }}
      >
        Approve
      </Button>

      {/* Reject Button */}
      <Button
        variant="outlined"
        onClick={handleReject}
        sx={{
          position: 'absolute',
          width: '100px',
          height: '35px',
          left: '845px',
          top: '75px',
          background: '#FFFFFF',
          border: '2px solid #F44336',
          borderRadius: '20px',
          textTransform: 'none',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          color: '#F44336',
          '&:hover': {
            background: '#FFEBEE',
            border: '2px solid #F44336'
          }
        }}
      >
        Reject
      </Button>

      {/* Driver List Modal */}
      <DriverListModal
        open={isDriverModalOpen}
        onClose={handleDriverModalClose}
        onConfirm={handleDriverConfirm}
      />

      {/* Reject Reason Modal */}
      <RejectReasonModal
        open={isRejectModalOpen}
        onClose={handleRejectModalClose}
        onSubmit={handleRejectSubmit}
      />
    </Box>
  );
};

export default NewFigmaCard;
