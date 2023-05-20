"use client";

import { useState } from "react";
import RadioPill from "./components/RadioPill";

const data = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

const RadioPillClient = () => {
  const [selected, setSelected] = useState(data[0].value);

  return (
    <div>
      <div>SELECTED</div>
      <div>{data[data.map((item) => item.value).indexOf(selected)].label}</div>
      <RadioPill
        label="Radio Pill"
        onChange={setSelected}
        value={selected}
        options={data}
      />
    </div>
  );
};

export default RadioPillClient;
