<template>
  <v-col xs="12" sm="8" style="background-color: #fbf9f9">
    <v-row justify="space-around">
      <span>{{ new Date() | moment("dddd") }}</span>
      <span>{{ new Date() | moment("MMMM Do YYYY") }}</span>
      <span>{{ new Date() | moment("h:mm:ss a") }}</span>
    </v-row>
    <v-row class="fill-height">
      <v-col cols="12" sm="6" align-self="center" class="d-flex">
        <p class="mx-auto temperature">
          -4°C
        </p>
      </v-col>
      <v-col cols="12" sm="6" align-self="center" class="d-flex">
        <div class="mx-auto ">
          <v-img
            class="mx-auto"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            height="100"
            width="100"
          ></v-img>

          <p class="font-weight-bold" style="font-size: 4rem">
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
