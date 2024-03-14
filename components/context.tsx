"use client";
import React from "react";

const FoodContext = React.createContext<Promise<string[]> | null>(null);

export const usePromise = () => {
  const food = React.useContext(FoodContext);
  if (!food) throw new Error("not in provider");
  return food;
};

function Context({
  children,
  promise,
}: {
  children: React.ReactNode;
  promise: Promise<string[]>;
}): JSX.Element {
  return (
    <FoodContext.Provider value={promise}>{children}</FoodContext.Provider>
  );
}

export default Context;
