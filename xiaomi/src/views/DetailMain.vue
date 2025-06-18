<template>
    <div>
        {{id}}
    </div>
</template>

<script>
    export default {
        props:["id"],
        data(){
            return {
                imgItem:{}
            }
        },
        created(){
            console.log(this.id);
        }
    }
</script>

<style scoped>

</style>