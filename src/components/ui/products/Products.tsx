"use client";
import { RootState } from "@/types/stateTypes";
import Masonry from "@mui/lab/Masonry";
import { Box, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// const items = [1, 2, 3, 4, 5, 6];

export default function Products() {
  const isOpen = useSelector((state: RootState) => state.settings.isDrawerOpen);
  const productLoading = useSelector(
    (state: RootState) => state.session.isProtectedMode
  );

  return (
    <Masonry
      columns={{
        xs: 1,
        sm: 2,
        md: isOpen ? 2 : 3,
        lg: isOpen ? 3 : 4,
        xl: isOpen ? 4 : 5,
      }}
      spacing={4}
      sx={{ flexGrow: 1, m: 0, width: "100%", overflowX: "hidden" }}
    >
      {Array.from({ length: 8 }).map((item, index) => {
        const randomNumber = Math.floor(Math.random() * 100) + 200;
        return (
          <Card key={index}>
            <Skeleton
              variant="rectangular"
              height={randomNumber}
              animation="wave"
            />

            <CardContent>
              <Skeleton width="60%" animation="wave" />
              <Skeleton width="80%" animation="wave" />
            </CardContent>
            <Box sx={{ ml: 2, mb: 2 }}>
              <Skeleton width={80} height={36} animation="wave" />
            </Box>
          </Card>
        );
      })}

      {productLoading &&
        Array.from({ length: 10 }).map((_, index) => {
          const randomNumber = Math.floor(Math.random() * 100) + 200;
          return (
            <motion.div
              key={`skeleton-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card sx={{ width: "100%" }} key={`skeleton-${index * 50}`}>
                <Skeleton
                  variant="rectangular"
                  height={randomNumber}
                  animation="wave"
                />
                <CardContent>
                  <Skeleton width="60%" animation="wave" />
                  <Skeleton width="80%" animation="wave" />
                </CardContent>
                <Box sx={{ ml: 2, mb: 2 }}>
                  <Skeleton width={80} height={36} animation="wave" />
                </Box>
              </Card>
            </motion.div>
          );
        })}
    </Masonry>
  );
}
