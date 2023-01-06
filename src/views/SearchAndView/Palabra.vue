<template>
    <div class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado">
                <p>
                    <b> {{ this.palabra.lema }}:</b>
                    {{ this.palabra.significado }}. 
                    "{{this.palabra.ejemplo}}".
                </p>
            </div>
            
          </div>
          <br>
          <div class="columns">
            <div class="column centrado">
              <figure>
                <img  class="imgCenter" v-bind:src="this.palabra.imagenUrl" />
              </figure>
            </div>
          </div>

          <div class="centrado" id="regresar">
              <router-link to="/" >
            <b-button class="is-info">REGRESAR</b-button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            id: null,
            palabra: {
              lema: null,
              significado: null,
              imagenUrl: null,
              ejemplo: null
            },
        }

    },

    mounted() {
        this.id = this.$route.params.id;
        this.actualizar();

    },

    methods: {
        async actualizar(){
        let datos = await axios.get("https://dlk-backend-api.onrender.com/palabra/" + this.id);
        this.palabra.lema = datos.data.lema;
        this.palabra.significado = datos.data.significado;
        this.palabra.imagenUrl = datos.data.imagenUrl,
        this.palabra.ejemplo = datos.data.ejemplo;
        },


    },
}
</script>

<style lang="scss" scoped>
.has-text {
  height: auto;
  word-wrap: break-word;
}

.componente {
  padding: 50px;
}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

#regresar {
  padding-top: 20px;
  padding-bottom: 60px;
}

img {
    max-width: 450px;
    max-height: auto;
}
</style>