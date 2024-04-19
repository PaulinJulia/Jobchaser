import style from "./Search.module.css";
import { SearchProps } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props: SearchProps) {
  return (
    <form className={style.search}>
      <label htmlFor="search"></label>
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="p-1 m-4 rounded-md"
        id="search"
        type="text"
        placeholder=" Job title, keyword..."
        onChange={props.onSearch}
        value={props.searchTerm}
      />
    </form>
  );
}

export default Search;
