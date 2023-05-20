import React from "react";

import RadioPillClient from "./RadioPillClient";

type Props = {};

const RadioPage = (props: Props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
      <div>
        <div>Radio Pill</div>
      </div>
      <RadioPillClient />
    </div>
  );
};

export default RadioPage;
