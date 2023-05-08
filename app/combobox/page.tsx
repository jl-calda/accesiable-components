"use client";

import { useState } from "react";
import ClientOnly from "../_components/_utils/ClientOnly";
import AutoComplete from "./AutoComplete";

const ComboBoxPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (value: any) => {
    setValue(value);
  };
  return (
    <div className="grid grid-cols-2">
      <div>{value}</div>
      <div>
        <ClientOnly>
          <AutoComplete
            value={""}
            onChange={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            getAsyncOptions={async (inputValue: string) => {
              const response = await fetch(
                `https://developers.onemap.sg/commonapi/search?searchVal=${inputValue}&returnGeom=Y&getAddrDetails=Y&pageNum=1`
              );
              const data = await response.json();
              return data.results.map((result: any) => result.ADDRESS);
            }}
          />
        </ClientOnly>
      </div>
    </div>
  );
};

export default ComboBoxPage;
