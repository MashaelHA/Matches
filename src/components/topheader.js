import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import { Typography, Box } from "@mui/material";

const TopHeader = () => {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
  };

  return (
    <Box sx={headerStyle}>
      <FilterListIcon /> {/* style={{transform: "rotate(270deg)"}}/ */}
      <Typography variant="h5" style={{ fontSize: "2em", fontWeight: "700" }}>
        Matches
      </Typography>
      <Brightness2OutlinedIcon style={{ transform: "rotate(140deg)" }} />
    </Box>
  );
};

export default TopHeader;
