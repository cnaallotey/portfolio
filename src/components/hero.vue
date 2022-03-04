<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto px-5 xl:px-0">
        <div class="w-full relative flex py-20 lg:py-40 flex-col items-center">
          <img
            src="../assets/296.png"
            class="w-16 rounded-full bg-rose-200"
            alt="emogi"
          />
          <p class="text-base font-normal md:text-xl text-gray-800 mt-10">
            Hello, i'm <span class="font-bold">Charles Allotey</span>🥰
          </p>
          <h1
            class="text-4xl md:text-6xl max-w-3xl mt-4 text-center lg:text-7xl text-gray-900 font-extrabold"
          >
            Building Products, Brands & Experiences
          </h1>
          <p
            class="text-base relative z-0 text-center font-normal md:text-base text-gray-800 mt-10 max-w-xl"
          >
            Charles is a Frontend Engineer , UI Designer and Graphic Designer from Ghana
            <span></span> who loves to work 💵 for money but designs for passion 🥰
          </p>
          <div class="flex space-x-2">
            <button
              class="px-4 py-3 flex items-center mt-5 text-slate-900 bg-slate-50 border-2 border-slate-300 text-base font-medium rounded-lg"
              @click="github()"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 mr-2"
                  fill=""
                >
                  <path
                    d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                  /></svg
              ></span>
              View Github</button
            ><button
              class="px-4 py-3 flex items-center bg-slate-500 shadow-lg mt-5 text-white text-base font-medium rounded-lg hover:bg-slate-600 transition-all duration-100 hover:shadow-xl"
              @click="viewcv()"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
              View CV
            </button>
          </div>
          <img
            src="../assets/heroimage1.png"
            class="absolute w-96 top-10 hidden -translate-x-10 lg:flex left-0 -z-10"
            alt=""
          />
          <img
            src="../assets/heroimage2.png"
            class="w-96 absolute hidden bottom-10 translate-x-10 lg:flex right-0 -z-10"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imagetrim {
  border-radius: 0px 160px 0px 160px;
}
.imagetrims {
  border-radius: 160px 0px 160px 0px;
}
</style>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    //const link = ref("");
    const github = () => {
      window.open("https://github.com/cnaallotey", "_blank");
    };
    const viewcv = () => {
      window.open(
        "https://drive.google.com/file/d/1Gnz-cvDa_7uY-w4Jof8JP6TquLSe-EqZ/view?usp=sharing",
        "_blank"
      );
    };

    return { github, viewcv };
  },
};
</script>
