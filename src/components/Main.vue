<script>
import Hover from './partials/Hover.vue';
import { store } from '../data/store';


export default{
    name: 'Main',
    data(){
      return{
        store
      }
      
    },

    components: {
       Hover }
}

</script>

<template>
  <main>
    <div class="container">
     <Hover v-for="item in store.object"
     :key="item.id"
     :title="item.title"
     :originalTitle="item.original_title"
     :language="item.original_language"
     :voto="item.vote_average"
     >
     </Hover>
    </div>
  </main>
 
</template>

<style lang="scss" scoped>

</style>