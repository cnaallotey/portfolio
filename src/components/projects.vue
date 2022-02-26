<template>
  <div>
    <div class="w-full py-20">
      <div class="max-w-screen-xl mx-auto px-5 xl:px-0">
        <div class="w-full">
          <div class="flex">
            <div class="w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div class="w-full flex flex-col">
                <div>
                  <h1
                    class="text-base text-rose-600 text-left font-semibold tracking-wide uppercase"
                  >
                    Projects
                  </h1>
                  <p
                    class="mt-2 text-3xl leading-8 text-left font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                  >
                    What have i worked on?
                  </p>
                </div>
                <div class="p-5 shadow-xl mt-10 rounded-2xl">
                  <img src="../assets/web1.png" class="w-full rounded-lg" alt="" />
                  <div class="flex space-x-2 mt-5">
                    <p
                      class="px-2 py-1 text-white text-xs bg-indigo-500 font-normal rounded-2xl"
                    >
                      website
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-amber-500 font-normal rounded-2xl"
                    >
                      HTML
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-cyan-500 font-normal rounded-2xl"
                    >
                      Tailwind
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-green-500 font-normal rounded-2xl"
                    >
                      Vue Js
                    </p>
                  </div>
                  <p class="text-xl mt-5 font-semibold text-slate-900">
                    Plaza Website full
                  </p>
                  <p
                    class="text-lg font-normal text-slate-500 leading-tight tracking-wide mt-2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                    ratione quibusdam modi soluta aperiam nesciunt. Rem, iste ratione
                    debitis in vel officia eveniet exercitationem eos sequi voluptatem
                    eligendi quaerat omnis?
                  </p>
                  <div class="flex items-center space-x-4 mt-5">
                    <button
                      class="text-base font-medium px-5 py-3 bg-white text-slate-500 ring-2 ring-slate-500 rounded-lg"
                      @click="rrylord_github()"
                    >
                      View Repo
                    </button>
                    <button
                      class="text-base font-medium px-5 py-3 bg-rose-500 text-white rounded-lg"
                      @click="rrylord()"
                    >
                      Visit Page
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex lg:items-center">
                <div class="p-5 shadow-xl mt-10 rounded-2xl">
                  <img
                    src="../assets/currencyconvert.jpg"
                    class="w-full rounded-lg"
                    alt=""
                  />
                  <div class="flex flex-wrap space-x-2 mt-5">
                    <p
                      class="px-2 py-1 text-white text-xs bg-indigo-500 font-normal rounded-2xl"
                    >
                      webapp
                    </p>
                    <p
                      class="px-2 py-1 text-white hidden lg:flex text-xs bg-amber-500 font-normal rounded-2xl"
                    >
                      HTML
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-indigo-500 font-normal rounded-2xl"
                    >
                      Javascript
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-cyan-500 font-normal rounded-2xl"
                    >
                      Tailwind
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-green-500 font-normal rounded-2xl"
                    >
                      Vue Js
                    </p>
                  </div>
                  <p class="text-xl mt-5 font-semibold text-slate-900">
                    Currency Rates and Conversion Webapp
                  </p>
                  <p
                    class="text-lg font-normal text-slate-500 leading-tight tracking-wide mt-2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                    ratione quibusdam modi soluta aperiam nesciunt. Rem, iste ratione
                    debitis in vel officia eveniet exercitationem eos sequi voluptatem
                    eligendi quaerat omnis?
                  </p>
                  <div class="flex items-center space-x-4 mt-5">
                    <button
                      class="text-base font-medium px-5 py-3 bg-white text-slate-500 ring-2 ring-slate-500 rounded-lg"
                      @click="goto('https://github.com/cnaallotey/currencyconverter')"
                    >
                      View Repo
                    </button>
                    <button
                      class="text-base font-medium px-5 py-3 bg-rose-500 text-white rounded-lg"
                      @click="goto('https://currencyconvertcharles.netlify.app/')"
                    >
                      Visit Page
                    </button>
                  </div>
                </div>
              </div>
              <div class="h-full">
                <div class="p-5 shadow-xl mt-10 rounded-2xl">
                  <img src="../assets/purple.jpg" class="w-full rounded-lg" alt="" />
                  <div class="flex space-x-2 mt-5">
                    <p
                      class="px-2 py-1 text-white text-xs bg-indigo-500 font-normal rounded-2xl"
                    >
                      website
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-amber-500 font-normal rounded-2xl"
                    >
                      HTML
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-cyan-500 font-normal rounded-2xl"
                    >
                      Tailwind
                    </p>
                    <p
                      class="px-2 py-1 text-white text-xs bg-green-500 font-normal rounded-2xl"
                    >
                      Vue Js
                    </p>
                  </div>
                  <p class="text-xl mt-5 font-semibold text-slate-900">
                    Paas Landing Page
                  </p>
                  <p
                    class="text-lg font-normal text-slate-500 leading-tight tracking-wide mt-2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                    ratione quibusdam modi soluta aperiam nesciunt. Rem, iste ratione
                    debitis in vel officia eveniet exercitationem eos sequi voluptatem
                    eligendi quaerat omnis?
                  </p>
                  <div class="flex items-center mt-5">
                    <button
                      class="text-base font-medium px-5 py-3 bg-white hidden text-slate-500 ring-2 ring-slate-500 rounded-lg"
                      @click="goto()"
                    >
                      View Repo
                    </button>
                    <button
                      class="text-base font-medium px-5 py-3 bg-rose-500 text-white rounded-lg"
                      @click="goto('https://purplepennytech.netlify.app/')"
                    >
                      Visit Page
                    </button>
                  </div>
                </div>
              </div>
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
    const rrylord = () => {
      window.open("http://rrylord.herokuapp.com", "_blank");
    };
    const rrylord_github = () => {
      window.open("https://github.com/cnaallotey/portfolio", "_blank");
    };
    const goto = (webpage) => {
      window.open(webpage, "_blank");
    };

    return { rrylord, rrylord_github, goto };
  },
};
</script>
