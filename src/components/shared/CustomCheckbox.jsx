import React from "react";
import { CheckboxIcon } from "../../assets/icons";

export default function CustomCheckbox({ onChange, checked, title, details }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="checkbox"
        className="peer hidden"
        onChange={onChange}
      />
      <label
        htmlFor="checkbox"
        className="w-[600px] h-[90px] rounded-[5px]  border-2 flex justify-between items-center px-5 cursor-pointer select-none peer-checked:border-blue-700 peer-checked:border-l-8 peer-checked:pl-[14px] "
      >
        <div>
          <h3 className="font-bold">{title}</h3>
          <span>{details}</span>
        </div>
        <div
          className={
            "border-2 h-[25px] w-[25px] flex justify-center items-center rounded-[5px]"
          }
        >
          <div className={`peer-checked:block ${checked ? "block" : "hidden"}`}>
            <CheckboxIcon />
          </div>
        </div>
      </label>
    </div>
  );
}
