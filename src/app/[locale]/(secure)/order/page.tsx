"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrderCard = ({
  orderId,
  date,
  status,
  total,
  items,
}: {
  orderId: string;
  date: string;
  status: string;
  total: string;
  items: string;
}) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid size={8}>
          <Typography variant="subtitle1" fontWeight={700}>
            Order #{orderId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </Grid>
        <Grid>
          <Chip
            label={status}
            color={
              status === "Delivered"
                ? "success"
                : status === "Cancelled"
                ? "error"
                : "warning"
            }
          />
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2">{items}</Typography>
      <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 1 }}>
        Total: ₹{total}
      </Typography>
    </CardContent>
  </Card>
);

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4">Order</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>
          Review the items you ordered, see delivery progress, and manage
          returns or exchanges with ease.
        </Typography>
      </Grid>
      <Grid size={12}>
        <Paper>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
              >
                <Tab
                  label="Track My Order"
                  {...a11yProps(0)}
                  sx={{ fontWeight: 900 }}
                />
                <Tab
                  label="My Order History"
                  {...a11yProps(1)}
                  sx={{ fontWeight: 900 }}
                />
                <Tab
                  label="Not Delivered"
                  {...a11yProps(2)}
                  sx={{ fontWeight: 900 }}
                />
                <Tab
                  label="Cancelled Order"
                  {...a11yProps(3)}
                  sx={{ fontWeight: 900 }}
                />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <OrderCard
                orderId="123456"
                date="May 10, 2025"
                status="Shipped"
                total="2,499"
                items="1x Bluetooth Speaker, 2x USB-C Cable"
              />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <OrderCard
                orderId="112233"
                date="April 22, 2025"
                status="Delivered"
                total="3,999"
                items="1x Smartwatch"
              />
              <OrderCard
                orderId="223344"
                date="March 15, 2025"
                status="Delivered"
                total="1,299"
                items="3x Notebook Set"
              />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <OrderCard
                orderId="998877"
                date="May 5, 2025"
                status="Pending"
                total="749"
                items="1x Wireless Mouse"
              />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <OrderCard
                orderId="554433"
                date="April 1, 2025"
                status="Cancelled"
                total="1,099"
                items="1x Phone Cover, 1x Screen Guard"
              />
            </CustomTabPanel>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
