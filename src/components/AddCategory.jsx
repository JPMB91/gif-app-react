import Proptypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //? Manejamos el estado del input value como un valor que cambia
  const [inputValue, setInputValue] = useState(" ");

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
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputValue}
      />

      <button type="submit">Buscar</button>
    </form>
  );
};

AddCategory.propTypes = {
  // setCategories: Proptypes.func.isRequired,
  onNewCategory: Proptypes.func,
};
