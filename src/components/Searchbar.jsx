import { useState } from "react";
import PropTypes from "prop-types";
import { Searchbar } from "./Searcbar.styled";

export default function SearchBar({onSubmit}) {
 
  const [ name, setName ] = useState("");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    onSubmit(name);
    setName("");
  };

  return (
    <Searchbar>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleNameChange}
          />
      </form>
    </Searchbar>
  );
}

 SearchBar.propTypes = {
    name: PropTypes.string,
    handleNameChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };
