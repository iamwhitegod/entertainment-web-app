import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  return (
    <div className="dashboard p[32px]">
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "min-content 1fr" }}
        gap={{ xs: 3, md: 2 }}
        p={2}
      >
        <Box gridColumn={{ xs: "1 / -1", md: "1 / 2" }}>
          <SideBar />
        </Box>
        <Box gridColumn={{ xs: "1 / -1", md: "2 / -1" }}>
          <Box
            display="grid"
            gridTemplateColumns="1fr"
            gridTemplateRows="repeat(1fr)"
            gap={2}
          >
            <Box gridColumn="1 / -1">
              <main>
                <Outlet />
              </main>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
