import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../../redux/actions";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

const Search = () => {
  /* Get data from redux */
  const data = useSelector((state) => state.getData.data);
  const dispatch = useDispatch();

  /* Search */
  // Save date from redux to state
  const [backupData, setBackupData] = useState(data);

  const [inputValue, setInputValue] = useState("");

  // Runs when input value changed
  const searchHandle = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    // Filter data by input value
    let filtered = data.filter((data) => data.priority.includes(inputValue));
    // Save filtered data to redux
    dispatch(getDataAction(filtered));
    // If input value is empty save backup data to redux
    if (inputValue === "") {
      dispatch(getDataAction(backupData));
    }
  }, [inputValue]);

  return (
    <>
      <Box
        sx={{
          width: "99.60%",
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
          value={inputValue}
          onChange={searchHandle}
        />
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "40px", paddingTop: "15px" }}>
        {data.length ? (
          <>
            <CheckIcon
              fontSize="small"
              sx={{ paddingRight: "5px", color: "#7CC9A4" }}
            />
            <Typography variant="subtitle2">
              {data.length} results found
            </Typography>
          </>
        ) : (
          <>
            <SentimentDissatisfiedOutlinedIcon
              fontSize="small"
              sx={{ paddingRight: "5px", color: "#CB234E" }}
            />
            <Typography variant="subtitle2">No results found</Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default Search;
