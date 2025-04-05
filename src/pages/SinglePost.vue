<template>
     
     <div :aria-busy="state === 'loading'">
          <article v-if="post">
               <h1>{{ post.title }}</h1>

               <p>
                    <img :src="thumbnail" alt="avatar">
               </p>

               <p>{{ post.body }}</p>

               <p>
                    <button class="secondary" @click="onEdit">Editer</button>
               </p>

               <PostForm 
               v-if="formData" 
               :post="formData"
               @close="formData = null"
               @save="onSave"/>
               
          </article>
     </div>

</template>

<script setup>
import PostForm from '@/components/PostForm.vue';
import {useFetch} from '@/composable/useFetch';
import {computed, ref, toRaw} from 'vue';

     const props = defineProps({
          id: String
     })

     const formData = ref(null)
     
     const {state, data: post} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts/${props.id}`))
     const thumbnail = computed(() => `https://picsum.photos/id/${post.value.id}/200/180`)

     const onEdit = () => {
          formData.value = structuredClone(toRaw(post.value))
     }

     const onSave = (newPost) => {
          formData.value = null
          post.value = newPost
     }
     
</script>