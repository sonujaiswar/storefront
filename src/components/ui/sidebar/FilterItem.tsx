"use client";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import { useState } from "react";
import { ListItem, Slider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
// import {
//   setFilteredProductsByPriceRange,
//   setFilteredProductsByColor,
// } from "@/controller/slices/productSlice";
// import { RootState } from "@/types/state";
// import { productMinMax } from "@/constants/links";
const productMinMax = {
  min: 0,
  max: 100000,
};

const minPrice = productMinMax.min;
const maxPrice = productMinMax.max;
export default function FilterItem() {
  const dispatch = useDispatch();
  // const minPrice = useSelector(
  //   (state: RootState) => state.productstate.minPrice
  // );
  // const maxPrice = useSelector(
  //   (state: RootState) => state.productstate.maxPrice
  // );

  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      const [newMinPrice, newMaxPrice] = newValue;

      setPriceRange(newValue); // Update the local state
      // dispatch(
      //   setFilteredProductsByPriceRange({ min: newMinPrice, max: newMaxPrice })
      // ); // Dispatch the price range update
    }
  };

  const handleColorChange = (
    event: React.MouseEvent<HTMLElement>,
    newColor: string
  ) => {
    if (newColor !== null) {
      setSelectedColor(newColor); // Update the local state for selected color
      // dispatch(setFilteredProductsByColor(newColor)); // Dispatch color change to Redux
    }
  };
  const currencySymbol = "$";

  function valuetext(value: number) {
    return `${currencySymbol} ${value}`;
  }

  return (
    <>
      <List component="nav" aria-label="menu list">
        <ListSubheader component="div" id="nested-list-subheader">
          Filters
        </ListSubheader>

        {/* Price Range Filter */}
        <ListItem>
          <ListItemText primary="Price Range" />
        </ListItem>

        <ListItem sx={{ p: 4 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            min={productMinMax.min}
            max={productMinMax.max}
            valueLabelFormat={valuetext}
            aria-label="Always visible"
          />
        </ListItem>
        <Divider />

        {/* Color Filter */}
        <ListItem>
          <ListItemText primary="Select Colour" />
        </ListItem>

        <ListItem>
          <ToggleButtonGroup
            value={selectedColor}
            exclusive
            onChange={handleColorChange}
            aria-label="color selection"
          >
            <ToggleButton
              value="#FF5733"
              aria-label="color 1"
              style={{ backgroundColor: "#FF5733" }}
            />
            <ToggleButton
              value="#33FF57"
              aria-label="color 2"
              style={{ backgroundColor: "#33FF57" }}
            />
            <ToggleButton
              value="#3357FF"
              aria-label="color 3"
              style={{ backgroundColor: "#3357FF" }}
            />
          </ToggleButtonGroup>
        </ListItem>
      </List>
    </>
  );
}
