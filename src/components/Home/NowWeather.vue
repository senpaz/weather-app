<template>
  <div>
    <div class="now-weather">
      <h3 class="now-weather__title">
        <i class="icon-location"></i>{{ getCity.name }}
        <i class="icon-settings" @click="openMenu"></i>
      </h3>
      <div class="now-weather__info">
        <div class="now-weather__data-time">{{ getDate() }}</div>
        <div class="now-weather__temp">
          <span>{{
            getTypeTemperature == "Celsius"
              ? toCelsius(getWeatherNow.main && getWeatherNow.main.temp) +
                "&deg;"
              : toFarengeyt(getWeatherNow.main && getWeatherNow.main.temp) +
                " F&deg;"
          }}</span>
          <img
            :src="
              require(`@/assets/img/icons/${getWeatherNow.weather[0].icon}.svg`)
            "
            alt=""
          />
          <!-- <img src="@/assets/img/icons/bigSun.svg" alt="bigSun" /> -->
        </div>
        <div class="now-weather__desk">
          {{
            getWeatherNow &&
            getWeatherNow.weather[0] &&
            getWeatherNow.weather[0].description
          }}
        </div>
      </div>
      <ul class="now-weather__info-detals">
        <li>
          <i class="icon-wind" ></i>{{getTypeSpeed =='mil' ? toMil(getWeatherNow.wind.speed) : getWeatherNow.wind.speed
          }}<span>{{getTypeSpeed =='mil' ? 'mph' : 'm/s, E' }}</span>
          <img src="@/assets/img/icons/compas.svg" alt="compas" :style="{transform: `rotate(${getWeatherNow.wind.deg + 'deg'})`}" />
        </li>
        <li>
          <i class="icon-humidity"></i> {{ getWeatherNow.main.humidity }}
          <span>%</span>
        </li>
        <li>
          <i class="icon-pressure"></i>
          {{
            getTypePressure == "mmHg"
              ? toMmHg(getWeatherNow.main.pressure)
              : getWeatherNow.main.pressure
          }}<span>{{ getTypePressure == "mmHg" ? "mmHg" : "hPa" }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todayWeather: null,
    };
  },
  async mounted() {
    console.log(this.getCity)
  setTimeout(() => {
    console.log('getWeatherNow', this.getWeatherNow)

  }, 2000)
  },
  methods: {
    getDate() {
      let d = new Date();
      let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      let nd = new Date(utc + (this.getCity.timezone*1000));
      return moment(nd).format("LLL");
    },
    openMenu() {
      this.$store.commit("isopenMenu", true);
    },
  },
  computed: {
    ...mapGetters([
      "getWeatherToday",
      "getWeatherNow",
      "getCity",
      "getTypeTemperature",
      "getTypePressure",
      "getTypeSpeed",
    ]),
  },
};
</script>

<style></style>
