<template>
    <v-row>
        {{carga()}}{{obtenerImagenes(ver.imagenes)}}
        <v-col xs="12" md="5" offset-md="1">
            <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in imagenes"
                    :key="i"
                    :src="item"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col md="5" offset-md="1" class="hidden-sm-and-down">
            <h3 class="mt-10">{{ver.titulo}}</h3>
            <h1 class="font-italic mt-5">${{ver.precio}}</h1>
            <v-btn
                color="purple"
                class="purple--text text--lighten-4 mt-5"
                dark
                x-large
                elevation="9"
                @click="agregar"
                :to="{path:'/'}"
                >
                Comprar
            </v-btn>
            <div class="mt-10 purple col-md-10 purple--text text--lighten-4 pt-7 pb-7 elevation-9 rounded-lg">
                <span class="mr-5">Vendedor: {{ver.vendedor}}</span>
                <span class="ml-5">Teléfono: {{ver.telefono}}</span>
            </div>
        </v-col>
        <v-col xs="12" class="hidden-md-and-up">
            <h3 class="text-center">{{ver.titulo}}</h3>
            <h1 class="font-italic text-center">${{ver.precio}}</h1>
             <div class="text-center">
                <span class="mr-5">Vendedor: {{ver.vendedor}}</span>
                <span class="ml-5">Teléfono: {{ver.telefono}}</span>
            </div>
        </v-col>
        <v-row>
            <v-col md="11" offset="1" class="mt-5">
                <h1 class="font-weight-bold text-center hidden-sm-and-down">
                   DESCRIPCION 
                </h1>
                <div class="purple--text text--lighten-4 mr-5">
                    <div class="col-md-4 col-xs-10 offset-md-1 d-inline-flex purple pb-15 mb-7">
                        <span>Estado: {{ver.estado}}<br>Marca: {{ver.marca}}<br>Modelo: {{ver.modelo}}<br>Pantalla: {{ver.pantalla}}<br>Sistema: {{ver.sistema}}<br>Rom: {{ver.rom}}<br>Ram: {{ver.ram}}</span>
                    </div>
                    <div class="col-md-4 col-xs-10 offset-md-1 d-inline-flex purple pb-5">
                        <span>{{ver.descripcion}}</span>
                    </div>
                </div>

                <div class="hidden-md-and-up col-xs-12 fix pl-15 ml-15">
                    <v-btn
                        color="purple lighten-4"
                        class="purple--text"
                        dark
                        x-large
                        :to="{path:'/'}"
                        >
                        Inicio
                    </v-btn>
                    <v-btn
                        color="purple lighten-4"
                        class="purple--text"
                        dark
                        x-large
                        @click="agregar"
                        :to="{path:'/'}"
                        >
                        Comprar
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-row>
</template>

<style scoped>

    .fix{
        position: fixed;
        top: 87%;
    }
  
</style>

<script>
    import {bus} from '../main'
    import {nuevoBus} from '../main'

    export default {
        name: 'UnAnuncio',

        data: () => ({
            saludo:'aqui estoy',
            ver: '',
            imagenes: [],
            compra: 1
        }),

        methods:{
            carga(){
                this.ver = bus.mensaje
            },
            obtenerImagenes(imag){
                this.imagenes = imag
            },
            agregar(){
                nuevoBus.$emit("agregar",this.compra)
            }
        },

    }
</script>
