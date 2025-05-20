"use client";
import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  ListSubheader,
  Link,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const rightSidebarWidth = 240;

export default function MUIDocsPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6">Docs Nav</Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Introduction", "Installation", "Usage", "Customization"].map(
          (text) => (
            <ListItemButton key={text}>
              <ListItemText primary={text} />
            </ListItemButton>
          )
        )}
      </List>
    </div>
  );

  const rightSidebar = (
    <Box
      sx={{
        width: rightSidebarWidth,
        position: "fixed",
        right: 0,
        top: 64, // height of AppBar
        bottom: 0,
        overflowY: "auto",
        px: 2,
        pt: 2,
        borderLeft: "1px solid #e0e0e0",
        bgcolor: "#fafafa",
      }}
    >
      <Typography variant="subtitle2" gutterBottom>
        On this page
      </Typography>
      <List
        dense
        disablePadding
        subheader={<ListSubheader disableGutters>Contents</ListSubheader>}
      >
        {["Introduction", "Installation", "Basic Example", "Customization"].map(
          (item) => (
            <ListItem key={item} disablePadding>
              <Link
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                underline="hover"
              >
                <ListItemText primary={item} />
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          //   ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MUI Docs Page Example
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content + Right sidebar container */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "100%",
        }}
      >
        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: {
              xs: "100%",
              //    md: `calc(100% - ${rightSidebarWidth}px)`,
            },
            //ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Typography variant="h4" gutterBottom id="introduction">
            Introduction
          </Typography>
          <Typography paragraph>
            {/* sample content */}
            This is a MUI layout with left drawer and right sidebar. Scroll the
            content and sidebar stays in place. Lorem ipsum dolor sit amet
          </Typography>

          <Typography variant="h5" gutterBottom id="installation">
            Installation
          </Typography>
          <Typography paragraph>
            Run <code>npm install @mui/material</code> to get started.
          </Typography>

          <Typography variant="h5" gutterBottom id="basic-example">
            Basic Example
          </Typography>
          <Typography paragraph>
            Use `<CssBaseline />` and wrap in a ThemeProvider for consistent
            styling.
          </Typography>
        </Box>

        {/* Right Sidebar */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: rightSidebarWidth,
            flexShrink: 0,
          }}
        >
          {rightSidebar}
        </Box>
      </Box>
    </Box>
  );
}
