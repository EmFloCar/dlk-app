(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3e96e4c"],{6007:function(a,i,o){"use strict";o.r(i);var e=function(){var a=this,i=a.$createElement,o=a._self._c||i;return o("div",{attrs:{id:"paddingForm"}},[o("form",{staticClass:"box"},[o("section",[o("b-field",{attrs:{label:"Lema:","label-position":"on-border"}},[o("b-input",{model:{value:a.palabra.lema,callback:function(i){a.$set(a.palabra,"lema",i)},expression:"palabra.lema"}})],1),o("b-field",{attrs:{label:"Información gramatical:","label-position":"on-border"}},[o("b-input",{model:{value:a.palabra.informacion_gramatical,callback:function(i){a.$set(a.palabra,"informacion_gramatical",i)},expression:"palabra.informacion_gramatical"}})],1),o("b-field",{attrs:{label:"Hiperónimo:","label-position":"on-border"}},[o("b-input",{model:{value:a.palabra.hiperonimo,callback:function(i){a.$set(a.palabra,"hiperonimo",i)},expression:"palabra.hiperonimo"}})],1),o("b-field",{attrs:{label:"Hipónimo:","label-position":"on-border"}},[o("b-input",{model:{value:a.palabra.hiponimo,callback:function(i){a.$set(a.palabra,"hiponimo",i)},expression:"palabra.hiponimo"}})],1),o("b-field",{attrs:{label:"Isoglosa:","label-position":"on-border"}},[o("b-input",{model:{value:a.palabra.isoglosa,callback:function(i){a.$set(a.palabra,"isoglosa",i)},expression:"palabra.isoglosa"}})],1),o("b-field",{attrs:{label:"Significado:","label-position":"on-border"}},[o("b-input",{attrs:{type:"textarea"},model:{value:a.palabra.significado,callback:function(i){a.$set(a.palabra,"significado",i)},expression:"palabra.significado"}})],1),o("b-field",{attrs:{label:"Ejemplo:","label-position":"on-border"}},[o("b-input",{attrs:{type:"textarea"},model:{value:a.palabra.ejemplo,callback:function(i){a.$set(a.palabra,"ejemplo",i)},expression:"palabra.ejemplo"}})],1),o("div",{staticClass:"buttons is-centered"},[o("b-button",{attrs:{type:"is-info is-centered"},on:{click:function(i){a.editar(),a.EditedToast()}}},[a._v("Editar")]),o("b-button",{attrs:{type:"is-dark is-centered"},on:{click:function(i){return a.salir()}}},[a._v("Salir")])],1)],1)])])},l=[],t=o("bc3a"),n=o.n(t),r={data:function(){return{palabraId:null,palabra:{lema:"",informacion_gramatical:"",hiperonimo:"",hiponimo:"",significado:"",ejemplo:"",imagenUrl:"",isoglosa:""}}},methods:{editar:function(){n.a.put("https://diccionario-backend.herokuapp.com/palabra/"+this.palabraId,this.palabra).then((function(a){console.log(a)}))},salir:function(){this.$router.push("/crud/tabla-palabras")},EditedToast:function(){this.$buefy.toast.open({message:"Editado",type:"is-info"})}},mounted:function(){var a=this;this.palabraId=this.$route.params.id,n.a.get("https://diccionario-backend.herokuapp.com/palabra/"+this.palabraId).then((function(i){a.palabra.lema=i.data.lema,a.palabra.informacion_gramatical=i.data.informacion_gramatical,a.palabra.hiperonimo=i.data.hiperonimo,a.palabra.hiponimo=i.data.hiponimo,a.palabra.isoglosa=i.data.isoglosa,a.palabra.significado=i.data.significado,a.palabra.ejemplo=i.data.ejemplo}))}},s=r,p=(o("d696"),o("2877")),b=Object(p["a"])(s,e,l,!1,null,"29dc5d29",null);i["default"]=b.exports},d696:function(a,i,o){"use strict";o("edce")},edce:function(a,i,o){}}]);
//# sourceMappingURL=chunk-b3e96e4c.0cc6eb17.js.map