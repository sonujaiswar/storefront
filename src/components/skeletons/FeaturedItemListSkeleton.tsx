import { Box, Divider, Skeleton } from "@mui/material";

export default function FeaturedItemListSkeleton() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Skeleton
          variant="rectangular"
          height={30}
          width={"90%"}
          animation="wave"
        />
        <Divider sx={{ my: 1, width: "90%" }} />
        <Skeleton
          variant="rectangular"
          height={30}
          width={"90%"}
          animation="wave"
        />
        <Divider sx={{ my: 1, width: "90%" }} />
        <Skeleton
          variant="rectangular"
          height={30}
          width={"90%"}
          animation="wave"
        />
      </Box>
    </>
  );
}
