<template>
    <b-container fluid="sm" class="pt-5">

        <h1>Ejercico 1</h1>
        <h4>Numeros Primos</h4>
        <div>
        <b-card bg-variant="light">
            <b-form  @submit="onSubmit" >      

            <b-form-group id="input-group-1" label="Enter the first value:" label-for="input-1">
                <b-form-input id="input-1" type="number"  v-model="form.first"  required ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Enter the second value:" label-for="input-2">
                <b-form-input id="input-2" type="number"  v-model="form.second"  required></b-form-input>
            </b-form-group>
            <pre class="m-0">{{ primosArr?.join(',') }}</pre>
        <b-button type="submit" variant="primary" class="m-4">calculate</b-button>
    </b-form>           
        </b-card>
  </div>
    </b-container>
</template>

<script>
  export default {
    data() {
            return {
                form: {
                    first:0,
                    second:0
                },
                primosArr:[]
            };
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.primosArr=[]
                let j ;
                let c ;
                this.form.first =parseInt(this.form.first,10)
                this.form.second =parseInt(this.form.second,10)
                if( this.form.first > this.form.second){
                    j = this.form.second+1;
                    c = this.form.first;
                }else{
                    j = this.form.first+1;
                    c = this.form.second;
                }
                for (; j < c; j++) {
                    if (this.primo(j)) {
                        this.primosArr.push(j);
                    }
                
                }
                this.form={
                    first:0,
                    second:0
                }
            },
            primo(number) {

                for (let i = 2; i < number; i++) {

                    if (number % i === 0) {
                        return false;
                    }

                }

                return number ;
            }
        },
  }
</script>