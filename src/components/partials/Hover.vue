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
    voto:String

  }
}

</script>

<template>
   <div class="card">
        <h4 class="titolo">{{ title }}</h4>
        <h4 class="titolo originale">{{ originalTitle }}</h4>
        <p class="lingua">{{ language }}</p>
        <p class="voto">{{ voto }}</p>
      </div>

</template>

<style lang="scss" scoped>
</style>