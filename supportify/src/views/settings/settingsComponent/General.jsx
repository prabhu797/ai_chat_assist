import { Box, Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../store/slices/SettingSlice';

export default function General() {

  const dispatch = useDispatch();

  const handleThemeChange = (themeName) => {
    dispatch(setTheme(themeName))
  };

  let themeButtons = [
    {
      name: "Default",
      color: "#00796B"
    },
    {
      name: "Cyan",
      color: "#00BCD4"
    },
    {
      name: "Blue",
      color: "#1E88E5"
    },
    {
      name: "Purple",
      color: "#9C27B0"
    },
    {
      name: "Dark",
      color: "#212121"
    },
    {
      name: "Amber",
      color: "#FFC107"
    },
    {
      name: "Pink",
      color: "#E91E63"
    },
    {
      name: "Red",
      color: "#F44336"
    },
  ]

  return (
    <div>
      <Box sx={{ p: 2, display: "grid", gridTemplateColumns: 'repeat(3, 1fr)' , gap: 2, justifyContent: "center" }}>
        {
          themeButtons.map((theme) => {
            return (
              <Button variant="contained" onClick={() => handleThemeChange(theme.name.toLocaleLowerCase())} style={{ backgroundColor: `${theme.color}` }}>
                {theme.name}
              </Button>
            )
          })
        }
      </Box>
    </div>
  )
}
