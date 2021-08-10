import React from "react";
import Link from "next/link";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  styled,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Appbar from "./appbar";
import DashboardDrawer from "./dashboardDrawer";

const drawerItems = [
  {
    link: "/",
    image: "/img/dashboard.png",
    width: 30,
    height: 30,
  },
  {
    link: "/src/components/route/about",
    image: "/img/table.png",
    width: 28,
    height: 23,
  },
  {
    link: "/src/components/route/activity",
    image: "/img/desktop.png",
    width: 30,
    height: 24,
  },
  {
    link: "/src/components/route/works",
    image: "/img/battery.png",
    width: 20,
    height: 30,
  },
  {
    link: "/src/components/route/notes",
    image: "/img/note.png",
    width: 30,
    height: 22,
  },
  {
    link: "/src/components/route/connect",
    image: "/img/touch.png",
    width: 24,
    height: 30,
  },
  {
    link: "/src/components/route/user",
    image: "/img/user.png",
    width: 27,
    height: 29.56,
  },
  {
    link: "/src/components/route/cloud",
    image: "/img/cloud.png",
    width: 29.82,
    height: 29.5,
  },
  {
    link: "/src/components/route/discussion",
    image: "/img/block.png",
    width: 30,
    height: 30,
  },
  {
    link: "/src/components/route/server",
    image: "/img/micro.png",
    width: 30,
    height: 30,
  },
];

const DrawerStyle = styled(Drawer)`
  & > div {
    background-color: #663399;
  }
`;
const Sidebar = () => {
  return (
    <Box>
      <CssBaseline />
      <Appbar />
      <DrawerStyle variant="permanent" anchor="left" sx={{ width: 120 }}>
        <Toolbar>
          <List>
            <ListItem button sx={{ mt: 1 }}>
              <Link href="/">
                <Typography variant="h5" color="#FFFFFF">
                  Gull
                </Typography>
              </Link>
            </ListItem>
            {drawerItems.map((drawerItem, i) => {
              return (
                <ListItem button key={i} sx={{ mt: 1 }}>
                  <DashboardDrawer {...drawerItem} />
                </ListItem>
              );
            })}
          </List>
        </Toolbar>
      </DrawerStyle>
    </Box>
  );
};

export default Sidebar;
