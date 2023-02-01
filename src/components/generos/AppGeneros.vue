<template>
    <div class="genero">
        <div class="formulario">
            <div class="topo">
                
                    <img :src="imagem"  class="imagem" v-show="imagem!=''">
                
                <input type="file"  accept="image/*" @change="previw($event)">
            </div>
<h1>{{ imagem2 }}</h1>
            <input type="text"  placeholder="Descrição do Gênero" id="nome" v-model="descricao">
            {{ descricao }}
            

            <button @click="salvarGenero">+</button>
            

        </div>
        
    </div>
</template>

<script>


import { useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
export default {
    data(){
        return{
            imagem: '',
            imagem2: '',
            descricao: '',
        }
    },
    methods: {
        previw(event){
                const file = event.target.files[0]
                console.log(file)
                this.imagem2 = file
                this.imagem = URL.createObjectURL(file)
        
        },
        salvarGenero(){
           
            firebase.database().ref('/' + 'userId').set({
    username: 'name',
    email: 'email',
   
  });
    

        }
      
        
    },
 
       

   
}
</script>

<style src="./style.scss" lang="scss" scoped />

