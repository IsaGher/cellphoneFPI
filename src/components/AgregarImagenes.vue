<template>
    <div class="elevation-4 rounded-lg mb-5 pl-5 purple lighten-3">
        <div class="hidden-sm-and-down"><span>Imagenes</span></div>
        <div class="col-md-12 d-inline-flex">
            <v-file-input
                v-if="!uploading"
                accept="image/*"
                v-model="file"
                prepend-icon="mdi-plus-circle"
                show-size
                label="Seleccione"
                color="purple darken-1"
                >
            </v-file-input>
            <v-btn
                :disabled="file==null"
                @click="upload()"
                v-show="!uploading"
                color="purple"
                medium
                class="ml-3 mt-3"
                >
                <v-icon class="black--text">mdi-plus-circle</v-icon>
                <span class="black--text">Subir</span>
            </v-btn>
            <v-btn
                v-if="downloadURL"
                color="purple"
                medium
                class="ml-2 mt-3"
                @click="deleteImage()"
                >
                <v-icon class="black--text">mdi-minus-circle</v-icon>
                <span class="black--text">Eliminar</span>
            </v-btn>
        </div>
        <div class="col-md-12 d-inline-flex">
            <ol class="hidden-sm-and-down">
                <li v-for="(item,key) in archivos" :key="key">{{item}}</li>
            </ol>
        </div>
        <div class="col-md-12 d-inline-flex ml-3">
            <v-card
                max-width="400"
                >
                <v-img
                v-if="!uploading"
                :src="downloadURL"
                height="300px"
                ></v-img>
            </v-card>
        </div>
    </div>
</template>

<script>
    import {db} from '../db'
    import {storage} from '../db'
    import {nuevoBus} from '../main'
    
    export default {
        name:'AgregarImagenes',

        data () {
           return{
                anuncios: [],
                file: null,
                fileName:'',
                uploading: false,
                downloadURL:'',
                archivos: [],
                linksImag: []
           }
        },

        firestore: {
            anuncios: db.collection('anunciosCel'),
        },

        methods: {
            upload(){
                this.fileName = this.file.name
                this.uploading = true
                var archivo = storage.ref('anuncio'+this.anuncios.length+'/'+this.file.name)
                archivo.put(this.file)
                .then(()=>{
                    archivo.getDownloadURL().then((url)=>{
                        this.downloadURL=url
                        this.uploading = false
                        this.linksImag.push(url)
                        this.listarArchivos()
                        this.file = null
                    })
                }).catch((error)=>{
                    console.log(error)
                })
                nuevoBus.$emit("listadoImagenes",this.linksImag)
            },

            deleteImage(){
                storage.ref('anuncio'+this.anuncios.length+'/'+this.fileName)
                .delete().then(()=>{
                    this.uploading = false
                    this.downloadURL = ''
                    this.linksImag.pop()
                    this.archivos.pop()
                }).catch((error)=>{
                    console.log(error)
                })
                this.file = null
                this.fileName = ''
                nuevoBus.$emit("listadoImagenes",this.linksImag)
            },

            listarArchivos(){
                this.archivos = []
                var this2 = this
                var listRef = storage.ref()
                listRef.child('anuncio'+this.anuncios.length).listAll().then((res)=>{
                    res.items.forEach(function(itemRef){
                        this2.archivos.push(itemRef.fullPath)
                    })
                }).catch((error)=>{
                    console.log(error)
                })
            }
            
        },

        created(){
            this.listarArchivos()
            
        }
    }
</script>

<style scoped>

</style>