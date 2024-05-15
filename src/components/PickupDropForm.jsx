import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const PickupDropForm = ({ pickupPoints, dropPoints, onSelect }) => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handlePickupChange = (event) => {
    setPickup(event.target.value);
    onSelect('pickup', event.target.value);
  };

  const handleDropChange = (event) => {
    setDrop(event.target.value);
    onSelect('drop', event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Pickup Point</InputLabel>
        <Select value={pickup} label="Pickup Point" onChange={handlePickupChange}>
          {pickupPoints.map((point, index) => (
            <MenuItem key={index} value={point}>{point}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Drop Point</InputLabel>
        <Select value={drop} label="Drop Point" onChange={handleDropChange}>
          {dropPoints.map((point, index) => (
            <MenuItem key={index} value={point}>{point}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PickupDropForm;
