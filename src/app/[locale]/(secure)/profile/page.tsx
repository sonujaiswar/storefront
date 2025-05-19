"use client";
import ProfileRow from "@/components/ui/profile/ProfileRow";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h4">Profile</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>
          Update your name, contact info, and email to keep your account up to
          date.
        </Typography>
      </Grid>

      <Grid size={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container justifyContent="start" sx={{ mb: 2 }}>
            <Grid size={4} display="flex">
              <Avatar sx={{ width: 120, height: 120 }} />
              <Box
                sx={{
                  ml: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <Typography>
                  Add a profile picture to make your account feel more like you.
                </Typography>
                <Button variant="outlined" sx={{ width: 160 }}>
                  Change picture
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h6">Basic</Typography>
          <Divider sx={{ my: 2 }} />
          <ProfileRow
            label="Full name"
            value="Sonu J"
            onEdit={() => console.log("Edit name")}
            editLabel="Edit name"
          />
          <Divider sx={{ my: 1 }} />
          <ProfileRow
            label="Date of birth"
            value="06/06/1991"
            tooltip="Your date of birth is needed for account security and to help us personalize your experience."
            onEdit={() => console.log("Edit DOB")}
            editLabel="Edit date of birth"
          />
          <Divider sx={{ my: 1 }} />
          <ProfileRow
            label="Gender"
            value="Female"
            onEdit={() => console.log("Edit DOB")}
            editLabel="Edit gender"
          />
        </Paper>
      </Grid>

      <Grid size={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Profile</Typography>
          <Divider sx={{ my: 2 }} />

          <ProfileRow
            label="State or province"
            value="Maharashtra"
            onEdit={() => console.log("Edit location")}
            editLabel="Edit location"
          />
          <Divider sx={{ my: 1 }} />
          <ProfileRow
            label="Country"
            value="India"
            onEdit={() => console.log("Edit location")}
            editLabel="Edit country"
          />
          <Divider sx={{ my: 1 }} />
          <ProfileRow
            label="Language"
            value="English"
            onEdit={() => console.log("Edit language")}
            editLabel="Edit language"
          />
        </Paper>
      </Grid>
      <Grid size={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Account</Typography>
          <Divider sx={{ my: 2 }} />

          <ProfileRow
            label="Email address"
            value="a6GxO@example.com"
            tooltip="The email address you use to sign in to your account."
            onEdit={() => console.log("Edit DOB")}
            editLabel="Edit email"
          />
          <Divider sx={{ my: 1 }} />

          <ProfileRow
            label="Phone number"
            value="+91 1234567890"
            onEdit={() => console.log("Edit location")}
            editLabel="Edit phone"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
