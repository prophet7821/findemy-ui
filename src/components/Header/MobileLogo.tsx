// 
import { Typography } from '@mui/material'
import React from 'react'

const MobileLogo = () => {
  return (
    <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Findemy
          </Typography>
  )
}

export default MobileLogo