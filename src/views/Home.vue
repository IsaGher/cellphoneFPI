<template>
  <v-container fluid>
    <v-row>
      <v-col md="3" class="pl-10 hidden-sm-and-down">
        <Filtros />
      </v-col>
      <v-col lg="9" xs="12">
        <div class="hidden-sm-and-down">
          <v-btn :disabled="visible" icon @click="cancelar">
            <v-icon class="black--text">mdi-close-thick</v-icon>
          </v-btn>
          <div class="purple lighten-3 rounded-lg mt-2 pb-7 col-md-5 ml-10 d-inline-flex">
            <h5>Precio</h5>
            <v-text-field
              v-model="desde" 
              label="Desde $" 
              hide-details="auto"
              color="purple"
              class="mr-5"
            ></v-text-field>
            <v-text-field
              v-model="hasta" 
              label="Hasta $" 
              hide-details="auto"
              color="purple"
            ></v-text-field>
          </div>
          <div class="purple lighten-3 rounded-lg ml-5 pb-6 col-md-5 d-inline-flex">
            <h5>Ordenar por:</h5>
            <v-btn
              @click="filtroPrecio"
              href=""
              target="_self"
              text
              x-large
              class="ml-3"
              >
              <v-icon class="black--text">mdi-arrow-up</v-icon>
              <span class="black--text">Precio</span>
            </v-btn>
            <v-btn
              href=""
              target="_self"
              text
              x-large
              class="ml-1"
              @click="ordenarFecha()"
              >
              <span class="black--text">Fecha</span>
            </v-btn>
          </div>
        </div>
        <div class="text-center hidden-md-and-up">
          <div class="col-xs-6 pl-2 pr-2 pt-3 mr-2 purple lighten-3 rounded-lg d-inline-flex">
            <h4 class="pr-2">Ordenar por: </h4>
            <v-select
              :items="items"
              label="Selecciona"
              v-model="seleccion"
              @click="visible=false"
              @change="verSeleccion"
              outlined
            ></v-select>
          </div>
          <div class="col-xs-6 d-inline-flex">
            <v-menu offset-y transition="slide-x-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="purple lighten-3"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  icon
                  x-large
                  >
                  <v-icon class="black--text">mdi-filter</v-icon>
                </v-btn>
              </template>
              <v-list class="purple lighten-4 overflow-auto" width="250" height="400">
                <v-list-item>
                  <Filtros />
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-btn :disabled="visible" icon @click="cancelar">
            <v-icon class="black--text">mdi-close-thick</v-icon>
          </v-btn>
        </div>
        <div class="mt-5">
          <ListadoAnuncios />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-list-item {
    display: block;
  }
</style>

<script>
  import Filtros from '../components/Filtros'
  import ListadoAnuncios from '../components/ListadoAnuncios'
  import {bus} from '../main'
  import {nuevoBus} from '../main'

  export default {
    name: 'Home',

    components: {
      Filtros,
      ListadoAnuncios,
    },

    data: () => ({
      items: ['Precio', 'Fecha'],
      desde:'',
      hasta:'',
      visible: true,
      seleccion: ''
    }),

    methods:{
      filtroPrecio(){
        var precios = []
        this.visible = false
        if(this.desde!=null && this.hasta!=null){
          precios.push(this.desde)
          precios.push(this.hasta)
        }
        
        nuevoBus.$emit("filtradoPrecio",precios)
      },
      cancelar(){
        this.visible = true
        this.desde = ''
        this.hasta = ''
        nuevoBus.$emit("limpiarCadena")
      },

      verSeleccion(){
        nuevoBus.$emit("ordenar",this.seleccion)
      },

      ordenarFecha(){
        var x = 'fecha'
        this.visible = false
        nuevoBus.$emit("ordenar",x)
      }

    },

    mounted(){
      if(bus.mensaje){
        location.reload()
      }
    }

  }
</script>
