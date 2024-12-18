import { Box, TextField } from "@mui/material";
import Proptypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //? Manejamos el estado del input value como un valor que cambia
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    const trimInput = inputValue.trim();
    e.preventDefault();

    if (trimInput.length <= 1) return;

    onNewCategory(trimInput);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        sx={{
      
          backgroundColor: "white",
          border: "1px solid rgb(97, 32, 158)",
          borderRadius: "5px",
          color: "black",
          display: "flex",
          fontSize: "1.2rem",
          margin: "0 auto",
          maxWidth: "100%",
          padding: "10px 15px",
          width: "60%",
        }}
      >
        <TextField
          value={inputValue}
          onChange={handleInputValue}
          fullWidth
          label="Buscar Gifs"
          id="fullWidth"
          sx={{
            input: {
              alignSelf: "center",
              borderRadius: "5px",
              color: "black",
              display: "flex",
              padding: "10px 15px",
            },
          }}
        />
      </Box>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: Proptypes.func,
};
