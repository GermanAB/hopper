<template>
  <div>
    <h1>
      {{ mensaje }}
    </h1>
    <input v-model="datoUno" type="text" /> <br />
    <button @click="borrar()">Borrar</button><br />
    <button @click="agregar()">Agregar</button><br />
    <button @click="reset()">Reste</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hola mundo",
      datoUno: null,
    };
},
  methods: {
    borrar() {
      this.datoUno ="";
    },
    agregar() {
      this.mensaje = this.mensaje + this.datoUno;
    },
    reset() {
      this.mensaje = "Hola Mundo";
    }
  }
};
</script>

<style>

</style>