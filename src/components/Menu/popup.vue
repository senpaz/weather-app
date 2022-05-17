<template>
  <div class="popup-content">
    <h3 class="popup-content-title">Change Location?</h3>
    <button @click="useMyLocation" class="popup-content-btn">
      Use My Current Location
    </button>
    <button @click="openSearch" class="popup-content-btn">
      Select location manually
    </button>
    <div @click="closePopup" class="popup-content-cancel">Cancel</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["isopenPopup", "isopenMenu", "isopenSearch"]),
    closePopup() {
      this.isopenPopup(false);
    },
    useMyLocation() {
      try {
        navigator.geolocation.getCurrentPosition((val) => {
          console.log(val);
          this.$store.dispatch("getWeather", {
            lang: "ru",
            lat: val.coords.latitude,
            lon: val.coords.longitude,
          });
        });
        this.isopenPopup(false);
        this.isopenMenu(false);
      } catch (error) {
        console.log(error);
      }
    },
    openSearch() {
      // открываю поиск
      this.isopenSearch(true);
      // закрываю поп ап
      this.isopenPopup(false);
    },
  },
  // mounted() {
  //   this.useMyLocation()
  // }
};
</script>

<style></style>
