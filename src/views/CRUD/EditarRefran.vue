<template>
  <div id="paddingForm">
    <form class="box">
      <section>
        <b-field label="Lema:">
          <b-input v-model="refran.lema"></b-input>
        </b-field>

        <b-field label="Significado:">
          <b-input type="textarea" v-model="refran.significado"></b-input>
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
      refranId: null,

      refran: {
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
        .put("https://dlk-backend-api.onrender.com/refran/" + this.refranId, this.refran)
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
    this.refranId = this.$route.params.id;
    axios.get("https://dlk-backend-api.onrender.com/refran/" + this.refranId).then((datos) => {
      this.refran.lema = datos.data.lema;
      this.refran.significado = datos.data.significado;
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
