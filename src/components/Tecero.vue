<template>
  <div>
    <h1>
      Ahora me ves, ahora no me ves.
    </h1>
    <br />
    <input type="checkbox" v-model="status" />
    <p v-if="status">{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "asd",
      status: false,
    };
  },
};
</script>

<style></style>