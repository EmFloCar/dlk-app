<template>
    <div class="container componente">
      <div class="container">
        <div class="block">
          <div class="columns box">
            <div class="column is-full centrado block">
                <p>
                    <b> {{ this.palabra.lema }}:</b>
                    {{ this.palabra.informacion_gramatical }} ({{ this.abreviaturas[this.palabra.informacion_gramatical]}}),
                    {{ this.palabra.hiperonimo }} ({{ this.abreviaturas[this.palabra.hiperonimo]}}),
                    {{ this.palabra.etimologia }}.
                    {{ this.palabra.isoglosa}}.
                    {{ this.palabra.significado }}. 
                    "{{this.palabra.ejemplo}}".
                </p>
            </div>
          </div>
          <div class="columns is-centered componente">
            <div class="column box is-three-quarters ">
              <figure class="image is-640x480">
                <img class="image is-640x480" v-bind:src="this.palabra.imagenUrl" />
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
              informacion_gramatical: null,
              hiperonimo: null,
              etimologia: null,
              isoglosa: null,
              significado: null,
              imagenUrl: null,
              ejemplo: null
            },

            abreviaturas: {
              Sustantivo: "s",
              Adjetivo: "adj",
              Artículo: "art",
              Pronombre: "pron",
              Verbo: "v",
              Adverbio: "adv",
              Interjección: "interj",
              Preposición: "prep",
              Conjunción: "conj",
              "Conocimiento de la naturaleza": "c.n.",
              "El mundo humano": "m.h." ,
              "Acción del hombre sobre la naturaleza": "a.h.",
              Refran: "refran",
              "Frase proverbial": "frase provevial",
              Locución: "locucion"        
            },

        }

    },

    mounted() {
        this.id = this.$route.params.id;
        this.actualizar();

    },

    methods: {
        async actualizar(){
        let datos = await axios.get("https://diccionario-backend.herokuapp.com/palabra/" + this.id);
        this.palabra.lema = datos.data.lema;
        this.palabra.informacion_gramatical = datos.data.informacion_gramatical;
        this.palabra.hiperonimo = datos.data.hiperonimo;
        this.palabra.etimologia = datos.data.etimologia;
        this.palabra.isoglosa = datos.data.isoglosa.split(",");
        this.palabra.isoglosa = this.palabra.isoglosa.join(", ")
        this.palabra.significado = datos.data.significado;
        this.palabra.imagenUrl = datos.data.imagenUrl,
        this.palabra.ejemplo = datos.data.ejemplo;
        console.log(datos.data)
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
</style>