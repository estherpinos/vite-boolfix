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
}
</script>


<template>
 <Header></Header>
 <Main></Main>
</template>

<style lang="scss" scoped>

</style>
