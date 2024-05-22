<script setup>
import copyCode from '../about.js';
//import '../assets/about.css';
</script>

<template>
  <h1 class="text-4xl font-bold text-center mt-10">About</h1>
  <div class="about">
    <h1>About This Project</h1>
    <p>This project showcases images from NASA's satellites and provides daily updates on different celestial images.</p>
    <br>
    <h3>Key Features</h3>
    <ul>
      <li>Home page with daily images from the vast galaxy</li>
      <li>Images page displaying satellite photos</li>
      <li>About page with project details and code examples</li>
    </ul>
    <br>
    <h2>Project Details</h2>
    <p>The project is built using Vue.js and fetches data from NASA's public APIs. Below are some implementation details:</p>
    <br>
    

    <h2>Implementation Details</h2>
    <p>Here are some details on how the project is implemented:</p>
    <div class="code-example">
      <h3>Example: Fetching Data from NASA API : </h3>
      <div class="code-container">
        <button @click="copyCode('code-block')" class="copy-button">Copy</button>
        <pre><code id="code-block">async function fetchData(apiUrl) {
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
}</code></pre>
      </div>
    </div>

  </div>
</template>

<style scoped>
.about {
  padding: 20px;
}

h1, h2, h3 {
  color: #2e9f15;
}

p, ul, li {
  font-size: 16px;
  line-height: 1.5;
  color: #fefefe;
}

.code-example {
  background-color: #12532c;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 20px 0;
  color: #fefefe
}


.code-container {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

pre {
  margin: 0;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  display: block;
  white-space: pre-wrap;
}

img {
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
}
</style>
