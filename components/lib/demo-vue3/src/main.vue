<template>
  <div class="mala-demo-vue3">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "mala-demo-vue3"
}
</script>

<script setup>
import { ref } from "vue"
const message = ref("mala-demo-vue3组件")
</script>