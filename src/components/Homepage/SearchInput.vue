<template>
  <v-autocomplete
    outlined
    :search-input.sync="searchTerm"
    placeholder="Search for a city"
    :loading="fetchingSearchResult"
    :items="searchResults"
    hide-no-data
    clearable
    @change="selectCity"
  >
  </v-autocomplete>
</template>

<script>
import lodash from "lodash";
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapState("cityStore", [
      "searchResults",
      "fetchingSearchResult",
      "searchError"
    ])
  },
  methods: {
    selectCity(city) {
      this.$store.commit("cityStore/selectCity", city);
      this.$router.push(`/city/${city.state}/${city.name}`);
    }
  },
  watch: {
    //we only make request to api when user is idle is 600 milliseconds
    searchTerm: lodash.debounce(function() {
      if (this.searchTerm) {
        this.$store.dispatch("cityStore/fetchSearchReslts", this.searchTerm);
      }
    }, 600)
  }
};
</script>

<style lang="scss" scoped></style>
