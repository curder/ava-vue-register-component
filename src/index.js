// Import asset file.
import './assets/sass/index.scss'

import ValidateSms from './components/ValidatedSms.vue'
import ProgressButton from './components/ProgressButton.vue'

const Plugin = {
    // eslint-disable-next-line
    install(Vue, params = {}) {
        Vue.prototype.$bus = new Vue()

        Vue.component('validate-sms', ValidateSms)
        Vue.component('progress-button', ProgressButton)
    }
}

export default Plugin
