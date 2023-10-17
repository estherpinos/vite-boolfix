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

    
      <div class=" card border-0 rounded-0 card-hover px-2 mb-2">
        <img :src="'https://image.tmdb.org/t/p/'+'w154'+image" >
        <div class="card-img-overlay bg-black ">
          <h4 class="titolo text-white "><strong>Titolo: </strong>{{ title }}</h4>
          <h4 class="titolo originale text-white"><strong>Titolo originale: </strong>{{ originalTitle }}</h4>
          <p class="lingua text-white "><strong>Lingua: </strong>{{ language }}</p>
          <p class="vot text-white o"><strong>Voto: </strong>{{ voto }}</p>
        </div>
       
      </div>
  

</template>

<style lang="scss" scoped>

.card-hover{
  width: 154px;
  height: 240px;
  

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