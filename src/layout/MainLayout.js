import React from "react";

import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Stack,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AccountHeader } from "../components";

const MainLayout = ({ children }) => {
    const navigate = useNavigate()
  return (
    <Stack sx={{ flexGrow: 1, height: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG APP
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <MenuItem disableRipple color="inherit" onClick={() => navigate("/")}>Authors</MenuItem>
            <MenuItem disableRipple color="inherit" onClick={() => navigate("/most-liked-post")}>Most Liked Post</MenuItem>
            <MenuItem disableRipple color="inherit" onClick={() => navigate("/most-comment-post")}>Most Comment Post</MenuItem>
            <MenuItem disableRipple color="inherit"><AccountHeader /></MenuItem>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 2, flex: 1 }}>
        {children}
      </Container>
      <Box sx={{ my: 3, alignSelf: "center" }}>
        &copy; {new Date().getFullYear()} Đỉnh Trần Sơn Pionero
      </Box>
    </Stack>
  );
};

export default MainLayout;
