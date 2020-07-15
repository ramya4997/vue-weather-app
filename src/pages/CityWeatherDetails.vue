<template>
  <v-container class="fill-height weather-info">
    <v-progress-circular
      class="mx-auto"
      v-if="fetchingWeather"
      indeterminate
      size="64"
    ></v-progress-circular>

    <v-row v-if="!fetchingWeather && !error" class="fill-height">
      <temperature></temperature>
      <weather-details></weather-details>
    </v-row>
    <v-alert v-if="error" border="right" colored-border type="error"
      >{{ error }}
    </v-alert>
  </v-container>
</template>

<script>
import Temperature from "../components/CityWeatherDetails/Temperature.vue";
import WeatherDetails from "../components/CityWeatherDetails/WeatherDetails.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      test: false
    };
  },
  methods: {
    toggleTest() {
      this.$store.commit("weatherStore/setLoading", !this.loadingWeather);
    }
  },
  components: {
    temperature: Temperature,
    weatherDetails: WeatherDetails
  },
  created() {
    const cityName = this.$route.params.name;
    this.$store.dispatch("weatherStore/fetchWeather", cityName);
  },
  computed: {
    ...mapState("weatherStore", ["fetchingWeather", "error"])
  }
};
</script>
