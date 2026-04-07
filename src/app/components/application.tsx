"use client";

import { useState } from "react";

import { Box, Drawer } from "@mui/material";

import { drawerWidth } from "@/app/data";

import SurveillanceHeader from "./surveillance-header";
import SurveillanceNavigation from "./surveillance-navigation";

type ApplicationProps = {
  children: React.ReactNode;
};

export default function Application({ children }: ApplicationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((previousState) => !previousState);
  };

  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", bgcolor: "background.default" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="surveillance navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          }}
        >
          <SurveillanceNavigation onNavigate={() => setMobileOpen(false)} />
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: 1,
              borderColor: "divider",
            },
          }}
        >
          <SurveillanceNavigation onNavigate={() => setMobileOpen(false)} />
        </Drawer>
      </Box>

      <Box sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <SurveillanceHeader onOpenMobileDrawer={handleDrawerToggle} />
        <Box component="main" id="main-content" sx={{ p: { xs: 2, md: 4 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}