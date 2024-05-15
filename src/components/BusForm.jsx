import React, { useState } from 'react';
import {
  TextField, Button, Select, MenuItem, InputLabel, FormControl, Box,
  Typography, Container, Paper, Grid, Stack,
  IconButton
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import axios from 'axios';

const BusForm = () => {
  const [busName, setBusName] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [busType, setBusType] = useState('');
  const [seatConfig, setSeatConfig] = useState('');
  const [capacity, setCapacity] = useState('');
  const [rating, setRating] = useState('');
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
   const [pickupPoints, setPickupPoints] = useState([{ location: '', pickupTime: '' }]);
  const [dropPoints, setDropPoints] = useState([{ location: '', dropTime: '' }]);

  // Handler for pickup points
  const handlePickupChange = (index, field, value) => {
    const newPickupPoints = pickupPoints.map((point, i) => {
      if (index === i) {
        return { ...point, [field]: value };
      }
      return point;
    });
    setPickupPoints(newPickupPoints);
  };

  const addPickupPoint = () => {
    setPickupPoints([...pickupPoints, { location: '', pickupTime: '' }]);
  };

  const removePickupPoint = (index) => {
    const newPickupPoints = pickupPoints.filter((_, i) => i !== index);
    setPickupPoints(newPickupPoints);
  };

  // Handler for drop points
  const handleDropChange = (index, field, value) => {
    const newDropPoints = dropPoints.map((point, i) => {
      if (index === i) {
        return { ...point, [field]: value };
      }
      return point;
    });
    setDropPoints(newDropPoints);
  };

  const addDropPoint = () => {
    setDropPoints([...dropPoints, { location: '', dropTime: '' }]);
  };

  const removeDropPoint = (index) => {
    const newDropPoints = dropPoints.filter((_, i) => i !== index);
    setDropPoints(newDropPoints);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const busData = {
      busName,
      source,
      destination,
      busType,
      seatConfig,
      capacity: Number(capacity),
      rating: Number(rating),
      arrivalTime,
      departureTime,
    };

    try {
      const response = await axios.post('/api/buses', busData); // Adjust URL as needed
      console.log('Bus Added:', response.data);
      alert('Bus added successfully!');
    } catch (error) {
      console.error('Failed to add bus:', error);
      alert('Failed to add bus.');
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom component="div">
          Add New Bus
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                label="Bus Name"
                value={busName}
                onChange={(e) => setBusName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Bus Type</InputLabel>
                <Select
                  value={busType}
                  label="Bus Type"
                  onChange={(e) => setBusType(e.target.value)}
                  required
                >
                  <MenuItem value="Sleeper">Sleeper</MenuItem>
                  <MenuItem value="SemiSleeper">Semi Sleeper</MenuItem>
                  <MenuItem value="ACSleeper">AC Sleeper</MenuItem>
                  <MenuItem value="ACSemiSleeper">AC Semi Sleeper</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Seat Configuration</InputLabel>
                <Select
                  value={seatConfig}
                  label="Seat Configuration"
                  onChange={(e) => setSeatConfig(e.target.value)}
                  required
                >
                  <MenuItem value="TwoPlusOne">2+1</MenuItem>
                  <MenuItem value="TwoPlusTwo">2+2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Capacity"
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rating"
                type="number"
                inputProps={{ step: "0.1" }}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Arrival Time"
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Departure Time"
                type="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Pickup Points:</Typography>
          {pickupPoints.map((point, index) => (
            <Grid container spacing={2} key={'pickup-' + index} alignItems="center" sx={{mt:2}}>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Pickup Location"
                  value={point.location}
                  onChange={(e) => handlePickupChange(index, 'location', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  type="time"
                  label="Pickup Time"
                  InputLabelProps={{ shrink: true }}
                  value={point.pickupTime}
                  onChange={(e) => handlePickupChange(index, 'pickupTime', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => removePickupPoint(index)} color="error">
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Button startIcon={<AddCircleOutlineIcon />} onClick={addPickupPoint}>
            Add Pickup Point
          </Button>
          </Grid>
           <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Drop Points:</Typography>
          {dropPoints.map((point, index) =>(
            <Grid container spacing={2} key={'drop-' + index} alignItems="center"  sx={{mt:2}}>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Drop Location"
                  value={point.location}
                  onChange={(e) => handleDropChange(index, 'location', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  type="time"
                  label="Drop Time"
                  InputLabelProps={{ shrink: true }}
                  value={point.dropTime}
                  onChange={(e) => handleDropChange(index, 'dropTime', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => removeDropPoint(index)} color="error">
                  <RemoveCircleOutlineIcon />
                </IconButton>
                </Grid>
            </Grid>
          ))}
          <Button startIcon={<AddCircleOutlineIcon />} onClick={addDropPoint} sx={{ mb: 2 }}>
            Add Drop Point
          </Button>
          </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Bus
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default BusForm;

