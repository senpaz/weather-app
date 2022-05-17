<template>
  <div>
    <ul class="list-weather__hour">
      <li
        class="list-weather__hour--item"
        v-for="item of getWeatherToday"
        :key="item.id"
      >
        <p class="list-weather__hour--time">{{ getHour(item.dt_txt) }}</p>
        <div class="list-weather__hour--icon">
					<div class="list-weather__hour--img">
						<img
							:src="require(`@/assets/img/icons/${item.weather[0].icon}.svg`)"
							alt=""
						/>
					</div>
        </div>
        <p class="list-weather__hour--temp">
          {{ getTypeTemperature == 'Celsius' ?  toCelsius(item.main.temp) + '&deg;' : toFarengeyt(item.main.temp) + ' F&deg;' }}
        </p>
      </li>
    </ul>
    <ul class="list-weather__days">
      <li
        class="list-weather__days--item"
        v-for="(item, i) of getWeatherWeek"
        :key="i"
      >
        <div class="list-weather__days--day">
          <div class="list-weather__days--data">{{ getDate(item.dt_txt) }}</div>
          <p class="list-weather__days--week">{{ getDay(item.dt_txt) }}</p>
        </div>
        <div class="list-weather__days--icon">
          <img :src="require(`@/assets/img/icons/${item.weather[0].icon}.svg`)" alt="" />
        </div>
        <div class="list-weather__days--temp">
          <div class="list-weather__days--temp-midday">
						{{ getTypeTemperature == 'Celsius' ?  toCelsius(item.main.temp_max) + '&deg;' : toFarengeyt(item.main.temp_max) + ' F&deg;' }}
            <!-- {{ item.middayTemp }}° -->
          </div>
          <div class="list-weather__days--temp-night">
						{{ getTypeTemperature == 'Celsius' ?  toCelsius(item.main.temp_min) + '&deg;' : toFarengeyt(item.main.temp_min) + ' F&deg;' }}
          </div>
        </div>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(item, i) of getWeatherWeek" :key="i">
        <div>
          <span>{{ getDate(item.dt_txt) }}</span>
          <h4>{{ getDay(item.dt_txt) }}</h4>
        </div>
        <div>
          <img
            :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
            alt=""
          />
        </div>
        <div>
          <span>{{ getTypeTemperature == 'Celsius' ?  toCelsius(item.main.temp_max) + '&deg;' : toFarengeyt(item.main.temp_max) + ' F&deg;' }}</span>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  methods: {
		getDate(val) {
			const date = new Date(val);
      return moment(date).format("MMM Do");
    },
    getDay(val) {
			const date = new Date(val);
      return moment(date).format("dddd");
    },
  },
	async mounted() {
		await console.log('this.listWeather', this.listWeather);
	},
  computed: {
		limitWeather(){
			return this.listWeather.slice(0,5)
		},
    ...mapGetters(["getWeatherToday", "getWeatherWeek", 'getTypeTemperature']),

  },
};
</script>

<style></style>
