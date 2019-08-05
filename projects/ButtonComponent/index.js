import VueJsButton from './VueJsButton.vue'

const component_name = 'VBtn'

const Plugin = {
  install(Vue) {
    this.event = new Vue()
    this.primaryColor = '#1de7b8'
    this.primaryHoverColor = '#0ccb9f'

    Vue.prototype.$VBtn = {
      setPrimaryColor: color => {
        this.primaryColor = color
      },
      getPrimaryColor: () => {
        return this.primaryColor
      },
    }
    Vue.component(component_name, VueJsButton)
  },
}

export default Plugin
