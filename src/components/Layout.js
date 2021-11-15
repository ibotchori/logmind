import React from "react";
import SideBar from "./SideBar/SideBar";
import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },

  page: {
    backgroundColor: "#F0EFEF",
    width: "100%",
    height: "100vh",
    marginLeft: '91px'
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar/>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
