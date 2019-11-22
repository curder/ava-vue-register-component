// Import asset file.
import './assets/sass/index.scss'


const Plugin = {
    // eslint-disable-next-line
    install(Vue, params = {}) {
        Vue.prototype.$bus = new Vue()

    }
}

export default Plugin
