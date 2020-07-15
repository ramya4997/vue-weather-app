<template>
  <v-col xs="12" sm="8" style="background-color: #fbf9f9">
    <v-row justify="space-around">
      <span>{{ new Date() | moment("dddd") }}</span>
      <span>{{ new Date() | moment("MMMM Do YYYY") }}</span>
      <span>{{ new Date() | moment("h:mm:ss a") }}</span>
    </v-row>
    <v-row class="fill-height">
      <v-col cols="12" sm="6" align-self="center" class="d-flex">
        <p class="mx-auto temperature">{{ weather.temperature }}°C</p>
      </v-col>
      <v-col cols="12" sm="6" align-self="center" class="d-flex">
        <div class="mx-auto ">
          <v-row align="center">
            <v-img :src="weather.iconUrl" height="100" width="100"></v-img>
            <span>{{ weather.type }}</span>
          </v-row>
          <p class="font-weight-bold" style="font-size: 3vw ">
            {{ $route.params.name }}
          </p>
          <p style="font-size: 1.2rem" class="grey--text">
            {{ $route.params.state }}
          </p>
        </div>
      </v-col>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bangers&display=swap");

.temperature {
  font-family: "Archivo Black", sans-serif;
  font-family: "Bangers", cursive;
  font-size: 12vw;
}
</style>
