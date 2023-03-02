import React, { useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [value, setValue] = useState(search.get('like') || '');
  const submit = (e) => {
    e.preventDefault();
    navigate(`/search?like=${value}`);
  }
  return (
    <form onSubmit={submit} class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={value === ''} class="btn btn-sm btn-outline-secondary" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;