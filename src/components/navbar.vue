<template>
  <div>
        <b-navbar :centered="true" :shadow="true" id="inicio" :spaced="true">
      <template #start>

        <router-link to="/">
        <b-navbar-item >INICIO</b-navbar-item>
        </router-link>
        
        <b-navbar-dropdown label="PALABRA" hoverable>
          <router-link to="/crud/palabras"
            ><b-navbar-item>Añadir</b-navbar-item></router-link
          >
          <router-link to="/crud/tabla-palabras"
            ><b-navbar-item>Editar</b-navbar-item></router-link
          >
        </b-navbar-dropdown>

        <b-navbar-dropdown label="REFRAN" hoverable>
          <router-link to="/crud/refranes">
            <b-navbar-item >Añadir</b-navbar-item>
          </router-link>

          <router-link to="/crud/tabla-refranes">
            <b-navbar-item>Editar</b-navbar-item>
          </router-link>

        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
}
</script>