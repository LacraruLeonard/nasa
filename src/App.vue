<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import BaseNavigation from './components/BaseNavigation.vue'

const bgImg = ref('')
const bgImgClass = ref('')

const apiKey = 'vJieSblzdTkVCldro4EPDnGIFKhG4g9z7k0BnhjL'
const apiUrlAPod = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

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

onMounted(async () => {
  const apodData = await fetchData(apiUrlAPod)
  bgImg.value = apodData.hdurl
  bgImgClass.value = `bg-[url('${bgImg.value}')]`
})
</script>

<template>
  <BaseNavigation />
  <main :class="bgImgClass" class="bg-cover bg-center h-[calc(100vh-5rem)]">
    <RouterView />
  </main>
</template>

<style scoped></style>
