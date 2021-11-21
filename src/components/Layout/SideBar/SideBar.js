import React from "react";
import { Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

// Custom styles
const useStyles = makeStyles({
  box: {
    borderLeft: "solid 4px transparent",
    "&:hover": {
      borderLeft: "solid 4px #5B88FB",
    },
  },
  icon: {
    padding: "10px 20px",
  },
});

const SideBar = () => {

  // Reload page Logo click
  const reloadPage = () => {
    window.location.reload();
  };

  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left">
      <Box className={classes.box}>
        <Button onClick={reloadPage}>
          <svg
            className={classes.icon}
            width="36"
            height="40"
            viewBox="0 0 32 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7452 7.24432V28.2639C26.5626 28.2639 31.255 23.5715 31.255 17.7541C31.255 11.9367 26.5352 7.24432 20.7452 7.24432Z"
              fill="#3061E0"
            />
            <path
              d="M11.9367 20.6903H6.09185C6.09185 12.6227 12.6502 6.06438 20.7177 6.06438V0.192078C9.41217 0.192078 0.219543 9.38471 0.219543 20.6903H6.06441C6.06441 28.7578 12.6227 35.3436 20.7177 35.3436V29.4987C15.8882 29.4713 11.9367 25.5473 11.9367 20.6903Z"
              fill="#5F86FF"
            />
          </svg>
        </Button>
      </Box>
      <Box className={classes.box}>
        <Button>
          <EmojiObjectsOutlinedIcon fontSize="large" className={classes.icon} />
        </Button>
      </Box>
      <Box className={classes.box}>
        <Button>
          <SearchIcon fontSize="large" className={classes.icon} />
        </Button>
      </Box>
      <Box className={classes.box}>
        <Button>
          <PieChartOutlinedIcon fontSize="large" className={classes.icon} />
        </Button>
      </Box>
    </Drawer>
  );
};

export default SideBar;
