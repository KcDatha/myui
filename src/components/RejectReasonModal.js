import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  Box, 
  Typography, 
  Button, 
  TextField,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RejectReasonModal = ({ open, onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (reason.trim()) {
      onSubmit(reason);
      setReason(''); // Clear the input after submission
    }
  };

  const handleClose = () => {
    setReason(''); // Clear the input when closing
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          width: '400px',
          borderRadius: '12px',
          position: 'relative'
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 3,
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
            Reason
          </Typography>
          
          <IconButton onClick={handleClose} sx={{ color: '#666666' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ p: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="What's the reason?"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#F9F9F9',
                '& fieldset': {
                  borderColor: '#E0E0E0',
                },
                '&:hover fieldset': {
                  borderColor: '#BDBDBD',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF5722',
                  borderWidth: '2px'
                }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#333333',
                '&::placeholder': {
                  color: '#999999',
                  opacity: 1
                }
              }
            }}
          />
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 3,
            borderTop: '1px solid #E0E0E0'
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!reason.trim()}
            sx={{
              backgroundColor: '#FF5722',
              color: 'white',
              px: 4,
              py: 1,
              borderRadius: '6px',
              textTransform: 'none',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              '&:hover': {
                backgroundColor: '#E64A19'
              },
              '&:disabled': {
                backgroundColor: '#CCCCCC',
                color: '#666666'
              }
            }}
          >
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RejectReasonModal;
