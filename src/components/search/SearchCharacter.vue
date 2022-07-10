<template>
  <div role="group" class="pt-3">
    <h1>Search for a MARVEL character </h1>
    <b-form @submit="onSubmit" >      
        <label for="input-live">Search a character:</label>
        <b-form-input
        id="input-live"
        v-model="name"
        :state="nameState"
        aria-describedby="input-live-help input-live-feedback"
        placeholder="Enter a name"
        trim
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
        </b-form-invalid-feedback>

        <!-- This is a form text block (formerly known as help block) -->
        <b-form-text id="input-live-help">Your search by name.</b-form-text>
        <b-button type="submit" variant="primary" class="m-4">Search</b-button>
        <h4 v-if="totalSearch.state">results:{{totalSearch.total}}</h4>

    </b-form>
    <div class="d-flex justify-content-center flex-wrap gap-3">
        <h3 v-if="emptySearch"> No result found</h3>
        <Character v-for="(item,index) of searchCharacter" :character="item" :index="index" ></Character>        
    </div>
  </div>
</template>

<script>

    import Character from '../character/Character.vue';
    import {mapState,mapActions} from 'vuex';

    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                if(this.name.length > 2){
                    this.$store.dispatch("searchCharacters", this.name);
                }
            }        
        },
        computed:{
            ...mapState(['searchCharacter','emptySearch','totalSearch']),
            ...mapActions({searchCharacters:'searchCharacters'},{resetSearchCharacter:'resetSearchCharacter'}),
            nameState() {
                return this.name.length > 2 ? true : false
            }
        },
        components:{
            Character
        },
        beforeMount: function() {
            this.$store.dispatch("resetSearchCharacter")
        }
    }
</script>