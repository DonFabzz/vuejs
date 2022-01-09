<template>
    <span :class="couleurLigne">
         <b v-if="note>10">Admis</b>
         <b v-else>Non-admis</b>
    </span>
</template>

<script>
export default {
  name: 'Note',
  props: {
    matiere: String,
    note: Number
  },
  computed: {
    couleurLigne(){
        if(this.note>10){
            return 'green'
        }else{
            return 'red'
        }
    }
  },
}
</script>

<style scoped>
.red {
  color:red;
}
.green {
  color:green;
}
</style>