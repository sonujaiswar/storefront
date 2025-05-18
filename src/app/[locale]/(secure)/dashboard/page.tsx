/*************  ✨ Windsurf Command ⭐  *************/
"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  CardActionArea,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import Link from "next/link";

const DashboardPage = () => {
  const t = useTranslations();

  const items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    url: string;
  }[] = [
    {
      title: t("secureNavigationRoutes.profile"),
      description: "Manage your profile details.",
      icon: NavigationRoutes.profilePage.icon,
      url: NavigationRoutes.profilePage.url,
    },
    {
      title: t("secureNavigationRoutes.address"),
      description: "View and update your addresses.",
      icon: NavigationRoutes.addressPage.icon,
      url: NavigationRoutes.addressPage.url,
    },
    {
      title: t("secureNavigationRoutes.order"),
      description: "Track your order history.",
      icon: NavigationRoutes.orderPage.icon,
      url: NavigationRoutes.orderPage.url,
    },
    {
      title: t("secureNavigationRoutes.favorite"),
      description: "Access your favorite items.",
      icon: NavigationRoutes.favoritePage.icon,
      url: NavigationRoutes.favoritePage.url,
    },
    {
      title: t("navigationRoutes.helpdesk"),
      description: "Get help and support.",
      icon: NavigationRoutes.helpPage.icon,
      url: NavigationRoutes.helpPage.url,
    },
    {
      title: t("secureNavigationRoutes.secure"),
      description: "Manage your security settings.",
      icon: NavigationRoutes.securityPage.icon,
      url: NavigationRoutes.securityPage.url,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h4">Dashboard</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Keep track of your activity, monitor key updates, and explore
              personalized recommendations tailored just for you.
            </Typography>
          </Grid>
          {items.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              key={index}
              sx={{ mt: 2 }}
            >
              <Card>
                <CardActionArea
                  LinkComponent={Link}
                  href={item.url}
                  sx={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: 6, // MUI shadow level
                      color: "primary.main",
                    },
                  }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
