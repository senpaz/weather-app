<template>
  <div>
    <section class="now-weather-section">
      <NowWeather />
    </section>
    <section class="list-weather">
      <ListWeather />
    </section>
  </div>
</template>

<script>
import NowWeather from "@/components/Home/NowWeather";
import ListWeather from "@/components/Home/ListWeather";
export default {
  components: {
    NowWeather,
    ListWeather,
  },
};
</script>

<style>
</style>