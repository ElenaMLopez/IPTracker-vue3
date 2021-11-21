<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search results -->
    <div class="z-20 flex justify-center relative px-4 pt-8 pb-32 bg-hero-pattern bg-cover">
      <!-- Search input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input 
          v-model="queryIp"
          class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none" 
          type="text"
          placeholder="Search for any IP addres or leave empty to get your IP info"
          >
          <i 
            @click="getIpInfo"
            class="cursor-pointer 
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
      <IPinfo v-if="ipInfo" :ipInfo="ipInfo"/>
    </div>
    <!-- Map -->
    <div id="mapid" class="h-full z-10"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPinfo from "../components/IPinfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

const TOKEN = process.env.VUE_APP_TOKEN;
const GET_IP_URL = process.env.VUE_APP_GET_IP_URL;

export default {
  name: 'Home',
  components: {
    IPinfo,
  },
  setup () {
    let mymap;
    const queryIp = ref('');
    const ipInfo = ref(null);

    onMounted(() => {
      mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: `${TOKEN}`
      }).addTo(mymap);
    });
    
    const getIpInfo = async() => {
      try {
        const res = await axios.get(`${GET_IP_URL}${queryIp.value}`);
        const result = res.data;
        ipInfo.value = {
          address: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng
        };
        leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap)
        mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 9);
      } catch (error) {
        console.log('Error from get ip address: ', error);
      }
    }
    return { 
      queryIp, 
      ipInfo,
      getIpInfo,
    }
  }
}
</script>
