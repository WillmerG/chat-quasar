<template>
  <q-page padding>
    <VistaAcceso />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VistaAcceso from "../components/VistaAcceso";

export default defineComponent({
  name: "PageIndex",
  components: {
    VistaAcceso,
  },
});
</script>
