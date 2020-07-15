<template>
  <v-container class="fill-height weather-info">
    <v-row class="fill-height">
      <temperature></temperature>
      <weather-details></weather-details>
    </v-row>
  </v-container>
</template>

<script>
import Temperature from "../components/CityWeatherDetails/Temperature.vue";
import WeatherDetails from "../components/CityWeatherDetails/WeatherDetails.vue";

export default {
  components: {
    temperature: Temperature,
    weatherDetails: WeatherDetails
  },
  created() {
    console.log(this.$route.params.name);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bangers&display=swap");

.temperature {
  font-family: "Archivo Black", sans-serif;
  font-family: "Bangers", cursive;
  font-size: 15rem;
}
</style>
