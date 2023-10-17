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
    Hover
  
}
}

</script>

<template>
  <main>
    <div class="container m-4 ">
      <div class="row justify-content-evenly ">

        <!-- COPERTA -->
        <Card class="card-img" v-for="item2 in store.object"
        key="item2.id"
        :image="item2.poster_path"
        >
        </Card>

        <!-- HOVER -->
        <Hover v-for="item in store.object"
        :key="item.id"
        :title="item.title"
        :originalTitle="item.original_title"
        :language="item.original_language"
        :voto="item.vote_average"
        :image="item.poster_path"
        >
        </Hover>
      </div>
   
    </div>
  </main>
 
</template>

<style lang="scss" scoped>

.card-img:hover{
  opacity: 0;
}



</style>