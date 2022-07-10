<template>
  <b-container fluid="sm" class="pt-5">
    <h1 class="pt-3"> Character creation form</h1>
    <div class="row pt-3">
        <div class="col-lg-6">
            <FormCharacterVue :form="form"></FormCharacterVue>
        </div>
        <div class="col-lg-6 pt-5 d-flex justify-content-centet align-items-center flex-column" >
            <b-form-text id="input-live-help" class="me-5">Your new character:</b-form-text>
            <CharacterVue :character="form" :index="0" ></CharacterVue>
        </div>
    </div>
    
  </b-container>
</template>

<script>
    import FormCharacterVue from '@/components/formCharacter/FormCharacter.vue'
    import CharacterVue from '@/components/character/Character.vue'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    thumbnail: {
                        path:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/04/Thanos',
                        extension: 'jpg'
                    },
                    modified:new Date().toISOString(),
                    checked: []
                }
            }
        },
        created: function()  {
            if(this.$store.getters.takeCharacterByIndex(this.$route.params.id) !== undefined){
                this.form=this.$store.getters.takeCharacterByIndex(this.$route.params.id)
                this.form.modified = new Date().toISOString();
            }
        },
        components: {
            FormCharacterVue,
            CharacterVue
        }
    }
</script>

