import React from "react";
import { Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";

import Button from "@mui/material/Button";

const useStyles = makeStyles({
  icon: {
    padding: "10px 20px",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left">
      <Button>
        <EmojiObjectsOutlinedIcon fontSize="large" className={classes.icon} />
      </Button>
      <Button>
        <SearchIcon fontSize="large" className={classes.icon} />
      </Button>
      <Button>
        <PieChartOutlinedIcon fontSize="large" className={classes.icon} />
      </Button>
    </Drawer>
  );
};

export default SideBar;
