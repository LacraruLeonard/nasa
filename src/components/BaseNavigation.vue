<script></script>

<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">NasaAPI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/home" class="btn btn-ghost">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/earth-imagery" class="btn btn-ghost">Earth Imagery</RouterLink>
        </li>
        <li>
          <RouterLink to="/search-assets" class="btn btn-ghost">Search assets</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
