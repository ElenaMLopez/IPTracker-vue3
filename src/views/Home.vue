<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search results -->
    <div class="z-20 flex justify-center relative px-4 pt-8 pb-32 bg-hero-pattern bg-cover">
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input 
          class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none" 
          type="text"
          placeholder="Search for any IP addres or leave empty to get your IP info"
          >
          <i class="cursor-pointer 
            bg-black 
            text-white px-4 
            rounded-tr-md 
            rounded-br-md
            flex
            items-center
            fas fa-chevron-right"
          ></i>
        </div>
      </div>
      <IPinfo />
    </div>
    <!-- Map -->
    <div id="mapid" class="h-full z-10"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPinfo from "../components/IPinfo.vue";
import leaflet from "leaflet";
import { onMounted } from "vue"

const TOKEN = process.env.VUE_APP_TOKEN;
console.log({TOKEN})

export default {
  name: 'Home',
  components: {
    IPinfo,
  },
  setup () {
    let mymap;
    onMounted(() => {
      mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);

    });
    leaflet
  }
}
</script>
