import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function BusCard({ bus }) {
  const [value, setValue] = useState(bus.rating);

  return (
      <Card sx={{ width: "100%", marginTop: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" component="div" gutterBottom>
                {bus.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {bus.type}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {`Departs at: ${bus.departsAt}`}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {`From: ${bus.from}`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
              >
                <Rating name="read-only" value={value} onChange={(event, newValue) => setValue(newValue)} readOnly />
                
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {`Starts from INR ${bus.price}`}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {`Arrives at: ${bus.arrivesAt}`}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {`Time taken: ${bus.timeTaken}`}
              </Typography>
              </Box>
              
            </Grid>
            <Grid item xs={12} md={2} sx={{display: 'flex', justifyContent:'flex-end', alignItems:'center'}}>
            <Button variant="contained" color="primary">
                  View Seats
                </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  
  );
}