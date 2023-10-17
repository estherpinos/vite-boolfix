<script>

import { store } from '../../data/store';

export default{
  name:'Hover',
  data(){
    return{
      store
    }
  },
  props:{
    title: String,
    originalTitle: String,
    language:String,
    voto:String,
    image:String

  }
}

</script>

<template>

    <div class="col-2 mb-2">
      <div class=" card border-0 rounded-0 card-hover mb-3 h-100 ">
        <img class="h-100" :src="'https://image.tmdb.org/t/p/'+'w154'+image" >
        <div class="card-img-overlay bg-black h-100">
          <h4 class="text-white "><strong>Titolo: </strong>{{ title }}</h4>
          <h4 class=" text-white"><strong>Titolo originale: </strong>{{ originalTitle }}</h4>
          <p class="text-white "><strong>Lingua: </strong>{{ language }}</p>
          <p class="text-white"><strong>Voto: </strong>{{ voto }}</p>
        </div>
       
      </div>
    </div>
     
  

</template>

<style lang="scss" scoped>

.card-hover{
  

  img{
    z-index: 999;
  }

  &:hover{
    img{
      z-index: 0;
    }
  }
  
   h4{
    font-size: 15px;
   }
   p{
    font-size: 15px;
   }
   
}


</style>