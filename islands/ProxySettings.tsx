import { useState } from "preact/hooks";
import Button from "../islands/Button.tsx";

export default function ProxySettings() {
  // Taken from a website
  const btnStyle =
    "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-red-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

  const [newPassword, setNewPass] = useState("asdf");

  const turnOn = (e: MouseEvent) => {
    e.preventDefault();
    fetch("http://localhost:6443/proxy/on", {
      method: "POST",
    });
  };

  const turnOff = (e: MouseEvent) => {
    e.preventDefault();
    fetch("http://localhost:6443/proxy/off", {
      method: "POST",
    });
  };

  const changePassword = (e: Event) => {
    e.preventDefault();
    fetch(`http://localhost:6443/proxy/password?newPass=${newPassword}`, {
      method: "POST",
    });
  };

  return (
    <div>
      <form
        action="/api/proxy"
        method="post"
        id="proxy-form"
        onSubmit={changePassword}
      >
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-2xl font-bold">Proxy Settings</h1>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="password font-light">Set new proxy password</label>
            <input
              type="password"
              name="password"
              placeholder="newCoolPass"
              onChange={(e) => {
                if (!e.target) return;
                setNewPass((e.target as HTMLInputElement).value);
              }}
              value={newPassword}
              className="px-4 py-2 border-b-2 border-gray-400 outline-none bg-gray-900 focus:border-gray-400"
            />
          </div>
          <div className="flex flex-row">
            <Button text="Turn on" onClick={turnOn} />
            <button type="submit" className={btnStyle}>
              sub
            </button>
            {
              /* <Button
              text="sub"
              form="proxy-form"
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
              }}
            /> */
            }
            <Button text="Turn off" onClick={turnOff} />
          </div>
        </div>
      </form>
    </div>
  );
}
