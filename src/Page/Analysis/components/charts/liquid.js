import React, { useState, useEffect } from "react";
import { Liquid } from "@ant-design/plots";

function liquid() {
  const config = {
    percent: 0.65,
    outline: {
      border: 2,
      distance: 10,
    },
    wave: {
      length: 228,
    },
  };
  return <Liquid {...config} />;
}

export default liquid;