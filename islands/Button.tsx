import { useState } from "preact/hooks";

interface ButtonProps {
  text: string;
  onClick: any;
  form?: string;
}

export default function Button(props: ButtonProps) {
  console.log(props);
  return (
    <button
      onClick={props.onClick}
      form={props.form ? props.form : undefined}
      type={props.form ? "submit" : undefined}
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-red-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {props.text}
    </button>
  );
}
