// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

// import BusCard from '../components/BusCard';

// const buses = [
//     {
//         name: "IntrCity SmartBus",
//         type: "VE A/C Seater / Sleeper (2+1)",
//         departsAt: "22:00",
//         from: "Alambagh",
//         rating: 4,
//         price: 790,
//         arrivesAt: "06:00",
//         timeTaken: "08h 00m",
//         seats: 31,
//         singleSeats: 8,
//     },
//     {
//         name: "Super Luxury Bus",
//         type: "A/C Seater (2+2)",
//         departsAt: "21:00",
//         from: "Lucknow",
//         rating: 4.5,
//         price: 650,
//         arrivesAt: "05:00",
//         timeTaken: "08h 00m",
//         seats: 45,
//         singleSeats: 15,
//     },
// ];

// const HomePage = () => {
//     const [fromLocation, setFromLocation] = React.useState("");
//     const [toLocation, setToLocation] = React.useState("");
//     const [travelDate, setTravelDate] = React.useState("");
//     const [busContent, setBusContent] = React.useState(buses);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         event.currentTarget.reset();
//     };

//     return (
//         <Container component="main" sx={{ height: "100vh", display: 'flex', direction: 'column', justifyContent: 'center', width: "100vw" }}>
//             <CssBaseline />
//             <Box
//                 sx={{
//                     marginTop: 4,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     width: "100%"
//                 }}
//             >
//                 <Typography component="h1" variant="h5">
//                     Search Bus here...
//                 </Typography>
//                 <Box
//                     component="form"
//                     noValidate
//                     onSubmit={handleSubmit}
//                     sx={{
//                         marginTop: 4,
//                         display: "flex",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         width: "100%",
//                     }}
//                 >
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={4}>
//                             <TextField
//                                 name="fromLocation"
//                                 required
//                                 fullWidth
//                                 id="fromLocation"
//                                 label="From"
//                                 autoFocus
//                                 value={fromLocation}
//                                 onChange={(e) => setFromLocation(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="toLocation"
//                                 label="To"
//                                 name="toLocation"
//                                 value={toLocation}
//                                 onChange={(e) => setToLocation(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={2}>
//                             <TextField
//                                 id="travelDate"
//                                 label="Date"
//                                 type="date"
//                                 defaultValue={new Date().toISOString().slice(0, 10)}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                                 fullWidth
//                                 value={travelDate}
//                                 onChange={(e) => setTravelDate(e.target.value)}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={2}>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ height: "100%" }}
//                             >
//                                 Search
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Box>
//                 {busContent.map((bus, index) =>
//                     <BusCard bus={bus} key={index} />
//                 )}
//             </Box>
//         </Container>
//     );
// }

// export default HomePage;


import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, FormGroup, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import BusCard from '../components/BusCard';

const buses = [
    {
        name: "IntrCity SmartBus",
        type: "VE A/C Seater / Sleeper (2+1)",
        departsAt: "22:00",
        from: "Alambagh",
        rating: 4,
        price: 790,
        arrivesAt: "06:00",
        timeTaken: "08h 00m",
        seats: 31,
        singleSeats: 8,
    },
    {
        name: "Super Luxury Bus",
        type: "A/C Seater (2+2)",
        departsAt: "21:00",
        from: "Lucknow",
        rating: 4.5,
        price: 650,
        arrivesAt: "05:00",
        timeTaken: "08h 00m",
        seats: 45,
        singleSeats: 15,
    },
];

const HomePage = () => {
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [travelDate, setTravelDate] = useState(new Date().toISOString().slice(0, 10));
    const [ladiesOnly, setLadiesOnly] = useState(false);
    const [busType, setBusType] = useState([]);
    const [dropPoint, setDropPoint] = useState([]);
    const [boardingPoint, setBoardingPoint] = useState([]);
    const [amenities, setAmenities] = useState({
        wifi: false,
        toilet: false,
        meal: false
    });
    const [arrivalTime, setArrivalTime] = useState("");
    const [departureTime, setDepartureTime] = useState("");

    // Handler for changing amenities (handling multiple checkboxes)
    const handleAmenitiesChange = (event) => {
        setAmenities(prev => ({
            ...prev,
            [event.target.name]: event.target.checked
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Filtering logic should be implemented here based on selected values
        console.log("Form Submitted", { fromLocation, toLocation, travelDate, ladiesOnly, busType });
    };

    return (
        <Container component="main" sx={{ height: "100vh", display: 'flex', flexDirection: 'row', justifyContent: 'center', width: "100vw" }}>
            <CssBaseline />
            <Box sx={{ width: "20%", overflowY: 'auto', pr: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Filters</Typography>
                    
                    <FormControlLabel
                        control={<Checkbox checked={ladiesOnly} onChange={(e) => setLadiesOnly(e.target.checked)} />}
                        label="Ladies Only"
                    />

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Bus Type</InputLabel>
                        <Select
                            multiple
                            value={busType}
                            label="Bus Type"
                            onChange={e => setBusType(e.target.value)}
                        >
                            <MenuItem value="sleeper">Sleeper</MenuItem>
                            <MenuItem value="semiSleeper">Semi Sleeper</MenuItem>
                            <MenuItem value="acSleeper">AC Sleeper</MenuItem>
                            <MenuItem value="acSemiSleeper">AC Semi Sleeper</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Drop Point</InputLabel>
                        <Select
                            multiple
                            value={dropPoint}
                            label="Drop Point"
                            onChange={e => setDropPoint(e.target.value)}
                        >
                            {/* Placeholder values */}
                            <MenuItem value="point1">Point 1</MenuItem>
                            <MenuItem value="point2">Point 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Boarding Point</InputLabel>
                        <Select
                            multiple
                            value={boardingPoint}
                            label="Boarding Point"
                            onChange={e => setBoardingPoint(e.target.value)}
                        >
                            {/* Placeholder values */}
                            <MenuItem value="boarding1">Boarding 1</MenuItem>
                            <MenuItem value="boarding2">Boarding 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormGroup sx={{ mt: 2 }}>
                        <Typography variant="subtitle1">Amenities</Typography>
                        <FormControlLabel control={<Checkbox />} label="WiFi" />
                        <FormControlLabel control={<Checkbox />} label="Toilet" />
                        <FormControlLabel control={<Checkbox />} label="Meal" />
                    </FormGroup>

                    <TextField
                        fullWidth
                        id="arrivalTime"
                        label="Arrival Time"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ mt: 2 }}
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="departureTime"
                        label="Departure Time"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ mt: 2 }}
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                    />
                </Box>

            <Box sx={{ width: "80%", overflowY: 'auto' }}>
                <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%" }}>
                    <Typography component="h1" variant="h5">Search Bus here...</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4, display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    name="fromLocation"
                                    required
                                    fullWidth
                                    id="fromLocation"
                                    label="From"
                                    autoFocus
                                    value={fromLocation}
                                    onChange={(e) => setFromLocation(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="toLocation"
                                    label="To"
                                    name="toLocation"
                                    value={toLocation}
                                    onChange={(e) => setToLocation(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <TextField
                                    id="travelDate"
                                    label="Date"
                                    type="date"
                                    defaultValue={new Date().toISOString().slice(0, 10)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    value={travelDate}
                                    onChange={(e) => setTravelDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ height: "100%" }}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    {buses.map((bus, index) =>
                        <BusCard bus={bus} key={index} />
                    )}
                </Box>
            </Box>
        </Container>
    );
}

export default HomePage;

