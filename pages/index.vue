<script setup>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
const code = ref("");
const extensions = [javascript(), oneDark];
//================================================

const isVisible = ref(false)
</script>

<template>
    <div>
        <the-navbar class="h-[7vh]"></the-navbar>

        <div id="ide" class="h-[93vh] grid grid-cols-3">

            <div class="h-full w-12 bg-gray-200 hover:w-60 duration-150 ease-in" @mouseover="isVisible = true" @mouseleave="isVisible = false">
              <p class="font-bold text-xl mx-auto mt-4" :class="{ hidden: isVisible}"> >> </p>
              <ul class="flex flex-col p-4 gap-2" :class="{ hidden: !isVisible}">
                <li class="btn btn-primary rounded btn-ghost justify-start">
                  <a>Latihan 1</a>
                </li>
                <li class="btn btn-primary rounded btn-ghost justify-start">
                  <a>Latihan 2</a>
                </li>
                <li class="btn btn-primary rounded btn-ghost justify-start">
                  <a>Latihan 3</a>
                </li>
                <li class="btn btn-primary rounded btn-ghost justify-start">
                  <a>Latihan 4</a>
                </li>
              </ul>
            </div>

            <div class="soal bg-gray-100 overflow-y-auto">
                <div class="tabs tabs-boxed sticky top-0 rounded-none px-6 py-2 shadow">
                    <a class="tab tab-active">Soal</a>
                    <a class="tab">Output</a>
                </div>
                <div class="p-6">
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis similique fuga nulla
                        vel repellat vero odit necessitatibus quibusdam dolore. Tempore, amet consectetur totam
                        voluptatum ipsa accusantium iure quam iusto recusandae quibusdam est. Commodi eveniet, voluptas
                        fuga iste ipsa consectetur vitae quo. Consequuntur animi non at ullam pariatur praesentium
                        commodi, et aut quasi vitae maxime harum eligendi eum ea repellat corrupti. Quam natus illum
                        distinctio repellat labore error quo quis vero sapiente nihil sunt officiis reiciendis dolor
                        iure, nam ducimus odit quod at soluta impedit. Eligendi, odit sint debitis vel optio aut
                        expedita illum perspiciatis, pariatur vitae, quas quo magnam?
                    </p>
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis similique fuga nulla
                        vel repellat vero odit necessitatibus quibusdam dolore. Tempore, amet consectetur totam
                        voluptatum ipsa accusantium iure quam iusto recusandae quibusdam est. Commodi eveniet, voluptas
                        fuga iste ipsa consectetur vitae quo. Consequuntur animi non at ullam pariatur praesentium
                        commodi, et aut quasi vitae maxime harum eligendi eum ea repellat corrupti. Quam natus illum
                        distinctio repellat labore error quo quis vero sapiente nihil sunt officiis reiciendis dolor
                        iure, nam ducimus odit quod at soluta impedit. Eligendi, odit sint debitis vel optio aut
                        expedita illum perspiciatis, pariatur vitae, quas quo magnam?
                    </p>
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis similique fuga nulla
                        vel repellat vero odit necessitatibus quibusdam dolore. Tempore, amet consectetur totam
                        voluptatum ipsa accusantium iure quam iusto recusandae quibusdam est. Commodi eveniet, voluptas
                        fuga iste ipsa consectetur vitae quo. Consequuntur animi non at ullam pariatur praesentium
                        commodi, et aut quasi vitae maxime harum eligendi eum ea repellat corrupti. Quam natus illum
                        distinctio repellat labore error quo quis vero sapiente nihil sunt officiis reiciendis dolor
                        iure, nam ducimus odit quod at soluta impedit. Eligendi, odit sint debitis vel optio aut
                        expedita illum perspiciatis, pariatur vitae, quas quo magnam?
                    </p>
                    <p class="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis similique fuga nulla
                        vel repellat vero odit necessitatibus quibusdam dolore. Tempore, amet consectetur totam
                        voluptatum ipsa accusantium iure quam iusto recusandae quibusdam est. Commodi eveniet, voluptas
                        fuga iste ipsa consectetur vitae quo. Consequuntur animi non at ullam pariatur praesentium
                        commodi, et aut quasi vitae maxime harum eligendi eum ea repellat corrupti. Quam natus illum
                        distinctio repellat labore error quo quis vero sapiente nihil sunt officiis reiciendis dolor
                        iure, nam ducimus odit quod at soluta impedit. Eligendi, odit sint debitis vel optio aut
                        expedita illum perspiciatis, pariatur vitae, quas quo magnam?
                    </p>
                </div>
            </div>

            <div id="code-editor" class="w-full overflow-auto pd-4 relative">
                <codemirror
                    v-model="code"
                    class="text-lg"
                    :style="{ height: '100%', 'padding-bottom': '58px' }"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    :extensions="extensions"
                />
                <div class="flex items-center justify-end h-[58px] px-8 absolute bottom-0 bg-slate-600 w-full shadow-lg">
                    <button class="btn btn-primary btn-sm btn-outline mr-4">Test</button>
                    <button class="btn btn-primary btn-sm">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#ide {
  grid-template-columns: auto 1fr 1fr;
}

</style>