import { Box, Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <div>
      <Box>
        {/* <Navbar /> */}
        <Stack direction="row">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
};

export default App;
