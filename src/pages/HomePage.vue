<template>
  <v-container class="background">
    <!-- <v-img src="../assets/weather.jpg"></v-img> -->
    <v-row justify="center">
      <p class="logo1">Weather</p>
      <p class="logo2">Report</p>
    </v-row>
    <v-row>
      <v-col xs="12" sm="6" offset-sm="3">
        <v-text-field outlined placeholder="Enter a city name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="6"
        offset="3"
        class="mb-1 pa-0"
        v-for="city in initialCities"
        :key="city.name"
      >
        <v-card
          v-ripple
          elevation="0"
          outlined
          @click="navigateToWeatherDetails(city)"
        >
          <v-card-text
            ><span class="black--text">{{ city.name }}</span>
            <span class="grey--text">, {{ city.state }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cityStore", ["initialCities"])
  },
  methods: {
    navigateToWeatherDetails(city) {
      this.$store.commit("cityStore/selectCity", city);
      this.$router.push(`/city/${city.state}/${city.name}`);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Anton&family=Arvo&display=swap");

.logo1 {
  font-family: "Anton", sans-serif;
  font-size: 8vw;
}
.logo2 {
  font-family: "Anton", sans-serif;
  font-family: "Arvo", serif;
  font-size: 4vw;
}
.background {
  background-color: #fbf9f9;
}
</style>
