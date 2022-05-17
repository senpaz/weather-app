<template>
  <div class="search-content">
    <div class="input-search">
      <input
        type="text"
        placeholder="Поиск..."
        name="serch"
        v-model="valSearch"
      />
      <i @click="closeSearch" class="icon-ExitSelect"></i>
    </div>
    <ul class="all-list-city">
      <!-- список городов -->
      <li @click="chooseCity(city)" v-for="(city, i) of cities" :key="i">
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import cities from "../../data/city.list.min.json";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      valSearch: "",
      cities: [],
    };
  },
  methods: {
    ...mapMutations(["isopenMenu", "isopenSearch"]),
    closeSearch() {
      this.isopenSearch(false);
    },
    chooseCity(city) {
      try {
        /* Логика выбора города */
        this.$store.dispatch("getWeather", {
          city: city.name,
          lang: "ru",
        });
        this.isopenSearch(false);
        this.isopenMenu(false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    valSearch(val) {
      if(val.length >= 3) {
        let city = cities.filter(i => i.name.toLowerCase().includes(val.toLowerCase()))
        city = city.sort((a, b) => {
          return a.name.length - b.name.length
        })
        this.cities = city
      } else {
        this.cities = [];
      }
    },
  },
};
</script>

<style>
</style>