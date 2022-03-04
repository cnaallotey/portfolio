<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-5 py-5 xl:px-0">
        <div class="w-full flex items-center justify-between">
          <p class="text-blue-600 font-bold text-2xl">
            Charles<span class="text-rose-500">.</span>
          </p>
          <div class="flex">
            <ul
              class="hidden space-x-8 text-base font-medium text-gray-800 select-none cursor-pointer"
            >
              <li>About me</li>
              <li>Services</li>
              <li>Works</li>
              <li>Skills</li>
            </ul>
          </div>
          <div class="flex items-center">
            <button
              class="py-3 px-4 text-base font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-md shadow-lg"
              @click="scroll()"
            >
              Contact me
            </button>
            <div
              class="ml-4 hidden lg:flex flex-col items-center border-l-2 border-slate-500 pl-4"
            >
              <img src="../assets/whatsapp.svg" class="w-4 h-4" alt="whatsapp" />
              <p class="font-normal text-sm text-slate-900">+233-50-655-7295</p>
            </div>
            <div class="ml-4 hidden lg:flex flex-col items-center">
              <img src="../assets/gmail.svg" class="w-4 h-4" alt="whatsapp" />
              <p class="font-normal text-sm text-slate-900">
                charlesallotey1995@gmail.com
              </p>
            </div>
          </div>
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
