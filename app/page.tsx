import React from "react";
import Client from "@/components/client";
import Context from "@/components/context";
import { data } from "@/lib/data";

export default function Home(): JSX.Element {
  return (
    <main>
      <Context promise={data}>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Client />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Client />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Client />
        </React.Suspense>
      </Context>
    </main>
  );
}
