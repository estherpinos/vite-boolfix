<script>

import { store } from '../data/store';
export default{
  name:'Header',
  data(){
    return{
      store
    }
  },
  methods:{
    
  }
}

</script>

<template>
  <main>
    <div class="bar bg-black ">
    <div class="contents-bar d-flex justify-content-between align-items-center ">
      <div class="logo d-flex align-items-center ">
        <img src="logo-boolflix.png" alt="">
      </div>
    
      <div class="input-group mb-3 search d-flex align-items-center">
        <input type="text" class="form-control" placeholder="Recipient's username" v-model="store.datoInput" >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="$emit ('go')">Button</button>
        </div>

      </div>
    </div>
  </div>
  </main>
  
 
</template>

<style lang="scss" scoped>

.bar{
  width: 100%;
  height: 60px;
  padding: 20px;
    .contents-bar{
      height: 100%;
    }
      .logo{
        & img{
          width: 100px;
        }
      }

      .search{
        width:200px;
      }
}

</style>