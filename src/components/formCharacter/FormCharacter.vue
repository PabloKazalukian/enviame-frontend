<template>
  <b-card class="mt-5" bg-variant="light">

    <b-form v-if="show" @submit="onSubmit" @reset="onReset" >      

      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your thumbnail:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.thumbnail.path"
          placeholder="Enter a URL image"
          required
        ></b-form-input>
        <b-alert show dismissible fade class="mt-2">Enter URL without ".jpg" only images of this type are allowed</b-alert>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-4">Submit</b-button>
      <b-button type="reset" variant="danger" class="m-4">Reset</b-button>
    </b-form>
    <div v-if="!show">
      <h2>The character was added correctly!</h2>
      <router-link to="/">
        <button class="btn btn-primary">Go home</button>
      </router-link> 
    </div>
  </b-card>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import Character from '../character/Character.vue'

  export default {

    data() {
      return {
        show: true
      };
    },    
    props: {
      form: Object,
    },
    components:{
      Character
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        if(this.$route.params.id !== undefined){
          this.$store.dispatch("editCharacter", this.form,this.$route.params.id);
        }else{
          this.$store.dispatch("addCharacter", this.form);
        }
        this.show= false;
      },
      onReset(event) {
        event.preventDefault();
        this.form.name = "";
        this.form.description = "";
        this.show = false;
        this.$nextTick(() => {
            this.show = true;
        });
      }
    },
    computed: {
        ...mapState(["characters"]),
        ...mapActions({ addCharater: "addCharater" })
    }
    
  }
</script>

<style scoped>
  .imagen{
    margin-top: 12px;
    max-width: 30%;
  }
</style>