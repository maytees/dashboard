import { useState } from "preact/hooks";
import Button from "../islands/Button.tsx";

interface ProxySettingsProps {}

export default function ProxySettings(props: ProxySettingsProps) {
  const btnStyle =
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-red-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";
  return (
    <div>
      <form
        action="/api/proxy"
        method="post"
        id="proxy-form"
        onSubmit={(e) => {
          alert("joe mama");
        }}
      >
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-2xl font-bold">Proxy Settings</h1>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="password">Proxy password</label>
            <input
              type="password"
              name="password"
              className="px-4 py-2 border-b-2 border-gray-400 outline-none bg-gray-900 focus:border-gray-400"
            />
          </div>
          <div className="flex flex-row">
            <Button
              text="Turn on"
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
              }}
            />
            <button type="submit" className={btnStyle}>
              sub
            </button>
            {/* <Button
              text="sub"
              form="proxy-form"
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
              }}
            /> */}
            <Button
              text="Turn off"
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
