import DemoVue3 from "./src/main.vue"

DemoVue3.install = (app) => {
  app.component(DemoVue3.name, DemoVue3)
}

export default DemoVue3