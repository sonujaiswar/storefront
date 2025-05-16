"use client";
import { RootState } from "@/types/stateTypes";
import Masonry from "@mui/lab/Masonry";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";

const items = [1, 2, 3, 4, 5, 6];

export default function Products() {
  const isOpen = useSelector((state: RootState) => state.settings.isDrawerOpen);
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
      {items.map((item, index) => (
        <Paper key={index} sx={{ height: 100 + index * 20, padding: 2 }}>
          Item {item}
        </Paper>
      ))}
    </Masonry>
  );
}
