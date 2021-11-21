<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search results -->
    <div class="flex justify-center relative px-4 pt-8 pb-32 bg-hero-pattern bg-cover">
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input 
          class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none" 
          type="text"
          placeholder="Search for any IP addres or leave empty to get your IP info"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
