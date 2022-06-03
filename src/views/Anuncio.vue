<template>
  <v-container fluid>
    <v-row>
        <v-col>
            <UnAnuncio />
        </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  
</style>

<script>
    import UnAnuncio from '../components/UnAnuncio.vue'

    export default {
        name: 'Anuncio',

        data: () => ({
            
        }),

        components: {
            UnAnuncio,
        },
    }

    
</script>
