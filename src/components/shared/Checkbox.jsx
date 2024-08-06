import React from "react";
import { Checkbox } from "@nextui-org/react";
export default function CustomCheckbox({isSelected, setIsSelected, icon, label }) {
  
  return (
    <div className="flex gap-4">
      <Checkbox
        size="md"
        color="default"
        radius="sm"
        data-hover="none"
        isSelected={isSelected}
        onValueChange={setIsSelected}
        classNames={{
          base: "", 
          wrapper: "bg-white",
          icon: "bg-white w-full h-full p-0.5 rounded-md border-2 border-grey-300"
        }}
        icon={icon}
      >
       {label}
      </Checkbox>
    </div>
  );
}
