import {
	createApp
} from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import helper from './mixins/helper'
import '@/assets/font/icomoon/style.css'
import '@/assets/css/nullStyle.css'
import '@/assets/css/main.css'

const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.mixin(helper)
app.mount('#app')