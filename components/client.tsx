"use client";
import React from "react";
import { usePromise } from "./context";

export default function Client(): JSX.Element {
  const foods = React.use(usePromise());
  return <div>{foods.join(", ")}</div>;
}
