<template>
  <v-app>
    <v-app-bar
      elevation="15"
      app
      color="purple"
      dark
      class="rounded-b-lg"
      >
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up black--text"></v-app-bar-nav-icon>
      <v-icon x-large class="hidden-sm-and-down black--text">mdi-bullhorn-outline</v-icon>
      <v-toolbar-title class="hidden-sm-and-down black--text">Tienda Cellphone</v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn icon @click="buscar">
        <v-icon class="black--text">mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        v-model="cadena"
        hide-details
        single-line
        class="text-black"
      ></v-text-field>
      <v-btn icon @click="cancelar">
        <v-icon class="black--text">mdi-close-thick</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :to="{path:'/'}"
        target="_self"
        text
        class="d-none d-md-flex"
      >
        <span class="black--text">Inicio</span>
      </v-btn>

      <v-btn
        href=""
        target="_self"
        class="d-none d-md-flex"
        text
      >
        <span class="black--text">Estadisticas</span>
      </v-btn>

      <v-btn
        :to="{path:'/nuevoanuncio'}"
        target="_self"
        x-large
        class="d-none d-md-flex"
        icon
      >
        <v-icon class="black--text">mdi-plus-circle</v-icon>
      </v-btn>

      <v-btn
        target="_self"
        x-large
        class="d-none d-md-flex"
        icon
      >
        <v-badge
          :content="compras"
          :value="compras"
          color="purple lighten-2"
          overlap
          >
          <v-icon class="black--text">mdi-cart-plus</v-icon>
        </v-badge>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      >
      <v-list
        nav
        dense
        >
        <v-list-item-group
          v-model="group"
          active-class="purple--text text--accent-3"
          >
          <v-list-item>
            <v-icon x-large class="black--text">mdi-bullhorn-outline</v-icon>
            <v-toolbar-title class="black--text">Tienda Cellphone</v-toolbar-title>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item :to="{path:'/'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item :to="{path:'/nuevoanuncio'}">
            <v-list-item-icon>
              <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Nuevo Anuncio</v-list-item-title>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Carrito</v-list-item-title>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-chart-bar</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estadisticas</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="purple lighten-4">
      <router-view/>
    </v-main>

    <v-footer class="purple">
      <h4>Elaborado por: Sara Isabel García Herrera.<br>Carnet:GH19009</h4><br>
      <v-spacer></v-spacer>
      <v-icon class="black--text">mdi-view-dashboard-edit</v-icon>
    </v-footer>
  </v-app>
</template>

<style>
.text-black .v-text-field__slot input {
      color: black !important;
    }
</style>

<script>
import { nuevoBus } from './main';

  export default {
    name: 'App',

    data: () => ({
      drawer: false,
      group: null,
      valor:'',
      cadena:'',
      compras: 0
   }),

   methods:{
      buscar(){
        if(this.cadena){
          nuevoBus.$emit("buscarCadena",this.cadena)
        }
      },
      cancelar(){
        this.cadena=""
        nuevoBus.$emit("limpiarCadena")
      },
      agregarCarrito(num){
        this.compras = this.compras+num
      }
   },

   mounted(){
     nuevoBus.$on("agregar",(data)=>{
       this.agregarCarrito(data)
     })
   }

  };
</script>
