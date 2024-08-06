import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { CancelIcon } from "../../assets/icons";
export default function CustomSelect({ data, placeholder }) {
  const [value, setValue] = useState([]);
  const onReset = () => {
    setValue([]);
  };

  return (
    <div className="relative">
      <Select
        items={data}
        selectedKeys={value}
        onSelectionChange={setValue}
        placeholder={placeholder}
        className="w-[200px] bg-white select-none"
      >
        {data?.map((data) => (
          <SelectItem key={data.key}>{data.label}</SelectItem>
        ))}
      </Select>

      <div className="cursor-pointer absolute top-3 right-7" onClick={onReset}>
        <CancelIcon />
      </div>
    </div>
  );
}
