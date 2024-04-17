import React, { ChangeEvent, useState } from "react";
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
      <select value={selectValue} onChange={onChange} className="form-select">
        <option value="Sverige">Location</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Malmö">Malmö</option>
      </select>
    </>
  );
}
export default Category;
