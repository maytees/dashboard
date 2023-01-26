import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import ProxySettings from "./ProxySettings.tsx";

interface Dashboardprops {}

export default function Dashboard(props: Dashboardprops) {
  return (
    <div class="flex flex-row flex-wrap justify-start">
      <ProxySettings />
    </div>
  );
}
