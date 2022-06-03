<template> 
    <div>
       <v-card
            max-width="300"
            max-height="450"
            v-for="(anuncio,key) in anuncios" :key="key"
            class="my-2 ml-15 d-inline-block"
            elevation="2"
            shaped
            color="purple lighten-3"
            >
           
            <v-img
                :src="anuncio.imagenes[0]"
                height="250px"
            >
            </v-img>

            <v-card-title>
                ${{anuncio.precio}}
            </v-card-title>

            <v-card-subtitle>
                {{anuncio.titulo}}
            </v-card-subtitle>

            <v-card-actions>
                <v-btn
                    color="purple"
                    class="purple--text text--lighten-4"
                    dark
                    @click="mostrar(anuncio)"
                    :to="{path:'/anuncio'}"
                    >
                    Ver más
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {db} from '../db'
    import {bus} from '../main'
    import {nuevoBus} from '../main'

    export default {
        name:'ListadoAnuncios',

        data () {
           return{
                anuncios: [],
                anunciosOriginal:[],
                cadena:'',
                ascendente: true,
                descendente: true
           }
        },

        firestore: {
            anuncios: db.collection('anunciosCel'),
        },

        methods: {
            mostrar(item){
                bus.mensaje = item
            },
            
            filtrar(filtro){
                this.limpiar()

                if(filtro==null)
                    return
                if(filtro.marca==null || filtro.sistema==null || filtro.pantalla==null)
                    return

                this.anuncios = this.anuncios.filter((item)=>{
                    if(filtro.marca.length==0 && filtro.sistema.length==0 && filtro.pantalla.length==0)
                        return true

                    if(filtro.marca.length>0){
                        for (let x = 0; x < filtro.marca.length; x++) {
                            if(item.marca.toLowerCase()==filtro.marca[x].toLowerCase())
                                return true
                        }
                    }

                    if(filtro.sistema.length>0){
                        for (let y = 0; y < filtro.sistema.length; y++) {
                            if(item.sistema.toLowerCase()==filtro.sistema[y].toLowerCase())
                                return true
                        }
                    }

                    if(filtro.pantalla.length>0){
                        for (let z = 0; z < filtro.pantalla.length; z++) {
                            if(item.pantalla==filtro.pantalla[z])
                                return true
                        }
                    }

                    return false

                })
            },

            buscar(cadena){
                this.limpiar()

                this.anuncios = this.anuncios.filter((item)=>{
                    var x = item.titulo.toLowerCase().indexOf(cadena.toLowerCase())
                    return(x>=0)
                })
            },

            interruptor(valor){
                this.limpiar()
                if(valor){
                    this.anuncios = this.anuncios.filter((item)=>{
                        var x = item.estado.toLowerCase().indexOf(valor)
                        return(x>=0)
                    })
                }else{
                    this.limpiar()
                }
            },

            orden(dato){
                this.limpiar()
                if(dato.toLowerCase()=='precio'){
                    this.ascendente=!this.ascendente
                    this.anuncios.sort((a,b)=>{
                        var retorno=1
                        if (a.precio>b.precio) {
                            retorno=1
                        }else if(a.precio<b.precio){
                            retorno=-1
                        }
                        if(!this.ascendente){
                            retorno=retorno*-1
                        }
                        return retorno;
                    })
                }else if(dato.toLowerCase()=='fecha'){
                    this.anuncios = this.anuncios.reverse()
                }
            },

            filtrarPrecios(precios){
                this.limpiar()

                if(precios){
                    this.anuncios = this.anuncios.filter((valor)=>{
                         if(valor.precio>=precios[0] && valor.precio<=precios[1])
                            return true
                    })
                }else{
                    console.log("aqui")
                    this.limpiar()
                }
            },

            limpiar(){
                if(this.anunciosOriginal.length>0){
                    this.anuncios = this.anunciosOriginal.slice()
                }else{
                    this.anunciosOriginal = this.anuncios.slice()
                }
                this.cadena = ''
            }
        },

        mounted(){
            
            nuevoBus.$on("cambioFiltro",(data)=>{
                this.filtrar(data)
            })
            
            nuevoBus.$on("limpiarCadena",()=>{
                this.limpiar()
            })
            
            nuevoBus.$on("buscarCadena",(data)=>{
                this.buscar(data)
            })

            nuevoBus.$on("cambioEstado",(data)=>{
                this.interruptor(data)
            })

            nuevoBus.$on("filtradoPrecio",(data)=>{
                this.filtrarPrecios(data)
            })

            nuevoBus.$on("ordenar",(data)=>{
                this.orden(data)
            })
        }
    }
</script>

<style scoped>

</style>