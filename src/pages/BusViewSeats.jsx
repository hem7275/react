// import React, { useState } from 'react';
// import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
// import ChairIcon from '@mui/icons-material/Chair';
// import PassengerForm from '../components/PassengerForm';

// const Seat = ({ index, isSelected, isBooked, isFemale, handleSelect }) => (
//   <IconButton onClick={() => handleSelect(index)} size="large" disabled={isBooked||isFemale}>
//     <ChairIcon sx={{ fontSize: 40, color: isBooked ? 'gray' : isFemale ? 'pink' : isSelected ? 'red' : 'black' }} />
//   </IconButton>
// );

// const SeatRow = ({ rowSeats, rowIndex, selectedSeats, bookedSeats, femaleSeats, handleSelect }) => (
//   <Grid container justifyContent="center" spacing={2}>
//     {rowSeats.map((seatIndex, indexInRow) => (
//       <Seat
//         key={seatIndex}
//         index={seatIndex}
//         isSelected={selectedSeats.includes(seatIndex)}
//         isBooked={bookedSeats.includes(seatIndex)}
//         isFemale={femaleSeats.includes(seatIndex)}
//         handleSelect={() => handleSelect(rowIndex, indexInRow)}
//       />
//     ))}
//   </Grid>
// );

// const BusViewSeats = () => {
//   const totalSeats = 30;
//   const seatConfig = [2, 1]; // Seat configuration 2+1
//   const [passengerDetails, setPassengerDetails] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const bookedSeats = [2, 5, 12]; // Mock data for booked seats
//   const femaleSeats = [1, 4, 11]; // Mock data for female designated seats that are also booked

//   const seatsPerRow = seatConfig.reduce((sum, current) => sum + current, 0);
//   const numberOfRows = Math.ceil(totalSeats / seatsPerRow);
//   const rows = [];

//   let seatNumber = 0;
//   for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//     let rowSeats = [];
//     seatConfig.forEach(section => {
//       for (let seat = 0; seat < section; seat++) {
//         if (seatNumber < totalSeats) {
//           rowSeats.push(seatNumber);
//           seatNumber++;
//         }
//       }
//     });
//     rows.push(
//       <SeatRow
//         key={rowIndex}
//         rowSeats={rowSeats}
//         rowIndex={rowIndex}
//         selectedSeats={selectedSeats}
//         bookedSeats={bookedSeats}
//         femaleSeats={femaleSeats} // Only show female seats as different if they are booked
//         handleSelect={(row, seatInRow) => handleSelect(row, seatInRow)}
//       />
//     );
//   }

// const handleSelect = (row, seatInRow) => {
//   const seatIndex = row * seatsPerRow + seatInRow;
//   const seatIdentifier = `Row ${row + 1}, Seat ${seatIndex + 1}`;

//   if (selectedSeats.includes(seatIndex)) {
//     // Remove the seat from selectedSeats
//     setSelectedSeats(currentSelectedSeats => currentSelectedSeats.filter(s => s !== seatIndex));

//     // Remove the corresponding passenger details
//     setPassengerDetails(currentDetails => currentDetails.filter(detail => detail.seatNumber !== seatIdentifier));
//   } else {
//     // Add the seat to selectedSeats
//     setSelectedSeats(currentSelectedSeats => [...currentSelectedSeats, seatIndex]);

//     // Add new passenger details entry
//     setPassengerDetails(currentDetails => [
//       ...currentDetails,
//       { seatNumber: seatIdentifier, name: '', age: '' }
//     ]);
//   }
// };


//   return (
//     <Container component="main" sx={{ width: '100vw', height: '100vh', display: 'flex', p: 2 }}>
//       <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>Select Your Seats</Typography>
//         {rows}
//       </Box>
//       <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>Passenger Details</Typography>
//         {passengerDetails.length > 0 && (
//           <PassengerForm passengerDetails={passengerDetails} onSubmit={(details)=> setPassengerDetails(det)} />
//         )}
//         {passengerDetails.length === 0 && (
//           <Typography>No seats selected.</Typography>
//         )}
//       </Box>
//       <Box sx={{ p: 2 }}>
//         <Typography variant="body2">Legend:</Typography>
//         <Box display="flex" alignItems="center">
//           <ChairIcon sx={{ color: 'pink' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Female Seat (if booked)</Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <ChairIcon sx={{ color: 'red' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Selected Seat</Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <ChairIcon sx={{ color: 'gray' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Booked Seat</Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default BusViewSeats;


import React, { useState } from 'react';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import ChairIcon from '@mui/icons-material/Chair';
import PassengerForm from '../components/PassengerForm';
import PickupDropForm from '../components/PickupDropForm';

const Seat = ({ index, isSelected, isBooked, isFemale, handleSelect }) => (
  <IconButton onClick={() => handleSelect(index)} size="large" disabled={isBooked||isFemale}>
    <ChairIcon sx={{ fontSize: 40, color: isBooked ? 'gray' : isFemale ? 'pink' : isSelected ? 'red' : 'black' }} />
  </IconButton>
);

const SeatRow = ({ rowSeats, rowIndex, selectedSeats, bookedSeats, femaleSeats, handleSelect }) => (
  <Grid container justifyContent="center" spacing={2}>
    {rowSeats.map((seatIndex, indexInRow) => (
      <Seat
        key={seatIndex}
        index={seatIndex}
        isSelected={selectedSeats.includes(seatIndex)}
        isBooked={bookedSeats.includes(seatIndex)}
        isFemale={femaleSeats.includes(seatIndex)}
        handleSelect={() => handleSelect(rowIndex, indexInRow)}
      />
    ))}
  </Grid>
);

const BusViewSeats = () => {
  const totalSeats = 30;
  const seatConfig = [2, 1]; // Seat configuration 2+1
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = [2, 5, 12]; // Mock data for booked seats
  const femaleSeats = [1, 4, 11]; // Mock data for female designated seats that are also booked
   // Add state for handling pickup and drop selections
  const [location, setLocation] = useState({ pickup: '', drop: '' });

  const handleLocationSelect = (type, value) => {
    setLocation(prev => ({ ...prev, [type]: value }));
  };

  // Dummy data for pickup and drop points
  const pickupPoints = ['Station A', 'Station B', 'Station C'];
  const dropPoints = ['Station D', 'Station E', 'Station F'];

  const seatsPerRow = seatConfig.reduce((sum, current) => sum + current, 0);
  const numberOfRows = Math.ceil(totalSeats / seatsPerRow);
  const rows = [];

  let seatNumber = 0;
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let rowSeats = [];
    seatConfig.forEach(section => {
      for (let seat = 0; seat < section; seat++) {
        if (seatNumber < totalSeats) {
          rowSeats.push(seatNumber);
          seatNumber++;
        }
      }
    });
    rows.push(
      <SeatRow
        key={rowIndex}
        rowSeats={rowSeats}
        rowIndex={rowIndex}
        selectedSeats={selectedSeats}
        bookedSeats={bookedSeats}
        femaleSeats={femaleSeats} // Only show female seats as different if they are booked
        handleSelect={(row, seatInRow) => handleSelect(row, seatInRow)}
      />
    );
  }

const handleSelect = (row, seatInRow) => {
  const seatIndex = row * seatsPerRow + seatInRow;
  const seatIdentifier = `Row ${row + 1}, Seat ${seatIndex + 1}`;

  if (selectedSeats.includes(seatIndex)) {
    // Remove the seat from selectedSeats
    setSelectedSeats(currentSelectedSeats => currentSelectedSeats.filter(s => s !== seatIndex));

    // Remove the corresponding passenger details
    setPassengerDetails(currentDetails => currentDetails.filter(detail => detail.seatNumber !== seatIdentifier));
  } else {
    // Add the seat to selectedSeats
    setSelectedSeats(currentSelectedSeats => [...currentSelectedSeats, seatIndex]);

    // Add new passenger details entry
    setPassengerDetails(currentDetails => [
      ...currentDetails,
      { seatNumber: seatIdentifier, name: '', age: '' }
    ]);
  }
};


  return (
 <Container component="main" sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      p: 2,
      m:0,
      boxShadow: 1,
      margin: 'auto'
    }}>
      <Box sx={{ width: '15%', overflowY: 'auto', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Pickup & Drop Points</Typography>
        <PickupDropForm
          pickupPoints={pickupPoints}
          dropPoints={dropPoints}
          onSelect={handleLocationSelect}
        />
      </Box>
      <Box sx={{ width: '40%', overflowY: 'auto', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Select Your Seats</Typography>
        {rows}
      </Box>
      <Box sx={{ width: '35%', overflowY: 'auto', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Passenger Details</Typography>
        {passengerDetails.length > 0 ? (
          <PassengerForm passengerDetails={passengerDetails} onSubmit={console.log} />
        ) : (
          <Typography>No seats selected.</Typography>
        )}
      </Box>
      <Box sx={{ width: '10%', overflowY: 'auto', p: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Legend:</Typography>
        <Box display="flex" alignItems="center" sx={{ my: 1 }}>
          <ChairIcon sx={{ color: 'pink' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Female Seat (if booked)</Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ my: 1 }}>
          <ChairIcon sx={{ color: 'red' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Selected Seat</Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ my: 1 }}>
          <ChairIcon sx={{ color: 'gray' }} /> <Typography variant="caption" sx={{ ml: 1 }}>Booked Seat</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BusViewSeats;

