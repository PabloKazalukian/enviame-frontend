<template>    
  <b-card :img-src="character.thumbnail.path+'.'+character.thumbnail.extension" :title="character.name" img-alt="Image" img-top class="carta">
    <b-card-text>
      <div>
        <p v-if="character.description">
          {{character.description}}
        </p> 
        <p v-if="!character.description" >
          not description
        </p>
      </div>
      <router-link :to="`/edit/${index}`" class="buttonEdit">
        <b-button v-if="edit" variant="outline-warning">Edit</b-button>
      </router-link>
    </b-card-text>
    <template #footer>
      <small  class="text-muted">Modified: {{character.modified.slice(0,10).split('-').reverse().join('-')}}</small>
    </template>
  </b-card>

</template>


<script>
export default {
  name:'Character',
  props:{
    character:Object,
    index: Number,
    edit:Boolean
  }
  
}
</script>

<style scoped>
  .carta{
    width: 450px;
    margin: 15px;
  }
  .carta img{
    height: 250px;
  }
  
</style>