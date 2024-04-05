<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/earth-imaginery" class="btn btn-ghost">Earth Imaginery</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
