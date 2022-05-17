<template>
  <div v-if="isLoad">
    <div class="container">
      <section class="home">
        <Home />
      </section>
    </div>
    <section class="menu" :class="{ active: openMenu }">
      <div @click="closeMenu" class="overlay"></div>
      <div
        class="menu-body"
        :class="{ activepop: openPopup, activeSearch: openSearch }"
      >
        <Menu />
        <div @click="closePopup" class="popup-overlay"></div>
        <div class="popup-body">
          <Popup />
        </div>
        <div class="search-body">
          <Search />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Popup from "@/components/Menu/popup.vue";
import Search from "@/components/Menu/search.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      data: null,
      isLoad: false,
    };
  },
  methods: {
    ...mapMutations(["isopenPopup", "isopenMenu"]),
    closeMenu() {
      this.isopenPopup(false);
      this.isopenMenu(false);
    },
    closePopup() {
      this.isopenMenu(false);
    },
  },
  async mounted() {
    const city = localStorage.getItem("city");
    await this.$store.dispatch("getWeather", {
      lang: "ru",
      city: city ? city : "Moscow, RU",
    });
    this.isLoad = true;
    console.log(this.openPopup);
  },
  computed: {
    ...mapGetters(["openMenu", "openPopup", "openSearch"]),
  },
  components: {
    Home,
    Menu,
    Popup,
    Search,
  },
};
</script>

<style></style>
