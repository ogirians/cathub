<template>
    <v-container >
        <h5>Find a new pet</h5>
    </v-container>
</template>

<script>
export default{
    mounted() {
        this.setPath()
    },
    methods :{
        setPath(){
            this.$store.commit('global/set_path', '/umum')
        }
    }
}
</script>