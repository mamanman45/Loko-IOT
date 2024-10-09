import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={5}>
      <AppBar position="static" sx={{ bgcolor: "#C4CDC1" }}>
        <Toolbar>
          <Box display={"flex"} width={"100%"} marginX="auto" marginY={"auto"}>
            <Typography fontSize={"1.5rem"} sx={{ color: "#28363D" }}>
              Lokomotif
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
