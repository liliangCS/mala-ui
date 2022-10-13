import DemoVue2 from "./demo-vue2"
import DemoVue3 from "./demo-vue3"

const components = [
  DemoVue2,
  DemoVue3
]

const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  DemoVue2,
  DemoVue3
}
