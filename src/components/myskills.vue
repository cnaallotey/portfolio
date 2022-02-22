<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-5 py-20 rounded-3xl">
        <div class="w-full">
          <h1
            class="text-base text-rose-600 text-center font-semibold tracking-wide uppercase"
          >
            Skills
          </h1>
          <p
            class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            What can i offer?
          </p>
          <div class="flex space-x-10 mt-4">
            <div class="w-full lg:w-1/2">
              <div
                class="w-full relative p-10 lg:p-16 bg-slate-900 rounded-3xl overflow-hidden shadow-xl h-full"
              >
                <h2 class="text-xl font-semibold text-center text-white">
                  Frontend Engineering
                </h2>
                <div class="grid grid-cols-2 gap-8 mt-4 relative z-10">
                  <div
                    class="space-y-1 flex items-center"
                    v-for="frontend_skill in frontend_skills"
                    :key="frontend_skill"
                  >
                    <img
                      :src="'/src/assets/' + frontend_skill.src"
                      class="w-8 mr-2"
                      alt=""
                    />
                    <div>
                      <p class="text-lg font-medium text-white">
                        {{ frontend_skill.skill }}
                      </p>
                      <p class="text-sm font-normal text-slate-400">
                        {{ frontend_skill.sKillset }}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="../assets/search.png"
                  class="absolute w-96 z-0 translate-x-36 opacity-20 translate-y-36 bottom-0 right-0"
                  alt=""
                />
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div
                class="w-full relative p-10 lg:p-16 bg-slate-900 rounded-3xl overflow-hidden shadow-xl h-full"
              >
                <h2 class="text-xl font-semibold text-center text-white">
                  Visual Design
                </h2>
                <div class="grid grid-cols-2 gap-8 mt-4 relative z-10">
                  <div
                    class="space-y-1 flex items-center"
                    v-for="visual_skill in visual_skills"
                    :key="visual_skill"
                  >
                    <img
                      :src="'/src/assets/' + visual_skill.src"
                      class="w-8 mr-2"
                      alt=""
                    />
                    <div>
                      <p class="text-lg font-medium text-white">
                        {{ visual_skill.skill }}
                      </p>
                      <p class="text-sm font-normal text-slate-400">
                        {{ visual_skill.sKillset }}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="../assets/Other07.png"
                  class="absolute w-96 z-0 translate-x-36 opacity-20 translate-y-36 bottom-0 right-0"
                  alt=""
                />
                <h2 class="text-xl font-semibold text-center text-white mt-8">
                  Other Skills
                </h2>
                <div class="grid grid-cols-2 gap-2 mt-4 relative z-10">
                  <div
                    class="space-x-1 flex items-start"
                    v-for="other_skill in other_skills"
                    :key="other_skill"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 hidden text-rose-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <div>
                      <p class="text-lg font-medium text-slate-400">
                        {{ other_skill }}
                      </p>
                    </div>
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
import { ref } from "vue";
export default {
  setup() {
    const frontend_skills = ref([
      { skill: "HTML", sKillset: "Experienced", src: "html.svg" },
      { skill: "CSS", sKillset: "Intermediate", src: "css3.svg" },
      { skill: "Javascript", sKillset: "Experienced", src: "javascript.svg" },
      { skill: "Tailwind", sKillset: "Experienced", src: "tailwind.svg" },
      { skill: "Vue Js", sKillset: "Experienced", src: "vue.svg" },
      { skill: "React Js", sKillset: "Basic", src: "react.svg" },
      { skill: "Node Js", sKillset: "Intermediate", src: "node-js.svg" },
      { skill: "Git", sKillset: "Intermediate", src: "git.svg" },
    ]);
    const visual_skills = ref([
      { skill: "Figma", sKillset: "Experienced", src: "figma2.svg" },
      { skill: "Adobe XD", sKillset: "Experienced", src: "adobe-xd.svg" },
      {
        skill: "Adobe Photoshop",
        sKillset: "Experienced",
        src: "photoshop.svg",
      },
      {
        skill: "Adobe Illustrator",
        sKillset: "intermediate",
        src: "adobe-illustrator.svg",
      },
    ]);
    const other_skills = ref([
      "Critical Thinking",
      "Report Writing",
      "Teamwork",
      "Planning",
      "Problem Solving",
      "Leadership",
    ]);
    return { frontend_skills, visual_skills, other_skills };
  },
};
</script>
