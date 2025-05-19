// components/DashboardCard.tsx
"use client";
import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import Link from "next/link";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  url,
}) => {
  return (
    <Card>
      <CardActionArea
        LinkComponent={Link}
        href={url}
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 6,
            color: "primary.main",
          },
        }}
      >
        <CardContent>
          {icon}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DashboardCard;
