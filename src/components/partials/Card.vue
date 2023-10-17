<script>
import { store } from '../../data/store';

  export default{
    name:'Card',
    data(){
      return{
        store
      }
    },
    props:{
    image: String,
  }
  }

</script>

<template>

  <div class="card-coperta mb-3">
    <img :src="'https://image.tmdb.org/t/p/'+'w154'+image" >
        
  </div>
  
 

</template>

<style lang="scss" scoped>
.card-coperta{
  width: 154px;
  height: 240px;
  flex-wrap: wrap;
  display: flex;
  z-index: 999;
    img{
      background-size: cover;
    }
}

.card-coperta:hover{
  opacity: 0;
}
</style>