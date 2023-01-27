import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import Dashboard from "../islands/Dashboard.tsx";

interface Session {
  active: boolean;
}

export const handler: Handlers = {
  GET(req, ctx) {
    const cookies = getCookies(req.headers);
    return ctx.render!({ active: cookies.sess === "coolsess" });
  },
};

export default function Home({ data }: PageProps<Session>) {
  return (
    <>
      <Head>
        <title>Matees dashboard</title>
      </Head>
      <main className="dark:(bg-gray-900 text-white) w-screen h-screen flex justify-center">
        {!data.active
          ? (
            <div className="flex flex-col items-center mt-10 gap-20">
              <h1 class="text-4xl font-light">Server dashboard</h1>
              <Dashboard />
            </div>
          )
          : (
            "This website is a work in progress"
          )}
      </main>
    </>
  );
}

function Login() {
  return (
    <form method="post" action="/api/login">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
