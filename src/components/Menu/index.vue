<template>
  <div class="menu-content">
    <div class="menu__header">
      <h3>Settings</h3>
      <i @click="closeMenu" class="icon-exitRed"></i>
    </div>
    <div class="menu__city">
      <div class="menu__label">Choose a city</div>
      <div @click="openPopup" class="menu__location">
        <div class="menu--title">Current Location</div>
        <div class="menu__location--name">{{ getCity.name }}</div>
      </div>
    </div>
    <div class="menu-measure">
      <div class="menu__label">Measure Units</div>
      <div class="menu-measure-item" v-for="item of measureList" :key="item.id">
        <div class="menu--title">{{ item.title }}</div>
        <div class="menu--checkbox radio">
          <input
            :label="item.checkOff"
            type="radio"
            :name="item.nameRadio"
            :value="item.value1"
            v-model="item.value"
          />
          <input
            :label="item.checkOn"
            type="radio"
            :name="item.nameRadio"
            :value="item.value2"
            v-model="item.value"
          />
        </div>
      </div>
    </div>
    <div class="menu__save-btn">
      <button @click="apply" class="menu--apply">Apply Settings</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      measureList: [
        {
          id: 1,
          title: "Temperature",
          nameRadio: "temp",
          checkOff: "C°",
          checkOn: "F°",
          value1 : 'Celsius',
          value2 : 'faradey',
          value : localStorage.getItem('temperature') || 'Celsius'
        },
        {
          id: 2,
          title: "Wind Speed",
          nameRadio: "wind",
          checkOff: "m/s",
          checkOn: "mph",
          value1 : 'metr',
          value2 : 'mil',
          value : localStorage.getItem('speed') || 'metr'
        },
        {
          id: 3,
          title: "Pressure",
          nameRadio: "pressure",
          checkOff: "hPa",
          checkOn: "mmHg",
          value1 : 'pascal',
          value2 : 'mmHg',
          value : localStorage.getItem('pressure') || 'pascal'
        },
      ],
    };
  },
  methods: {
    ...mapMutations([
      "isopenPopup",
      "isopenMenu",
      "setTypeTemperature",
      "setTypeSpeed",
      "setTypePressure",
    ]),
    closeMenu() {
      this.isopenMenu(false);
    },
    openPopup() {
      this.isopenPopup(true);
    },
    apply() {
      console.log(this.measureList);
      /* логика сохранения */
      this.$store.commit('setTypeTemperature', this.measureList[0].value);
      this.$store.commit('setTypeSpeed', this.measureList[1].value)
      this.$store.commit('setTypePressure', this.measureList[2].value);
      this.isopenMenu(false);
    },
  },
  computed: {
    ...mapGetters(["getCity"]),
  },
};
</script>

<style></style>
