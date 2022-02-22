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
                class="w-full relative p-10 lg:p-16 bg-slate-900 rounded-3xl overflow-hidden shadow-xl"
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
                      :src="`/src/assets/${frontend_skill.src}`"
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
                class="w-full relative p-10 lg:p-16 bg-slate-900 rounded-3xl overflow-hidden shadow-xl"
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
                      :src="`/src/assets/${visual_skill.src}`"
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
                  src="../assets/search.png"
                  class="absolute w-96 z-0 translate-x-36 opacity-20 translate-y-36 bottom-0 right-0"
                  alt=""
                />
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
      { skill: "Adobe XD", sKillset: "Intermediate", src: "photoshop.svg" },
      { skill: "Adobe Photoshop", sKillset: "Experienced", src: "javascript.svg" },
      { skill: "Adobe Illustrator", sKillset: "Experienced", src: "tailwind.svg" },
      { skill: "Vue Js", sKillset: "Experienced", src: "vue.svg" },
      { skill: "React Js", sKillset: "Basic", src: "react.svg" },
      { skill: "Node Js", sKillset: "Intermediate", src: "node-js.svg" },
      { skill: "Git", sKillset: "Intermediate", src: "git.svg" },
    ]);
    return { frontend_skills, visual_skills };
  },
};
</script>
