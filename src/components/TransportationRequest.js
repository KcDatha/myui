import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Pagination,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSidebar } from '../context/SidebarContext';
import Sidebar from './Sidebar';
import Header from './Header';
import RequestCard from './RequestCard';
import NewTab from './NewTab';
import CompletedTab from './CompletedTab';
import ActiveTab from './ActiveTab';
import RejectedTab from './RejectedTab';

const TransportationRequest = ({ setCurrentPage: setAppCurrentPage }) => {
  const { isCollapsed } = useSidebar();
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Sample data for NEW requests
  const newRequests = [
    {
      id: '#AB123',
      name: 'John Doe',
      time: '3:20 PM',
      date: '15 Jul 2025',
      type: 'One Way',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      plateNumber: 'ABC 1234',
      driverName: 'Cooper Dan'
    },
    {
      id: '#AB124',
      name: 'Jane Smith',
      time: '4:15 PM',
      date: '16 Jul 2025',
      type: 'Round',
      currentAddress: '456 Ave, Greenville, SC, 29601',
      returnDate: '22 July, 2025',
      phoneNumber: '+19876543211',
      destinationAddress: '789 Blvd, Atlanta, GA, 30309',
      passengerCount: '2 passengers',
      plateNumber: 'XYZ 5678',
      driverName: 'Mike Johnson'
    },
    {
      id: '#AB125',
      name: 'Robert Wilson',
      time: '2:30 PM',
      date: '17 Jul 2025',
      type: 'One Way',
      currentAddress: '789 Road, Columbia, SC, 29201',
      returnDate: '25 July, 2025',
      phoneNumber: '+19876543212',
      destinationAddress: '321 Street, Charleston, SC, 29401',
      passengerCount: '6 passengers',
      plateNumber: 'DEF 9012',
      driverName: 'Sarah Davis'
    },
    {
      id: '#AB126',
      name: 'Emily Brown',
      time: '1:45 PM',
      date: '18 Jul 2025',
      type: 'Round',
      currentAddress: '654 Lane, Spartanburg, SC, 29301',
      returnDate: '28 July, 2025',
      phoneNumber: '+19876543213',
      destinationAddress: '987 Drive, Savannah, GA, 31401',
      passengerCount: '3 passengers',
      plateNumber: 'GHI 3456',
      driverName: 'Tom Wilson'
    },
    {
      id: '#AB127',
      name: 'Michael Davis',
      time: '5:00 PM',
      date: '19 Jul 2025',
      type: 'One Way',
      currentAddress: '321 Circle, Rock Hill, SC, 29730',
      returnDate: '30 July, 2025',
      phoneNumber: '+19876543214',
      destinationAddress: '654 Plaza, Myrtle Beach, SC, 29577',
      passengerCount: '5 passengers',
      plateNumber: 'JKL 7890',
      driverName: 'Lisa Anderson'
    }
  ];

  // Sample data for ACTIVE requests
  const activeRequests = [
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

  // Sample data for COMPLETED requests
  const completedRequests = [
    {
      id: '#AB120',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      plateNumber: 'ABC 1234',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      driverName: 'Cooper Dan'
    },
    {
      id: '#AB121',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      plateNumber: 'ABC 1234',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      driverName: 'Cooper Dan'
    },
    {
      id: '#AB122',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      plateNumber: 'ABC 1234',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      driverName: 'Cooper Dan'
    },
    {
      id: '#AB119',
      type: 'One Way',
      time: '3:20 PM',
      date: '15 Jul 2025',
      name: 'John Doe',
      currentAddress: '123 St, Clemson, SC, 12345',
      returnDate: '20 July, 2025',
      plateNumber: 'ABC 1234',
      phoneNumber: '+19876543210',
      destinationAddress: '567 St, Charlotte, NC, 23456',
      passengerCount: '4 passengers',
      driverName: 'Cooper Dan'
    }
  ];

  // Get current tab data
  const getCurrentTabData = () => {
    switch (activeTab) {
      case 0: return newRequests;
      case 1: return activeRequests;
      case 2: return []; // Rejected requests
      case 3: return completedRequests; // Completed requests
      default: return newRequests;
    }
  };

  const currentData = getCurrentTabData();
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = currentData.slice(startIndex, endIndex);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Sidebar setCurrentPage={setAppCurrentPage} />

      <Box sx={{
        flexGrow: 1,
        p: (activeTab === 1 || activeTab === 0 || activeTab === 2 || activeTab === 3) ? 0 : 3, // No padding for Active, New, Rejected, and Completed tabs
        marginLeft: isCollapsed ? '60px' : '280px', // Account for fixed sidebar width
        marginTop: '66px', // Account for fixed header height
        transition: 'margin-left 0.3s ease',
        // Active tab specific styling
        ...(activeTab === 1 && {
          position: 'relative',
          width: '1129px',
          height: '958px',
          background: '#F0F1F8',
          left: '31px', // Offset from sidebar (311px - 280px)
          top: 0
        }),
        // New tab specific styling
        ...(activeTab === 0 && {
          position: 'relative',
          width: '1129px',
          height: '958px',
          background: '#F0F1F8',
          left: '31px', // Offset from sidebar (311px - 280px)
          top: 0
        }),
        // Rejected tab specific styling
        ...(activeTab === 2 && {
          position: 'relative',
          width: '1129px',
          height: '958px',
          background: '#F0F1F8',
          left: '31px', // Offset from sidebar (311px - 280px)
          top: 0
        }),
        // Completed tab specific styling
        ...(activeTab === 3 && {
          position: 'relative',
          width: '1129px',
          height: '958px',
          background: '#F0F1F8',
          left: '31px', // Offset from sidebar (311px - 280px)
          top: 0
        })
      }}>
        {/* Render New tab with special layout */}
        {activeTab === 0 ? (
          <>
            {/* Header for New tab */}
            <Box sx={{
              position: 'absolute',
              left: '38px',
              top: '38px',
              zIndex: 10,
              width: '1053px'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#000000'
                  }}
                >
                  Transportation Request
                </Typography>

                {/* Search Bar */}
                <TextField
                  placeholder="Search"
                  size="small"
                  sx={{
                    width: '300px',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: '#B0B0B0'
                      },
                      '&:hover fieldset': {
                        borderColor: '#4A90E2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#4A90E2'
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#B0B0B0' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Tabs for New tab */}
              <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                  <Tab
                    label="New"
                    sx={{
                      color: activeTab === 0 ? '#ff4444' : '#666',
                      fontWeight: activeTab === 0 ? 'bold' : 'normal'
                    }}
                  />
                  <Tab label="Active" sx={{ color: '#666' }} />
                  <Tab label="Rejected" sx={{ color: '#666' }} />
                  <Tab label="Completed" sx={{ color: '#666' }} />
                </Tabs>
              </Box>
            </Box>

            {/* New tab content */}
            <NewTab />
          </>
        ) : activeTab === 3 ? (
          <>
            {/* Header for Completed tab */}
            <Box sx={{
              position: 'absolute',
              left: '38px',
              top: '38px',
              zIndex: 10,
              width: '1053px'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#000000'
                  }}
                >
                  Transportation Request
                </Typography>

                {/* Search Bar */}
                <TextField
                  placeholder="Search"
                  size="small"
                  sx={{
                    width: '300px',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: '#B0B0B0'
                      },
                      '&:hover fieldset': {
                        borderColor: '#2E7D32'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#2E7D32'
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#B0B0B0' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Tabs for Completed tab */}
              <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                  <Tab label="New" sx={{ color: '#666' }} />
                  <Tab label="Active" sx={{ color: '#666' }} />
                  <Tab label="Rejected" sx={{ color: '#666' }} />
                  <Tab
                    label="Completed"
                    sx={{
                      color: activeTab === 3 ? '#2E7D32' : '#666',
                      fontWeight: activeTab === 3 ? 'bold' : 'normal'
                    }}
                  />
                </Tabs>
              </Box>
            </Box>

            {/* Completed tab content */}
            <CompletedTab />
          </>
        ) : activeTab === 2 ? (
          <>
            {/* Header for Rejected tab */}
            <Box sx={{
              position: 'absolute',
              left: '38px',
              top: '38px',
              zIndex: 10,
              width: '1053px'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#000000'
                  }}
                >
                  Transportation Request
                </Typography>

                {/* Search Bar */}
                <TextField
                  placeholder="Search"
                  size="small"
                  sx={{
                    width: '300px',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: '#B0B0B0'
                      },
                      '&:hover fieldset': {
                        borderColor: '#F44336'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#F44336'
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#B0B0B0' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Tabs for Rejected tab */}
              <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                  <Tab label="New" sx={{ color: '#666' }} />
                  <Tab label="Active" sx={{ color: '#666' }} />
                  <Tab
                    label="Rejected"
                    sx={{
                      color: activeTab === 2 ? '#F44336' : '#666',
                      fontWeight: activeTab === 2 ? 'bold' : 'normal'
                    }}
                  />
                  <Tab label="Completed" sx={{ color: '#666' }} />
                </Tabs>
              </Box>
            </Box>

            {/* Rejected tab content */}
            <RejectedTab />
          </>
        ) : activeTab === 1 ? (
          <>
            {/* Header for Active tab */}
            <Box sx={{
              position: 'absolute',
              left: '38px',
              top: '38px',
              zIndex: 10,
              width: '1053px'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '39px',
                    color: '#000000'
                  }}
                >
                  Transportation Request
                </Typography>

                {/* Search Bar */}
                <TextField
                  placeholder="Search"
                  size="small"
                  sx={{
                    width: '300px',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF',
                      borderRadius: '6px',
                      '& fieldset': {
                        borderColor: '#B0B0B0'
                      },
                      '&:hover fieldset': {
                        borderColor: '#1976D2'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976D2'
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#B0B0B0' }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Tabs for Active tab */}
              <Box>
                <Tabs value={activeTab} onChange={handleTabChange}>
                  <Tab label="New" sx={{ color: '#666' }} />
                  <Tab
                    label="Active"
                    sx={{
                      color: activeTab === 1 ? '#1976D2' : '#666',
                      fontWeight: activeTab === 1 ? 'bold' : 'normal'
                    }}
                  />
                  <Tab label="Rejected" sx={{ color: '#666' }} />
                  <Tab label="Completed" sx={{ color: '#666' }} />
                </Tabs>
              </Box>
            </Box>

            {/* Active tab content */}
            <ActiveTab />
          </>
        ) : (
          <Container maxWidth="xl">
            {/* Header for other tabs */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                Transportation Request
              </Typography>

              {/* Tabs */}
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs value={activeTab} onChange={handleTabChange}>
                  <Tab
                    label="New"
                    sx={{
                      color: activeTab === 0 ? '#ff4444' : '#666',
                      fontWeight: activeTab === 0 ? 'bold' : 'normal'
                    }}
                  />
                  <Tab label="Active" sx={{ color: '#666' }} />
                  <Tab label="Rejected" sx={{ color: '#666' }} />
                  <Tab label="Completed" sx={{ color: '#666' }} />
                </Tabs>
              </Box>
            </Box>

            {/* Request Cards */}
            <Box sx={{
              mb: 3,
              // Special positioning for Active tab
              ...(activeTab === 1 && {
                position: 'relative',
                height: '800px', // Enough height for absolute positioned cards
                width: '100%'
              })
            }}>
              {currentItems.length > 0 ? (
                currentItems.map((request, index) => {
                  // Use original RequestCard for remaining tabs (Rejected)
                  return (
                    <RequestCard
                      key={`${activeTab}-${request.id}-${index}`}
                      request={request}
                    />
                  );
                })
              ) : (
                <Box sx={{
                  textAlign: 'center',
                  py: 8,
                  color: '#666'
                }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    No requests found
                  </Typography>
                  <Typography variant="body2">
                    {activeTab === 0 && "No new requests at the moment"}
                    {activeTab === 1 && "No active requests at the moment"}
                    {activeTab === 2 && "No rejected requests at the moment"}
                    {activeTab === 3 && "No completed requests at the moment"}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    '& .MuiPaginationItem-root': {
                      color: '#666'
                    },
                    '& .Mui-selected': {
                      backgroundColor: '#4285f4',
                      color: 'white'
                    }
                  }}
                />
              </Box>
            )}
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default TransportationRequest;
