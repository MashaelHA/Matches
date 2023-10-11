// import * as React from 'react';
// import Box from '@mui/material/Box';

import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import { grey } from "@mui/material/colors";

function CustomBottomNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: grey[100] }}
      >
        <BottomNavigationAction
          label="Matches"
          icon={<SportsSoccerOutlinedIcon />}
          style={{ color: value === 0 ? grey[600] : grey[400] }}
        />
        <BottomNavigationAction
          label="News"
          icon={<NewspaperOutlinedIcon />}
          style={{ color: value === 0 ? grey[600] : grey[400] }}
        />
        <BottomNavigationAction
          label="Leagues"
          icon={<EmojiEventsOutlinedIcon />}
          style={{ color: value === 0 ? grey[600] : grey[400] }}
        />
        <BottomNavigationAction
          label="Following"
          icon={<GradeOutlinedIcon />}
          style={{ color: value === 0 ? grey[600] : grey[400] }}
        />
      </BottomNavigation>
  );
}

export default CustomBottomNavigation;
