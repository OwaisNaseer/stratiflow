import React from "react";
import Input from "../../components/shared/Input";
export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-1">
      <div className="flex flex-col items-start">
        <Input
          label={"Price"}
          type={"input"}
          placeholder={"Please enter the price"}
          name={"price"}
          required={"true"}
          startContent={"Rs"}
          endContent={"%"}
          error={true}
          errorMsg={"error"}
        />
      </div>
    </div>
  );
}
