<script>
import { ref, onMounted } from 'vue'
import BaseNavigation from './components/BaseNavigation.vue'

const bgImg = ref('')
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

export default {
  components: {
    BaseNavigation
  },
  setup() {
    onMounted(async () => {
      const apodData = await fetchData(apiUrlAPod)
      bgImg.value = `url('${apodData.hdurl}')`
    })

    return {
      bgImg
    }
  }
}
</script>

<template>
  <BaseNavigation />
  <main :style="{ backgroundImage: bgImg }" class="bg-cover bg-center h-[calc(100vh-5rem)]">
    <RouterView />
  </main>
</template>

<style scoped></style>
