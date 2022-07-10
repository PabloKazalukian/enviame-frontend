<template>
  <b-container fluid="sm" class="pt-5">
    <SearchCharacterVue></SearchCharacterVue>
  </b-container>
</template>

<script>
  import SearchCharacterVue from '@/components/search/SearchCharacter.vue'

  export default {
    name: 'HomeView',
    components: {
      SearchCharacterVue
    }
  }
</script>
