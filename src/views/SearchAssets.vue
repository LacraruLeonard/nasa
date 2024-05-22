<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const data = ref('')

async function searchAssets() {
  const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery.value}`
  console.log(apiUrl)
  data.value = await fetchData(apiUrl)
}

function filterDataAscendingDate() {
  if (!data.value) return

  return data.value.collection.items.sort((a, b) => {
    return new Date(a.data[0].date_created) - new Date(b.data[0].date_created)
  })
}

function filterDataDescendingDate() {
  if (!data.value) return

  return data.value.collection.items.sort((a, b) => {
    return new Date(b.data[0].date_created) - new Date(a.data[0].date_created)
  })
}

function filterDataAscendingTitle() {
  if (!data.value) return

  return data.value.collection.items.sort((a, b) => {
    return a.data[0].title.localeCompare(b.data[0].title)
  })
}

async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
</script>

<template>
  <h1 class="text-4xl font-bold text-center mt-10">Search assets</h1>

  <div class="mx-auto mt-16 w-fit flex gap-4">
    <label class="input input-bordered flex items-center gap-2 w-64">
      <input v-model="searchQuery" type="text" class="grow" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <button @click="searchAssets" class="btn btn-primary">Search</button>
  </div>

  <div v-if="data" class="flex gap-4 mt-12 justify-center">
    <button @click="filterDataAscendingDate" class="btn btn-neutral btn-sm">Ascending</button>
    <button @click="filterDataDescendingDate" class="btn btn-neutral btn-sm">Descending</button>
    <button @click="filterDataAscendingTitle" class="btn btn-neutral btn-sm">By title</button>
  </div>

  <div v-if="data" class="mt-16">
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="(item, index) in data.collection.items"
        :key="index"
        class="flex flex-col gap-2 items-center"
      >
        <!-- <img :src="item[0].links.href" alt="asset" /> -->
        <p class="text-xl font-bold">{{ item.data[0].title }}</p>
        <img v-if="item.links" :src="item.links[0].href" :alt="item.data[0].title" width="400" />
        <p class="w-96 opacity-70">{{ item.data[0].description }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
h1, h2, h3 {
  color: #2e9f15;
}
</style>