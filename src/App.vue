<template>
  <v-app>
    <router-link to="/">Home</router-link>|
    <router-link to="/primero">Primer proyecto</router-link>|
    <router-link to="/segundo">Segundo proyecto</router-link>
    <router-link to="/tercero">Tercero proyecto</router-link>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: () => ({
    //
  })
};
</script>
