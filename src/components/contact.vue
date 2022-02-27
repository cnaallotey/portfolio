<template>
  <div>
    <div class="w-full bg-contact-image bg-cover">
      <div class="w-full bg-slate-900 bg-opacity-95">
        <div class="max-w-screen-xl mx-auto px-5 xl:px-0 py-40">
          <div class="max-w-screen-md mx-auto">
            <h1
              class="text-base text-rose-600 text-center font-semibold tracking-wide uppercase"
            >
              contact
            </h1>
            <p
              class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Get in touch!
            </p>
            <div class="flex justify-around mt-4 max-w-screen-sm mx-auto">
              <div
                class="p-8 flex flex-col items-center group hover:bg-rose-500 hover:shadow-2xl rounded-2xl transition-all select-none cursor-pointer duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter text-white"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
                <p class="text-base text-white font-normal mt-2">@adotey_</p>
              </div>
              <div
                class="p-8 flex flex-col items-center group hover:bg-rose-500 hover:shadow-2xl rounded-2xl transition-all select-none cursor-pointer duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter text-white skew-x-0"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
                <p class="text-base text-white font-normal mt-2">@adotey_</p>
              </div>
              <div
                class="p-8 flex flex-col items-center group hover:bg-rose-500 hover:shadow-2xl rounded-2xl transition-all select-none cursor-pointer duration-200 skew-x-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter text-white"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
                <p class="text-base text-white font-normal mt-2">@adotey_</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-2xl shadow-lg p-5 lg:p-8 mt-5">
              <form action="submit" class="w-full" @submit.prevent="contact()">
                <div class="w-full lg:flex">
                  <div class="flex w-full lg:w-1/2 h-full flex-col lg:mr-8">
                    <label for="name" class="font-sm mb-1">Your name</label
                    ><input
                      type="text"
                      name="name"
                      placeholder="eg. John Doe"
                      class="rounded-lg border-gray-200"
                      v-model="contact_form.name"
                      required
                    />
                    <label for="email" class="font-sm mb-1 mt-4">Your email</label
                    ><input
                      type="email"
                      name="email"
                      placeholder="eg. you@example.com"
                      class="rounded-lg border-gray-200"
                      v-model="contact_form.email"
                      required
                    />
                    <label for="Phone" class="font-sm mb-1 mt-4">Your phone number</label
                    ><input
                      type="tel"
                      name="contact"
                      v-model="contact_form.contact"
                      placeholder=""
                      class="rounded-lg border-gray-200"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">
                    <label for="message" class="font-sm mb-1">Your Message</label
                    ><textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="8"
                      class="rounded-lg border-0 bg-gray-100"
                      v-model="contact_form.message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="w-full flex justify-center">
                  <button
                    type="submit"
                    class="px-5 py-3 text-base font-medium text-white rounded-lg bg-rose-500 hover:bg-rose-600 hover:shadow-xl transition-all duration-200 mx-auto mt-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="w-full lg:flex justify-between pt-20 mt-20 border-t -mb-0 lg:-mb-20 border-slate-800"
          >
            <p class="font-normal text-base text-white">
              2022 Uicharles, All Rights Reserved
            </p>
            <p class="font-normal text-base text-white mt-5 lg:mt-0">
              charlesallotey1995@gmail.com
            </p>
            <div class="flex items-center justify-start mt-5 lg:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-dribbble w-16 text-white"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path
                  d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const contact_form = ref({});

    const contact = async () => {
      //console.log(contact_form.value);
      const response = await axios.post(
        "https://getform.io/f/84ccb698-eb86-493d-b43a-37086b7d8109",
        contact_form.value
      );
      console.log(response);
    };
    return { contact_form, contact };
  },
};
</script>
