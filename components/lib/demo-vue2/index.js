import DemoVue2 from "./src/main.vue"

DemoVue2.install = (app) => {
  app.component(DemoVue2.name, DemoVue2)
}

export default DemoVue2