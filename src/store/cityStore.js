import { City } from "../models/city";
import axios from "axios";

const SEARCH_CITY_URL = "https://indian-cities-api-nocbegfhqg.now.sh/cities";

export default {
  namespaced: true,
  state: () => ({
    cities: [
      new City("Bangalore", "Karnataka", "Bangalore Urban"),
      new City("Mumbai", "Maharashtra", "Mumbai (Suburban) and Mumbai"),
      new City("Visakhapatnam", "Andhra Pradesh", "Viskhapatnam"),
      new City("Kolkata", "West Bengal ", "Kolkata"),
      new City("Chennai", "Tamil Nadu ", "Chennai"),
      new City("Hyderabad", "Andhra Pradesh ", "Hyderabad and Rangareddi"),
      new City("Pune", "Maharashtra", "Pune"),
      new City("Ahmedabad", "Gujarat", "Ahmedabad"),
      new City("Trivandrum", "Kerala", "Thiruvananthapuram"),
      new City("Lucknow", "Uttar Pradesh", "Lucknow")
    ],
    searchResults: [],
    fetchingSearchResult: false,
    searchError: null
  }),
  getters: {
    initialCities(state) {
      //shows only first 10 cities
      return state.cities.slice(0, 9);
    }
  },
  mutations: {
    selectCity(state, city) {
      //remove the selected city from the cities array
      state.cities = state.cities.filter(c => c.name != city.name);
      //add city to top of cities array
      state.cities.unshift(city);
    },
    setLoading(state, isLoading) {
      state.fetchingSearchResult = isLoading;
    },
    setSearchResult(state, results) {
      state.searchResults = results;
    },
    setError(state, error) {
      state.searchError = error;
    }
  },
  actions: {
    async fetchSearchReslts({ commit }, searchTerm) {
      let cities = [];
      commit("setLoading", true);
      commit("setError", null);
      try {
        const res = await axios.get(
          `${SEARCH_CITY_URL}?City_like=${searchTerm}`
        );
        const resData = res.data;
        for (let i = 0; i < resData.length; i++) {
          const cityData = resData[i];
          const city = new City(
            cityData.City,
            cityData.State,
            cityData.District
          );
          cities.push({
            value: city,
            text: city.name
          });
        }

        commit("setSearchResult", cities);
      } catch (error) {
        commit("setError", error);
      } finally {
        commit("setLoading", false);
      }
    }
  }
};
