import style from "./Search.module.css";

function Search(props) {
  return (
    <form className={style.search}>
      <label htmlFor="search"></label>
      <input className="p-1 m-4"
        id="search"
        type="text"
        placeholder="Search..."
        onChange={props.onSearch}
        value={props.searchTerm}
      />
    </form>
  );
}

export default Search;
