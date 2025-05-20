"use client";
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import Products from "@/components/ui/products/Products";
import { useSelector } from "react-redux";
import { RootState } from "@/types/stateTypes";
interface FavoriteItemState {
  id: number;
  title: string;
  image: string;
}

const mockFavorites = [
  {
    id: 1,
    title: "Elegant Chair",
    image: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "Modern Lamp",
    image: "https://placehold.co/600x400",
  },
  {
    id: 3,
    title: "Cozy Sofa",
    image: "https://placehold.co/600x400",
  },
];

const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState<FavoriteItemState[]>([]);
  const checkcart = useSelector((state: RootState) => state.cart.CartItemsList);
  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {checkcart.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              minHeight: "80vh",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="h4">No Favorites Yet</Typography>
              <Divider sx={{ my: 2, width: "100%" }} />
            </Box>
            <Typography variant="subtitle1">
              Your favorite items will appear here.
            </Typography>
            <Box
              color="text.secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",

                gap: 1,
              }}
            >
              You can add items to your favorites by clicking the
              <FavoriteIcon color="primary" />
              <Typography sx={{ fontWeight: "bold" }}>favorite icon</Typography>
              on the product page.
            </Box>
            <Button variant="contained">Explore Products</Button>
          </Paper>
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h4" gutterBottom>
              My Favorites
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
              Here are the items you've marked as favorites. Easily revisit the
              products you love — explore details or remove them from your list
              anytime.
            </Typography>
          </Grid>
          <Paper sx={{ p: 2, width: "100%" }}>
            <Products />
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default FavoritesPage;
