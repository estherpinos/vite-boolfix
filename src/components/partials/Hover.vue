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

  },
  methods:{
            calcolaStelle(voto){
                console.log(voto);
                var numeroFloat = parseFloat(voto);
                numeroFloat=numeroFloat/2;
                var numeroArrotondato = Math.ceil(numeroFloat);
                return numeroArrotondato;
            }
        }
}

</script>

<template>

    <div class="col-2 mb-2">
      <div class=" card border-0 rounded-0 card-hover mb-3 h-100 ">
        <img class="h-100 img-cover" :src="'https://image.tmdb.org/t/p/'+'w154'+image" >
        <div class="card-img-overlay bg-black h-100">
          <h4 class="text-white "><strong>Titolo: </strong>{{ title }}</h4>
          <h4 class=" text-white"><strong>Titolo originale: </strong>{{ originalTitle }}</h4>
          <img class="flag" v-if="language=='en'" src="../../assets/img/en.png" alt="">
          <img class="flag" v-else-if="language=='it'" src="../../assets/img/it.png" alt="">
          <p v-else class="text-white"><strong>Lingua: </strong>
            {{ language }}
          </p>
            <!-- STELLE -->
          <div class="stelle">
            <i class="fa-solid fa-star" style="color: #ffffff;" v-for="(n, index) in calcolaStelle(voto)" :key="index"></i>

            <i class="fa-regular fa-star" style=" color:#ffffff; " v-for="(n, index) in (5-calcolaStelle(voto))" :key="index">
            </i>
          </div>
         
         
        </div>
       
      </div>
    </div>
     
  

</template>

<style lang="scss" scoped>

.card-hover{
  

  .img-cover{
    z-index: 999;
  }

  &:hover{
    img{
      z-index: 0;
    }
  }

  .flag{
    width: 20px;
  }
  
   h4{
    font-size: 12px;
   }
   p{
    font-size: 12px;
   }
   
}


</style>