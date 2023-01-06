<template>
    <div id="paddingForm">
      <form class="box">
        <section>
          <b-field label="Lema:">
            <b-input v-model="info.lema"></b-input>
          </b-field>
  
          <b-field label="Significado:">
            <b-input type="textarea" v-model="info.significado"></b-input>
          </b-field>
  
  
          <div class="buttons is-centered">
            <b-button
              type="is-info is-centered"
              v-on:click="editar(), EditedToast()"
              >Editar</b-button
            >
            <b-button type="is-dark is-centered" v-on:click="salir()"
              >Salir</b-button
            >
          </div>
        </section>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        infoId: null,
  
        info: {
          lema: "",
          significado: "",
        },
      }
    },
    mounted() {
      if(!localStorage.token){
        return this.$router.replace('/noauth')
      }  
    },
    methods: {
      editar() {
        axios
          .put("https://dlk-backend-api.onrender.com/info/" + this.infoId, this.info)
          .then((data) => {
            console.log(data.status);
          });
      },
  
      salir() {
        this.$router.push("/crud/tabla-refranes");
        
      },
  
      EditedToast() {
        this.$buefy.toast.open({
          message: "Editado",
          type: "is-info",
        });
      },
    },
  
    mounted() {
      this.infoId = this.$route.params.id;
      axios.get("https://dlk-backend-api.onrender.com/info/" + this.infoId).then((datos) => {
        this.info.lema = datos.data.lema;
        this.info.significado = datos.data.significado;
      });
    },
  };
  </script>
  
  <style lang="scss" scoped>
  #paddingForm {
    padding-top: 2%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
  }
  .centrado{
  display: flex;
  justify-content: center;
  align-items: center;
  }
  </style>
  