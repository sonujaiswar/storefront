"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const SecurityPage: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // handle change password logic here
    alert("Password change submitted");
  };

  const handle2FAToggle = () => {
    setTwoFactorEnabled((prev) => !prev);
    // call API to update 2FA setting
  };

  const loginActivity = [
    {
      date: "2025-05-20",
      location: "Mumbai, India",
      device: "Chrome on Windows",
    },
    { date: "2025-05-18", location: "Pune, India", device: "Safari on iPhone" },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Security Settings
      </Typography>

      {/* Password Change */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <Box component="form" onSubmit={handlePasswordChange} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="Current Password"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="New Password"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Update Password
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* 2FA Toggle */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Two-Factor Authentication
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={twoFactorEnabled} onChange={handle2FAToggle} />
            }
            label={twoFactorEnabled ? "Enabled" : "Disabled"}
          />
        </CardContent>
      </Card>

      {/* Recent Login Activity */}
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Login Activity
          </Typography>
          <Paper sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Device</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loginActivity.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.device}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SecurityPage;
