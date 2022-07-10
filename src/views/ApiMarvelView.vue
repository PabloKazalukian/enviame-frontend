<template>
  <div  class="pt-3" >
    <h1 class="pt-5">Marvel characters</h1>
    <div class="d-flex justify-content-center flex-wrap gap-3">
      <Character v-for="(item,index) of characters" :character="item" :index="index" :edit="true"></Character>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <b-spinner v-observe-visibility="infiniteHandler" style="width: 5rem; height: 5rem;" label="Large Spinner" variant="danger"></b-spinner>
    </div>
    

  </div>
</template>

<script>
  import Character from '@/components/character/Character.vue';
  import {mapState,mapActions} from 'vuex';


  export default {
    name:'Api',    
    methods: {
      infiniteHandler(isVisible){
        if(!isVisible){ return }
        this.$store.dispatch('addInfiniteCharacters')
      }
    },
    computed:{
      ...mapState(['characters']),
      ...mapActions({addInfiniteCharacters:'addInfiniteCharacters'})
    },
    components:{
      Character
    },   
  }

</script>
