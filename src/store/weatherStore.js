import axios from "axios";
import { Weather } from "../models/weather";

const APP_ID = "946cfcb7668a372430f1248eade5e2b5";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${APP_ID}&units=metric`;

export default {
  namespaced: true,
  state: {
    fetchingWeather: false,
    error: null,
    weather: null
  },
  mutations: {
    setLoading(state, isFetching) {
      state.fetchingWeather = isFetching;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setError(state, error) {
      state.error = error;
    },
    clearData(state) {
      state.fetchingWeather = false;
      state.error = null;
      state.weather = null;
    }
  },
  actions: {
    async fetchWeather({ commit }, cityName) {
      commit("setLoading", true);
      commit("setError", null);
      try {
        const res = await axios.get(`${WEATHER_API_URL}&q=${cityName}`);
        const resData = res.data;
        const weather = resData.weather[0];
        const mainData = resData.main;
        const weatherData = new Weather(
          weather.main,
          weather.description,
          mainData.temp,
          mainData.temp_min,
          mainData.temp_max,
          mainData.pressure,
          mainData.humidity,
          resData.wind.speed,
          weather.icon
        );

        commit("setWeather", weatherData);
      } catch (error) {
        commit("setError", "Oops! Something went wrong");
      } finally {
        commit("setLoading", false);
      }
    }
  }
};
