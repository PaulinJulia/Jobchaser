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
      <div className="flex justify-center">
        <select
          value={selectValue}
          onChange={onChange}
          className="mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <option
            className="text-gray-700 block px-4 py-2 text-sm"
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
          <option
            className="text-gray-700 block px-4 py-2 text-sm"
            value="Malmö"
          >
            Malmö
          </option>
        </select>
      </div>
    </>
  );
}
export default Category;
