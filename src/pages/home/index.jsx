import React from "react";
import CustomInput from "../../components/shared/Input";
export default function Home() {
  

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-1">
      <div className="flex flex-col items-start">
     <CustomInput
       label={"price"}
       type={"input"}
       placeholder={"please Enter the price"}
       name={"price"}
       required={"true"}
       startContent={"Rs"}
       endContent={"%"}
      //  error={true}
      //  errorMsg={"error"}
     />
      </div>
    </div>
  );
}
