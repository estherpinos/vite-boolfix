<script>
import Hover from './partials/Hover.vue';
import { store } from '../data/store';
import Card from './partials/Card.vue';


export default{
    name: 'Main',
    data(){
      return{
        store
      }
      
    },

    components: {
    Hover,
    Card
}
}

</script>

<template>
  <main>
    <div class="container m-4 ">
      <div class="row justify-content-evenly ">

        <!-- COPERTA -->
        <Card v-for="item2 in store.object"
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
        >
        </Hover>
      </div>
   
    </div>
  </main>
 
</template>

<style lang="scss" scoped>



</style>