<template>
    <div class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado block">
                <p>
                    <b> {{ this.info.lema }}:</b>
                    {{ this.info.significado }}
                </p>
            </div>
          </div>
          <div class="columns">
            <div class="column centrado">
              <figure>
                <img  class="imgCenter" v-bind:src="this.info.imagenUrl" />
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
            info: {
              lema: null,
              significado: null,
              imagenUrl: null,
            },            


        }

    },

    mounted() {
        this.id = this.$route.params.id;
        this.actualizar();
    },

    methods: {
        async actualizar(){
        let response = await axios.get("https://dlk-backend-api.onrender.com/info/" + this.id);
          this.info.lema = response.data.lema
          this.info.significado = response.data.significado
          this.info.imagenUrl = response.data.imagenUrl
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
  padding: 40px 0px 0px 0px;
}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}

#regresar {
  padding-top: 20px;
  padding-bottom: 60px;
}

.imgCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

img {
    max-width: 450px;
    max-height: auto;
}
</style>