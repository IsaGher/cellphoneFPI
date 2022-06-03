<template>
    <v-row>
        <v-col md="6" xs="12">
            <div class="hidden-md-and-up ml-3">
                <AgregarImagenes />
            </div>
            <div class="hidden-md-and-up ml-3">
                <div class="pt-10">
                    <h4>Titulo</h4>
                    <v-text-field
                        v-model="titulo" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="col-md-5 mb-5"
                    ></v-text-field>
                </div>
                <div class="pl-15 ml-15">
                    <h4 class="d-inline-flex mr-2">Precio</h4>
                    <v-text-field
                        v-model="precio" 
                        label="$" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-5">
                    <div class="mt-3 d-inline-flex ml-5">
                    <h5 class="d-inline-flex mr-2">Vendedor: </h5>
                    <v-text-field
                        v-model="vendedor" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-3 d-inline-flex ml-5">
                    <h5 class="d-inline-flex mr-2">Telefono: </h5>
                    <v-text-field
                        v-model="telefono" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                </div>
            </div>
            <div class="elevation-4 rounded-lg my-5 pl-5 ml-5 purple lighten-3">
                <v-radio-group
                    v-model="estado"
                    row
                    class="pt-3"
                    >
                    <h4 class="mr-2">Estado: </h4>
                    <v-radio
                        color="purple"
                        label="Nuevo"
                        value="nuevo"
                    ></v-radio>
                    <v-radio
                        color="purple"
                        label="Usado"
                        value="usado"
                    ></v-radio>
                </v-radio-group>
                <div>
                    <h4 class="d-inline-flex mr-2">Marca: </h4>
                    <v-text-field
                        v-model="marca" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Modelo: </h4>
                    <v-text-field
                        v-model="modelo" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Pantalla: </h4>
                    <v-text-field
                        v-model="pantalla" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                    <h5 class="d-inline-flex ml-2">Pulgadas</h5>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Sistema: </h4>
                    <v-select
                        :items="items"
                        label="Selecciona"
                        v-model="sistema"
                        outlined
                        class="d-inline-flex"
                    ></v-select>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Rom: </h4>
                    <v-text-field
                        v-model="rom" 
                        label="GB" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                    <h5 class="d-inline-flex ml-2">Almacenamiento interno</h5>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Ram: </h4>
                    <v-text-field
                        v-model="ram" 
                        label="GB" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex mb-5"
                    ></v-text-field>
                </div>
            </div>
            <div class="hidden-sm-and-down ml-5">
                <AgregarImagenes />
            </div>
            <div class="hidden-md-and-up purple lighten-3 ml-5 elevation-4 rounded-lg">
                <v-textarea
                    v-model="descripcion" 
                    label="Escriba una descripcion del producto"
                    color="purple"
                    auto-grow
                    filled
                    class="col-md-5 my-5 px-5 pt-5"
                ></v-textarea>
            </div>
            <div class="hidden-md-and-up pl-15">
                <v-btn :to="{path:'/'}" :disabled="visible" color="purple" medium class="ml-3 mt-3">
                    <span class="black--text">Cancelar</span>
                </v-btn>
                <v-btn @click="agregar()" :disabled="visible" color="purple" medium class="ml-10 mt-3">
                    <span class="black--text">Crear anuncio</span>
                </v-btn>  
            </div>
            <div class="hidden-md-and-up pl-15">
                <div class="hidden-md-and-up pl-15" v-show="visible">
                    <h5>Anuncio creado con exito</h5>
                    <v-btn :to="{path:'/'}" color="purple" medium class="ml-3 mt-3">
                        <span class="black--text">Inicio</span>
                    </v-btn>
            </div>
            </div>
        </v-col>
        <v-col md="6" class="hidden-sm-and-down">
            <div class="elevation-4 rounded-lg my-5 pl-5 mx-5 purple lighten-3">
                <div class="pt-10">
                    <h4>Titulo breve del anuncio: </h4>
                    <v-text-field
                        v-model="titulo" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="col-md-5 mb-5"
                    ></v-text-field>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Vendedor: </h4>
                    <v-text-field
                        v-model="vendedor" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-3">
                    <h4 class="d-inline-flex mr-2">Telefono: </h4>
                    <v-text-field
                        v-model="telefono" 
                        label="" 
                        hide-details="auto"
                        color="purple"
                        class="d-inline-flex"
                    ></v-text-field>
                </div>
                <div class="mt-5">
                    <h4>DESCRIPCION: </h4>
                    <v-textarea
                        v-model="descripcion" 
                        label="Escriba una descripcion del producto"
                        color="purple"
                        auto-grow
                        filled
                        class="col-md-5 my-5 pr-5"
                    ></v-textarea>
                </div>
                <div class="purple lighten-4 col-md-6 offset-md-3">
                    <h4>Precio </h4>
                    <v-text-field
                        v-model="precio" 
                        label="$" 
                        hide-details="auto"
                        color="purple"
                        class="col-md-5 mb-5"
                    ></v-text-field>
                </div>
                <div class="mt-15 pb-10 col-md-6 offset-md-3">
                    <v-btn :to="{path:'/'}" :disabled="visible" color="purple" large class="ml-3 mt-3">
                        <v-icon class="black--text">mdi-close-circle</v-icon>
                        <span class="black--text">Cancelar</span>
                    </v-btn>
                    <v-btn @click="agregar()" :disabled="visible" color="purple" large class="ml-2 mt-3">
                        <v-icon class="black--text">mdi-content-save-outline</v-icon>
                        <span class="black--text">Crear</span>
                    </v-btn>  
                </div>
                <div class="pl-15 pb-10 col-md-6 offset-md-3" v-show="visible">
                    <h5>Anuncio creado con exito</h5>
                    <v-btn :to="{path:'/'}" color="purple" medium class="ml-3 mt-3">
                        <span class="black--text">Inicio</span>
                    </v-btn>
                </div>
            </div>

        </v-col>
    </v-row>
</template>

<script>
    import AgregarImagenes from './AgregarImagenes.vue'
    import {db} from '../db'
    import {nuevoBus} from '../main'
    
    export default {
        name:'AgregarDatos',

        components:{
            AgregarImagenes,
        },

        data () {
           return{
                anuncios: [],
                file: null,
                estado: null,
                marca:'',
                modelo:'',
                pantalla: '',
                sistema:'',
                rom:'',
                ram:'',
                titulo:'',
                vendedor:'',
                telefono:'',
                descripcion:'',
                precio:'',
                items: ['Android', 'Ios', 'Windows'],
                imagenes:[],
                visible:false
           }
        },

        firestore: {
            anuncios: db.collection('anunciosCel'),
        },

        methods: {
            agregar(){
                var numeroAnuncios = this.anuncios.length
                var idDoc = 'anuncio'+numeroAnuncios
                var nuevo = {
                    descripcion: this.descripcion,
                    estado: this.estado,
                    imagenes: this.imagenes,
                    marca: this.marca,
                    modelo: this.modelo,
                    pantalla: parseFloat(this.pantalla),
                    precio: parseFloat(this.precio),
                    ram: parseInt(this.ram,10),
                    rom: parseInt(this.rom,10),
                    sistema: this.sistema,
                    telefono: parseInt(this.telefono,10),
                    titulo: this.titulo,
                    vendedor: this.vendedor
                }

                db.collection('anunciosCel').doc(idDoc).set(nuevo)
                this.visible = true

            },

            nuevo(lista){
                this.imagenes = lista
            }
        },

        created(){
            nuevoBus.$on("listadoImagenes",(data)=>{
                this.nuevo(data)
            })
        }
    }
</script>

<style scoped>

</style>