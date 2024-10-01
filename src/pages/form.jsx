import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function Form() {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCancle = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="max-w-[768px] mx-auto">
      <form className="flex flex-col bg-neutral-800 p-14 min-h-screen justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl font-bold text-center text-white">
            What To Do?
          </h1>

          <TextField
            label="Title"
            variant="standard"
            fullWidth
            InputProps={{
              style: { color: "white" }, // Change the input text color to white
            }}
            InputLabelProps={{
              style: { color: "white" }, // Change the label color to white
            }}
            sx={{
              "& .MuiInputBase-root:before": {
                borderBottom: "1px solid white", // Underline color
              },
              "& .MuiInputBase-root:after": {
                borderBottom: "2px solid white", // Underline color on focus
              },
            }}
          />

          <TextField
            id="standard-textarea"
            label="Description"
            placeholder="Add Description"
            multiline
            variant="filled"
            fullWidth
            InputProps={{
              style: { color: "white" }, // Change the input text color to white
            }}
            InputLabelProps={{
              style: { color: "white" }, // Change the label color to white
            }}
            sx={{
              "& .MuiInputBase-root:before": {
                borderBottom: "1px solid white", // Underline color
              },
              "& .MuiInputBase-root:after": {
                borderBottom: "2px solid white", // Underline color on focus
              },
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="category" style={{ color: "white" }}>
              Category
            </InputLabel>
            <Select
              labelId="category"
              id="category-select"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
              variant="standard"
              sx={{
                "& .MuiSelect-select": {
                  color: "white", // Change the selected value text color to white
                  borderBottom: "1px solid white", // Ensure border bottom is set here
                },
                "& .MuiSelect-icon": {
                  color: "white", // Change the dropdown icon color to white
                },
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid white", // Underline color
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid white", // Underline color on focus
                },
              }}
            >
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="planning">Planning</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-evenly items-center mt-5">
          <button
            onClick={handleCancle}
            className="hover:bg-neutral-600 w-full p-2 rounded"
          >
            Cancel
          </button>
          <p>|</p>
          <button className="hover:bg-neutral-600 w-full p-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
