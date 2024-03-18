import style from "./Search.module.css";

function Search(props) {
  return (
    <form className={style.search}>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={props.onSearch}
        value={props.searchTerm}
      />
      <button id="search-button">Search</button>
    </form>
  );
}

export default Search;
