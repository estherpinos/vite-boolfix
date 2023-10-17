import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=1322102c4d21b68ceac72bc501086a5f&language=it_IT&query=',
  apiKey:'1322102c4d21b68ceac72bc501086a5f',
  object:[],
  datoInput:"",

  apiUrl2:'https://api.themoviedb.org/3/search/tv?api_key=1322102c4d21b68ceac72bc501086a5f&language=it_IT&query=',
  object2:[],

 

})