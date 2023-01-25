import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matees dashboard</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md"></div>
    </>
  );
}
