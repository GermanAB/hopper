<template>
    <div>
        <h1>
            Listas
        </h1>
        <br />
        <input v-model="item" type="text" /><br />
        <button @click="agregar()">Agregar</button><br />
        <button @click="reset()">Reset</button><br />
       <ul>
           <li v-for="elemento in lista" v-bind:key="elemento">{{ elemento }}</li>
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lista: [],
            item: "", 
        };
    },
    methods:{
        agregar(){
            this.lista.push(this.item);
            this.item = "";
        },
        reset(){
            this.lista.splice(0, this.lista.length);
        }
    }
}
</script>


<style>

</style>