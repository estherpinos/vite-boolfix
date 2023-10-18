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
    <div class="container mt-4 ">

      <!-- films -->
      <h4 v-if="store.object.length>0">Films</h4>

      <div class="row justify-content-start ">


        <!-- HOVER -->
        <Hover v-for="item in store.object"
        :key="item.id"
        :title="item.title"
        :originalTitle="item.original_title"
        :language="item.original_language"
        :voto="item.vote_average.toString()"
        :image="item.poster_path"
        >
        </Hover>
      </div>



      <!-- serie -->
      <h4 class="mt-5" v-if="store.object2.length>0">Serie</h4>
      <div class="row justify-content-start ">

      <!-- HOVER -->
      <Hover v-for="item in store.object2"
      :key="item.id"
      :title="item.name"
      :originalTitle="item.original_title"
      :language="item.original_language"
      :voto="item.vote_average.toString()"
      :image="item.poster_path"
      >
      </Hover>
      </div>
   
    </div>
  </main>
 
</template>

<style lang="scss" scoped>





</style>