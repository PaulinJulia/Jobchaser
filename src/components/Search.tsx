import React from "react";
import style from "./Search.module.css";
import { SearchProps } from "../types/types";

function Search(props: SearchProps) {
  return (
    <form className={style.search}>
      <label htmlFor="search"></label>
      <input className="p-1 m-4"
        id="search"
        type="text"
        placeholder="Job title, keywords..."
        onChange={props.onSearch}
        value={props.searchTerm}
      />
    </form>
  );
}

export default Search;
