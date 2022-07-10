import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {URL,API_KEY} from '@/shared/URLs.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    characters:[],
    character:[],
    charge:false,
    searchCharacter:[],
    emptySearch:false,
    totalSearch:{
      state:false,
      total:0
    }
  },
  getters: {
    takeCharacterByIndex: (state) => (index) => {
      return state.characters[parseInt(index,10)]
    },
    lengthCharacter (state) {
      return state.characters.length-state.character.length
    }
  },
  mutations: {
    charge(state,boolean){
      state.charge = boolean
    },
    addInfiniteCharacters(state,characterArray){
      if(state.charge ===false){
        state.charge = true
        state.characters = [...state.character,...state.characters];
      }
      state.characters = [...state.characters,...characterArray];
    },
    addCharacter(state,characterArray){
      if(state.charge){
        state.characters = [...characterArray,...state.characters];
        state.character = [...characterArray,...state.character];
      }else{
        state.character = [...characterArray,...state.character];
      }
    },
    editCharacters(state,character,index){
      state.characters[index] = character;
    },
    searchCharacter (state,charactersSearch){
      state.searchCharacter = charactersSearch.results;
      state.totalSearch={state:true,total:charactersSearch.total}
    },
    resetSearchCharacter(state){
      state.searchCharacter=[];
      state.totalSearch={state:false,total:0}
    },
    emptySearch(state,boolean){
      state.emptySearch=boolean;
      state.totalSearch={state:false,total:0}
    }

  },
  actions: {
    addCharacter: function({commit},character){
      commit('addCharacter',[character])
    },
    editCharacter: function({commit},character,index){
      commit('editCharacters',character,index)
    },
    searchCharacters: function({commit},character){
      axios(`${URL}characters?nameStartsWith=${character}&${API_KEY}`).then((e)=>{
        (e.data.data.results.length ===0) ? commit('emptySearch',true) : commit('emptySearch',false)
        commit('searchCharacter',e.data.data)
      })
    },
    resetSearchCharacter: function({commit}){
      commit('resetSearchCharacter')
    },
    addInfiniteCharacters: function({commit}){
      let limit = this.getters.lengthCharacter
      let offset=0;
      if(limit ===0){ 
        commit('charge',true);
        offset=0;
      }else{
        offset= limit+20;
      }
      axios(`${URL}characters?limit=20&offset=${offset}${API_KEY}`).then((e)=>{
        commit('addInfiniteCharacters', e.data.data.results)
      })
    }
  },
  modules: {
  }
})
