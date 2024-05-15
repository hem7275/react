import React from 'react';
import { Box, Card, CardContent, Grid, TextField, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const PassengerForm = ({ onSubmit, passengerDetails }) => {


  const handleChange = (index, key, value) => {
    const updatedDetails = passengerDetails.map((detail, i) => 
      i === index ? { ...detail, [key]: value } : detail
    );
    onSubmit(updatedDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Passenger Details:", passengerDetails);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {passengerDetails.map((detail, index) => (
            <Grid container spacing={2} key={index} sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h6">{`Seat Number: ${detail.seatNumber}`}</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Passenger Name"
                  size="small"
                  fullWidth
                  value={detail.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Passenger Age"
                  type="number"
                  size="small"
                  fullWidth
                  value={detail.age}
                  onChange={(e) => handleChange(index, 'age', e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="Gender"
                    value={detail.gender || ''}
                    onChange={(e) => handleChange(index, 'gender', e.target.value)}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          ))}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Book Seats
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default PassengerForm;
