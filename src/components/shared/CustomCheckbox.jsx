import React from "react";
import { CheckboxIcon } from "../../assets/icons";

export default function CustomCheckbox({ onChange, checked, title, details, id, index }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        id={id}
        className="peer hidden"
        onChange={() => onChange(index)}
      />
      <label
        htmlFor={id}
        className="w-[600px] h-auto rounded-[5px] border-2 flex justify-between items-center px-5 py-5 cursor-pointer select-none peer-checked:border-blue-700 peer-checked:border-l-8 peer-checked:pl-[14px]"
      >
        <div className="w-[90%]">
          <h3 className="font-bold">{title}</h3>
          <span className="text-wrap">{details}</span>
        </div>
        <div
          className="border-2 h-[25px] w-[25px] flex justify-center items-center rounded-[5px]"
        >
          <div className={`peer-checked:block ${checked ? "block" : "hidden"}`}>
            <CheckboxIcon />
          </div>
        </div>
      </label>
    </div>
  );
}