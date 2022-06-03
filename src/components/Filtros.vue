<template> 
    <div>
        <v-switch
            @change="emitirEstado"
            label="Nuevo"
            color="purple darken-1"
            value="nuevo"
            class="pl-5"
            v-model="nuevo"
            inset
        ></v-switch>
        <!--p>{{ selectedMarca }}</p-->
        <div class="elevation-4 rounded-lg mb-5 pl-5 purple lighten-3">
            <p>Marca</p>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedMarca"
                label="Samsung"
                color="purple darken-1"
                value="Samsung"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedMarca"
                label="Huawei"
                color="purple darken-1"
                value="Huawei"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedMarca"
                label="Nokia"
                color="purple darken-1"
                value="Nokia"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedMarca"
                label="iPhone"
                color="purple darken-1"
                value="iPhone"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedMarca"
                label="Xiaomi"
                color="purple darken-1"
                value="Xiaomi"
            ></v-checkbox>
        </div>
        <div class="elevation-4 rounded-lg mb-5 pl-5 purple lighten-3">
            <p>Sistema</p>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedSistema"
                label="Android"
                color="purple darken-1"
                value="Android"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedSistema"
                label="Windows"
                color="purple darken-1"
                value="Windows"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedSistema"
                label="Ios"
                color="purple darken-1"
                value="Ios"
            ></v-checkbox>
        </div>
        <div class="elevation-4 rounded-lg mb-5 pl-5 purple lighten-3">
            <p>Pantalla</p>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedPantalla"
                label="6.5"
                color="purple darken-1"
                value="6.5"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedPantalla"
                label="6.0"
                color="purple darken-1"
                value="6.0"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedPantalla"
                label="5.5"
                color="purple darken-1"
                value="5.5"
            ></v-checkbox>
            <v-checkbox
                @change="emitirFiltro"
                v-model="selectedPantalla"
                label="5"
                color="purple darken-1"
                value="5"
            ></v-checkbox>
        </div>
    </div>
</template>

<script>
    import {nuevoBus} from '../main'

    export default {
        name:'Filtros',

        data () {
            return {
                selectedMarca: [],
                selectedSistema: [],
                selectedPantalla: [],
                nuevo:'Nuevo'
            }
        },
        methods:{
            emitirFiltro(){
                var x = {marca:[], sistema:[], pantalla:[]}
                if (this.selectedMarca.length>0) {
                    x.marca = this.selectedMarca
                }
                if (this.selectedSistema.length>0) {
                    x.sistema = this.selectedSistema
                }
                if (this.selectedPantalla.length>0) {
                    x.pantalla = this.selectedPantalla
                }

                nuevoBus.$emit("cambioFiltro",x)
            },
            emitirEstado(){
                nuevoBus.$emit("cambioEstado",this.nuevo)
            }
        }
    }

</script>

<style scoped>

</style>