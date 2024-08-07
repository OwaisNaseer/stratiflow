import React from "react";
import CustomCheckbox from "../../components/shared/CustomCheckbox";
export default function Home() {
  const [checked, setChecked] = React.useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
  }
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-1">
      <div className="flex flex-col items-start">
        <CustomCheckbox
          onChange={handleChange}
          checked={checked}
          setChecked={setChecked}
          title={"Lake house"}
          details={"6661 spring street, Columbus 48228-4763"}
        />
      </div>
    </div>
  );
}
