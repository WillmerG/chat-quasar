<template>
  <div class="q-px-xl">
    <h5>Formulario {{ acceder ? "Login" : "Registro" }}</h5>
    <q-form class="q-gutter-md" @submit.prevent="validaForm">
      <q-input label="Email" v-model="email" type="email" />
      <q-input label="Password" v-model="password" type="Password" />
      <q-btn
        color="primary"
        :label="acceder ? 'Login' : 'Registro'"
        type="submit"
      />
      <q-btn
        color="primary"
        label="Ya tienes cuenta?"
        outline
        v-if="!acceder"
        @click="acceder = true"
      ></q-btn>
      <q-btn
        color="negative"
        label="No tienes cuenta?"
        outline
        v-else
        @click="acceder = false"
      ></q-btn>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const acceder = ref(true);

    const validaForm = async () => {
      if (!email.value.trim() || !password.value.trim()) {
        console.log("Campos Vacíos");
      }

      try {
        if (!acceder.value) {
          // Registrara
        } else {
          // Login
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      email,
      password,
      acceder,
      validaForm,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
