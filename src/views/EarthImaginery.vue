<script setup>
import { ref } from 'vue'

const latitude = ref('')
const longitude = ref('')
const date = ref('')

const imgData = ref('')
const loading = ref(false)

const apiKey = 'vJieSblzdTkVCldro4EPDnGIFKhG4g9z7k0BnhjL'
const apiUrl = ref('')

async function setApiUrl() {
  apiUrl.value = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude.value}&lat=${latitude.value}&date=${date.value}&dim=0.15&api_key=${apiKey}`
  console.log(apiUrl.value)
  loading.value = true
  imgData.value = await fetchData(apiUrl.value)
  loading.value = false
}

async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response
    return data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
</script>

<template>
  <h1 class="text-4xl font-bold text-center mt-10">Earth Imaginery</h1>

  <div class="flex gap-6 mt-32 px-64">
    <div class="flex flex-col gap-6">
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Latitude</span>
        </div>
        <input
          v-model="latitude"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </label>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Longitude</span>
        </div>
        <input
          v-model="longitude"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
      </label>
      <input v-model="date" type="date" class="input input-bordered w-full max-w-xs" />

      <button @click="setApiUrl" class="btn btn-primary">Search</button>
    </div>
    <div class="items-center flex flex-col gap-6">
      <h3>Image from the satellite</h3>
      <div v-if="loading" class="loader">Loading...</div>
      <div v-else-if="imgData.url">
        <img :src="imgData.url" width="500" alt="Img from satellite" />
      </div>
      <div v-else>
        <p>No image found</p>
      </div>
    </div>
  </div>
</template>
