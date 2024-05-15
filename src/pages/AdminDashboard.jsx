import React, { useState } from 'react';
import { Container, Button, Box, Typography } from '@mui/material';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js'; // This will be our side nav component

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

// Sample data for the charts
const pieData = {
    labels: ['Sleeper', 'Semi Sleeper', 'AC Sleeper', 'AC Semi Sleeper'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const lineData = {
    labels: Array.from({ length: 15 }, (_, i) => new Date(Date.now() - (14 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]),
    datasets: [{
        label: 'Daily Revenue',
        data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 1000 + 500)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};



const AdminDashboard = () => {
    // Hypothetical revenue data for 7 days for 4 types of buses
    const dailyRevenueByType = {
        Sleeper: [500, 600, 550, 700, 650, 640, 630],
        SemiSleeper: [400, 450, 420, 480, 470, 460, 440],
        ACSleeper: [550, 580, 590, 610, 620, 630, 600],
        ACSemiSleeper: [300, 320, 310, 330, 340, 350, 360]
    };

    // Calculating average revenue for the last 7 days for the pie chart
    const pieData = {
        labels: ['Sleeper', 'Semi Sleeper', 'AC Sleeper', 'AC Semi Sleeper'],
        datasets: [{
            data: Object.values(dailyRevenueByType).map(revenues => revenues.reduce((a, b) => a + b) / revenues.length),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    };

    const categoryRevenue = Object.fromEntries(
        Object.entries(dailyRevenueByType).map(([key, values]) => [
            key, values.reduce((a, b) => a + b)
        ])
    );

    // Calculate total revenue from all categories
    const totalRevenue = Object.values(categoryRevenue).reduce((acc, curr) => acc + curr, 0);


     const dailyRevenueData = Array.from({length: 15}, () => Math.floor(Math.random() * 2000 + 500));
    const totalRevenueFor15Days = dailyRevenueData.reduce((a, b) => a + b, 0);

    // Generating random revenue data for the last 15 days for the line chart
    const lineData = {
        labels: Array.from({length: 15}, (_, i) => `Day ${i + 1}`),
        datasets: [{
            label: 'Total Revenue',
            data: dailyRevenueData,
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    };

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 4 }}>
                <Typography variant="h4">Admin Dashboard</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
                <Box sx={{ height: 300 }}>
                    <Pie data={pieData} options={{ plugins: { legend: { position: 'bottom' }}}}/>
                </Box>
                <Box sx={{ height: 300 }}>
                    <Line data={lineData} options={{ scales: { y: { beginAtZero: true }}}}/>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6">Total Revenue Last 15 Days: {totalRevenueFor15Days.toLocaleString()}</Typography>
                <Typography variant="h6">Total Revenue Last 7 Days: {totalRevenue.toLocaleString()}</Typography>
                {Object.entries(categoryRevenue).map(([key, value]) => (
                    <Typography key={key}>{key}: {value.toLocaleString()}</Typography>
                ))}
            </Box>
        </Container>
    );
};

export default AdminDashboard;

