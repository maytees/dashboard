import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import ProxySettings from "./ProxySettings.tsx";

export default function Dashboard() {
  return (
    <div class="flex flex-row flex-wrap justify-start">
      <ProxySettings />
    </div>
  );
}
