import React, { useState, useEffect } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, Collapse, Box, IconButton
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BusList = () => {
  const [buses, setBuses] = useState([
    {
      id: 1,
      busName: 'Bus A',
      source: 'City A',
      destination: 'City B',
      capacity: 40,
      arrivalTime: '18:00',
      departureTime: '09:00',
      pickups: [
        { id: 1, location: 'Stop A1', time: '08:00' },
        { id: 2, location: 'Stop A2', time: '08:30' },
      ],
      drops: [
        { id: 1, location: 'Stop B1', time: '17:30' },
        { id: 2, location: 'Stop B2', time: '18:00' },
      ]
    },
    {
      id: 2,
      busName: 'Bus B',
      source: 'City C',
      destination: 'City D',
      capacity: 50,
      arrivalTime: '22:00',
      departureTime: '10:00',
      pickups: [
        { id: 1, location: 'Stop C1', time: '09:30' },
        { id: 2, location: 'Stop C2', time: '10:00' },
      ],
      drops: [
        { id: 1, location: 'Stop D1', time: '21:30' },
        { id: 2, location: 'Stop D2', time: '22:00' },
      ]
    },
    // More buses...
  ]);
  const [open, setOpen] = useState({});

//   useEffect(() => {
//     const loadData = async () => {
//       const fetchedBuses = await fetchBuses();
//       setBuses(fetchedBuses);
//     };
//     loadData();
//   }, []);

  const toggleRow = (id) => {
    setOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4, mx: 'auto', width: '90%' }}>
      <Typography variant="h6" sx={{ p: 2 }}>Bus List</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Bus Name</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Arrival Time</TableCell>
            <TableCell>Departure Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buses.map((bus) => (
            <>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} key={bus.id}>
                <TableCell>
                  <IconButton size="small" onClick={() => toggleRow(bus.id)}>
                    {open[bus.id] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{bus.id}</TableCell>
                <TableCell>{bus.busName}</TableCell>
                <TableCell>{bus.source}</TableCell>
                <TableCell>{bus.destination}</TableCell>
                <TableCell>{bus.capacity}</TableCell>
                <TableCell>{bus.arrivalTime}</TableCell>
                <TableCell>{bus.departureTime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                  <Collapse in={open[bus.id]} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">Pickup Points</Typography>
                      {bus.pickups.map(pickup => (
                        <Typography key={pickup.id}>{`${pickup.location} at ${pickup.time}`}</Typography>
                      ))}
                      <Typography variant="h6" gutterBottom component="div" sx={{ mt: 2 }}>Drop Points</Typography>
                      {bus.drops.map(drop => (
                        <Typography key={drop.id}>{`${drop.location} at ${drop.time}`}</Typography>
                      ))}
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BusList;
