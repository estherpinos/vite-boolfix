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
        <div class="menu-header d-flex align-items-center ">
          <nav>
            <ul class=" d-inline-block d-flex list-unstyled ms-5">
            <li><a href="#">Home</a></li>
            <li><a href="#">Serie TV</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Originali</a></li>
            <li><a href="#">Aggiunti di recente</a></li>
            <li><a href="#">La mia lista</a></li>
          </ul>
          </nav>
         
        </div>
      </div>
    
      <div class="input-group mb-3 search d-flex align-items-center">
        <input type="text" class="form-control src-bar" placeholder="Recipient's username" v-model="store.datoInput" >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary btn-search" type="button" @click="$emit ('go')">Button</button>
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
    .contents-bar{
      height: 60px;
      padding: 20px;
    
    }
      .logo{
        & img{
          width: 100px;
        }
      }

      .search{
        width:220px;
        height: 30px;
        margin: 0;

        .src-bar{
          width: 150px;
          height: 30px;
          margin: 0;
        }

        .btn-search{
          width: 70px;
          height: 30px;
        }
      }

      .menu-header{
        height: 100%;
        align-items: center;
        display: flex;
        ul{
        text-decoration: none;
        margin: 0;
        
        li{
          margin-right: 10px;
          
  
          a{
            color: white;
            text-decoration: none;
            font-size: 12px;
            
          }
         
        }
      }
      }

      
}

</style>