
<template>
     <Modal title="Editer l'article">
          <form @submit.prevent="onSubmit">
               <label for="title">Titre</label>
               <input type="text" id="title" v-model="post.title">
               <label for="body">Corps</label>
               <textarea id="body" v-model="post.body"></textarea>
               <button :disable = "state === 'loading'" >Modifier</button>

          </form>
     </Modal>
</template>

<script setup>

import Modal from '@/components/Modal.vue';
import {ref} from 'vue'

const props = defineProps({
     post: Object
})

const emits = defineEmits('save')

const state = ref('idle')

const onSubmit = () => {
     console.log(props.post)
     state.value = 'loading'
     fetch('https://jsonplaceholder.typicode.com/posts/' + props.post.id, {
          method: 'PUT',
          body: JSON.stringify(props.post),
          headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
          }
     })
     .then(res => {
          if (res.ok) {
               return res.json()
          }
          throw new Error('Impossible de charger les article du serveur')
     })
     .then(data => {
          console.log("datas : ", data)
          emits('save', data)
          state.value = 'idle'
     })
     .catch(e => {
          state.value = 'error'
     })
}

</script>