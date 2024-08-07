import React from "react";
import CustomNextUICheckbox from "../../components/shared/Checkbox";
import { CheckboxIcon } from "../../assets/icons";
import CustomSelect from "../../components/shared/CustomSelect";
export default function Home() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [isSelected2, setIsSelected2] = React.useState(false);
  const [isSelected3, setIsSelected3] = React.useState(false);

  const month = [
    { key: "First Month", label: "First Month" },
    { key: "Second Month", label: "Second Month" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-1">
      <div className="flex flex-col items-start">
        <p>Checkbox:</p>
        <CustomNextUICheckbox
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          icon={<CheckboxIcon />}
          label={"option"}
        />
        <CustomNextUICheckbox
          isSelected={isSelected2}
          setIsSelected={setIsSelected2}
          icon={<CheckboxIcon />}
          label={"Are you human"}
        />

        <CustomNextUICheckbox
          isSelected={isSelected3}
          setIsSelected={setIsSelected3}
          icon={<CheckboxIcon />}
        />

        <p className="mt-5">Select:</p>

        <CustomSelect data={month} placeholder={"Select month"} />
      </div>
    </div>
  );
}
