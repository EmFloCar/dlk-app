<template>
  <div id="paddingForm">
    <form class="box">
      <section>
        <b-field label="Lema:" :label-position="'on-border'">
          <b-input v-model="palabra.lema"></b-input>
        </b-field>  

        <b-field label="Significado:" :label-position="'on-border'">
          <b-input type="textarea" v-model="palabra.significado"></b-input>
        </b-field>

        <b-field label="Ejemplo:" :label-position="'on-border'">
          <b-input type="textarea" v-model="palabra.ejemplo"></b-input>
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
      palabraId: null,

      palabra: {
        lema: "",
        significado: "",
        ejemplo: "",
      },
    };
  },
  mounted() {
    if(!localStorage.token){
      return this.$router.replace('/noauth')
    }  
  },
  methods: {
    editar() {
      axios
        .put("https://dlk-backend-api.onrender.com/palabra/" + this.palabraId, this.palabra)
        .then((data) => {
          console.log(data.status);
        });
    },

    salir() {
      this.$router.push("/crud/tabla-palabras");
    },
    EditedToast() {
      this.$buefy.toast.open({
        message: "Editado",
        type: "is-info",
      });
    },
  },
  mounted() {
    this.palabraId = this.$route.params.id;
    axios
      .get("https://dlk-backend-api.onrender.com/palabra/" + this.palabraId)
      .then((datos) => {
        this.palabra.lema = datos.data.lema;
        this.palabra.significado = datos.data.significado;
        this.palabra.ejemplo = datos.data.ejemplo;
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
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>