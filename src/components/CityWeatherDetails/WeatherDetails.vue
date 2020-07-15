<template>
  <v-col cols="4" class="d-none d-sm-block pa-15" align-self="center">
    <v-row class="py-5" align="center"
      ><v-icon size="60" class="mr-2">trending_down</v-icon>
      <span class="font-weight-black "
        >Min: {{ weather.temperatureMin }}°C</span
      ></v-row
    >
    <v-row class="py-5" align="center"
      ><v-icon size="60" class="mr-2">trending_up</v-icon>
      <span class="font-weight-black"
        >Max: {{ weather.temperatureMax }}°C</span
      ></v-row
    >
    <v-row class="py-5" align="center"
      ><v-icon size="60">invert_colors</v-icon>
      <span class="font-weight-black"
        >Humidity: {{ weather.humidity }} %</span
      ></v-row
    >
    <v-row class="py-5" align="center"
      ><v-icon size="60">play_for_work</v-icon>
      <span class="font-weight-black">Pressure: {{ weather.pressure }} Pa</span>
    </v-row>
    <v-row class="py-5" align="center"
      ><v-icon size="60" class="mr-2">filter_drama</v-icon>
      <span class="font-weight-black">Wind: {{ weather.windSpeed }} kmph</span>
    </v-row>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("weatherStore", ["weather"])
  }
};
</script>
