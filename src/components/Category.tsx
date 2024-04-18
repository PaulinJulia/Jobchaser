//import style from "./Category.module.css";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { city } from "../store/slices/categorySlice";

function Category() {
  const [selectValue, setSelectValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(city(value));
    setSelectValue(value);
  };

  const dispatch = useDispatch();

  return (
    <>
      <select
        value={selectValue}
        onChange={onChange}
        className="form-select flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 border-none"
      >
        <option
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          value="Sverige"
        >
          Location
        </option>
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value="Stockholm"
        >
          Stockholm
        </option>
        <option
          className="text-gray-700 block px-4 py-2 text-sm"
          value="Göteborg"
        >
          Göteborg
        </option>
        <option className="text-gray-700 block px-4 py-2 text-sm" value="Malmö">
          Malmö
        </option>
      </select>
    </>
  );
}
export default Category;
