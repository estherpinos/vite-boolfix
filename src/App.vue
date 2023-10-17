<script>

import Main from './components/Main.vue';
import Header from './components/Header.vue';
import {store} from './data/store';
import axios from 'axios';

export default{
  name:'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },

  methods:{
    getApi(){
      axios.get(store.apiUrl+store.datoInput)
        .then( res =>{
          store.object = res.data.results;
          
        })
        .catch(err => {
          console.log(err);
        }),
        axios.get(store.apiUrl2+store.datoInput)
        .then( res =>{
          store.object2 = res.data.results;
          
        })
        .catch(err => {
          console.log(err);
        })
    },
  
  }
}
</script>


<template>
 <Header @go="getApi"></Header>
 <Main></Main>
</template>

<style lang="scss" scoped>

</style>
