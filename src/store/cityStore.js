import { City } from "../models/city";

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
    ]
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
    }
  },
  actions: {}
};
