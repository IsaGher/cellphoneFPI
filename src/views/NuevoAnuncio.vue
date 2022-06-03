<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" class="hidden-sm-and-down">
        <h1 class="font-italic text-center">Nuevo Anuncio</h1>
      </v-col>
      <v-col xs="12">
        <AgregarDatos />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import AgregarDatos from '../components/AgregarDatos.vue'

  export default{
    name:'NuevoAnuncio',

    components:{
      AgregarDatos,
    }
  }


</script>
