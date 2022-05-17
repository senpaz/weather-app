import {mapGetters} from "vuex";

export default {
    methods: {
        getHour(val) {
            const date = new Date(val);
            return `${date.getHours()}:${
              date.getMinutes().toString().length == 1
                ? "0" + date.getMinutes()
                : date.getMinutes()
            }`;
        },

        toCelsius(val) {
            const deg = val - 273;
            return deg > 0 ? "+" + Math.round(deg) : Math.round(deg);
        },
        toFarengeyt(val) {
            const deg = (val - 273) * 9 / 5 + 32
            return deg > 0 ? '+' + Math.round(deg) : Math.round(deg)
        },
        toMmHg(val) {
            const res = val/1.333
            return Math.round(res)
        },
        toMil(val) {
            const res = val * 2.237
            return Math.round(res)
        }

    },
    computed : {
        ...mapGetters(['getTypeTemperature'])
    }
}