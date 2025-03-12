import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="text-center bg-softGray min-h-screen">
      <section class="relative h-[500px] flex justify-center items-center bg-[url('/images/family-beach.jpg')] bg-cover bg-center text-white">
        <div class="bg-black/50 p-10 rounded-lg">
          <h1 class="text-5xl font-bold">Welcome to the Leggett Family</h1>
          <p class="mt-3 text-xl">A journey of love, laughter, and legacy.</p>
        </div>
      </section>
      <section class="p-10">
        <h2 class="text-3xl font-semibold text-deepBlue">Our Story</h2>
        <p class="mt-4 text-lg">Discover how our family's journey began...</p>
        <a href="/our-story" class="mt-4 inline-block bg-deepBlue text-white px-6 py-2 rounded">Read More</a>
      </section>
    </main>
  );
});
