// app/your-path/DashboardPage.tsx
"use client";
import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import { NavigationRoutes } from "@/constants/NavigationRoutes";
import DashboardCard from "@/components/ui/dashboard/DashboardCard";

const DashboardPage = () => {
  const t = useTranslations();

  const items = [
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
    <Grid container spacing={3}>
      <Grid size={12}>
        <Typography variant="h4">{t("dashboardPage.title")}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          {t("dashboardPage.description")}
        </Typography>
      </Grid>
      {items.map((item, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
          key={index}
          sx={{ mt: 2 }}
        >
          <DashboardCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardPage;
