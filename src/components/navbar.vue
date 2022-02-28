<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-5 py-5 xl:px-0">
        <div class="w-full flex items-center justify-between">
          <p class="text-blue-600 font-bold text-2xl">
            Charles<span class="text-rose-500">.</span>
          </p>
          <div>
            <ul
              class="hidden lg:inline-flex space-x-8 text-base font-medium text-gray-800 select-none cursor-pointer"
            >
              <li>About me</li>
              <li>Services</li>
              <li>Works</li>
              <li>Skills</li>
            </ul>
          </div>
          <button
            class="py-3 px-4 text-base font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-md shadow-lg"
            @click="scroll()"
          >
            Contact me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const scroll = () => {
      window.scrollTo({ top: 5000, behavior: "smooth" });
    };
    return { scroll };
  },
};
</script>
