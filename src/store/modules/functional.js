export default {
    state: () => ({
			isOpenMenu: false,
			isOpenPopup: false,
			isOpenSearch: false,
			temperature : localStorage.getItem('temperature') || 'Celsius',
			speed : localStorage.getItem('speed') || "metr",
			pressure : localStorage.getItem("pressure") || 'pascal'
    }),
		mutations: {
			isopenMenu(state, payload){
				state.isOpenMenu = payload
			},
			isopenPopup(state, payload){
				state.isOpenPopup = payload
			},
			isopenSearch(state, payload){
				state.isOpenSearch = payload
			},
			setTypeTemperature(state, payload) {
				state.temperature = payload
				localStorage.setItem('temperature', payload)
			},
			setTypeSpeed(state, payload) {
				state.speed = payload
				localStorage.setItem('speed', payload)
			},
			setTypePressure(state, payload) {
				state.pressure = payload
				localStorage.setItem('pressure', payload)
			}
	},
	getters: {
		openMenu: state => state.isOpenMenu,
		openPopup: state => state.isOpenPopup,
		openSearch: state => state.isOpenSearch,
		getTypeTemperature: state => state.temperature,
		getTypeSpeed: state => state.speed,
		getTypePressure: state => state.pressure
	}
}