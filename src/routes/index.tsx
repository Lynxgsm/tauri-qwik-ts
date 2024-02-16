import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const linkClass = "text-blue-600 hover:underline";
  const codeClass = "text-sm bg-black text-white p-2 rounded-md";
  return (
    <main class="flex h-screen flex-col items-center justify-center text-center">
      <h1 class="font-bold">
        This is a starter template for{" "}
        <a class={linkClass} target="_blank" href="https://qwik.dev/">
          Qwik
        </a>{" "}
        +{" "}
        <a class={linkClass} target="_blank" href="https://tauri.app/">
          Tauri
        </a>{" "}
        👋
      </h1>
      <br />
      <p>
        Just run <code class={codeClass}>bun run dev:android</code> to run
        android development
        <br />
        <br />
        Just run <code class={codeClass}>bun run tauri dev</code> to run desktop
        development
      </p>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
