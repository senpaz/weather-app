import axios from 'axios'
import {
    createStore
} from 'vuex'
import
functional from './modules/functional.js'
export default createStore({
    state: () => ({
        today: null,
        now: null,
        week: null,
        city: null,

    }),
    mutations: {
        setWeatherToday(state, payload) {
            const date = new Date().getDate()
            state.today = payload.filter(i => {
                if (new Date(i.dt_txt).getDate() == date) {
                    return i
                }
            })
        },
        setWeatherNow(state, payload) {
            state.now = payload[0];
        },
        setWeatherWeek(state, payload) {
            const elements = []

            for (let i = 1; i < payload.length; i++) {
                if (new Date(payload[i].dt_txt).getDate() != new Date(payload[i - 1].dt_txt).getDate()) {
                    elements.push(payload[i])
                }

            }
            state.week = elements
        },
        setCity(state, payload) {
            state.city = payload
        }

    },
    actions: {
        async getWeather({
            commit
        }, {
            city,
            lang,
            lat,
            lon
        }) {
            const key = process.env.VUE_APP_API_KEY
            console.log(key);
            const {
                data
            } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
                params: {
                    q: city,
                    lang,
                    lat,
                    lon,
                    appid: key
                }
            })
            commit('setWeatherToday', data.list)
            commit('setWeatherNow', data.list)
            commit('setWeatherWeek', data.list)
            commit('setCity', data.city)
            localStorage.setItem('city', data.city.name)
            return data
        },
    


    },
    getters: {
        getWeatherToday: state => state.today.slice(0,5),
        getWeatherNow: state => state.now,
        getWeatherWeek: state => state.week,
        getCity: state => state.city
    },
    modules: {
        functional
    }
})