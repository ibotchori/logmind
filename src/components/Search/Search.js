import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Search = () => {
  return (
    <>
      <Box
        sx={{
          padding: "15px",
          backgroundColor: "#494D58",
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Input
          style={{ color: "#F0F0F0", paddingLeft: "20px", width: "100%" }}
          disableUnderline={true}
          placeholder="Search by keyword..."
        />
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "40px", paddingTop: "15px" }}>
        <CheckIcon fontSize="small" sx={{ paddingRight: "5px" }} />
        <Typography variant="subtitle2">1245454 results found</Typography>
      </Box>
    </>
  );
};

export default Search;