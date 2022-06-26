import React from "react";
import { useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const UrlInput = ({ url,setUrl, method, setMethod }) => {
  const [choice, setChoice] = useState({method});
  const handleChoice = (event) => {
    setChoice(event.target.value);
  };
  

  return (
    <React.Fragment>
      <div className="d-flex flex-row input-group mb-4  justify-content-center">

        <MDBInput label='Enter URL' id='typeText' type='text'
          aria-label="url"
          aria-describedby="basic-addon1"
          style={{width : 500}}
          value = {url}
          onChange={(e) => setUrl(e.target.value)}
        />
     <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={method}
          
          onChange={(e) => setMethod(e.target.value) }
        >
          <MenuItem value="GET">GET</MenuItem>
          <MenuItem value="POST">POST</MenuItem>
          <MenuItem value="DELETE">DELETE</MenuItem>
          <MenuItem value= "PUT">PUT</MenuItem>
          <MenuItem value="PATCH">PATCH</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
    </React.Fragment>
  );
};

export default UrlInput;

