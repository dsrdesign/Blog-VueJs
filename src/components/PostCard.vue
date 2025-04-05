<template>

     <article class="post-card">
          <RouterLink :to="link">
               <img :src="thumbnail" alt="avatar">
          </RouterLink>
          <h2> 
               <RouterLink :to="link">
                    {{ post.title }}
               </RouterLink>
          </h2>
          <p>{{ post.body }}</p>
          <RouterLink :to="link">Lire la suite</RouterLink>
     </article>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
     post: Object
})

const link = computed(() => ({
     name: 'post.single',
     params: {
          id: props.post.id
     }
}))
const thumbnail = computed(() => `https://picsum.photos/id/${props.post.id}/200/180`)

</script>

<style>
.post-card {
     margin-bottom: 2rem;
     padding: 1rem;
     border-radius: 5px;
     background-color: #ffffff10;
}

.post-card img {
     width: 100%;
     border-radius: 5px;
     margin-bottom: 1rem;
}

.post-card a{
     text-decoration: none;
     /* color: inherit; */
}

.post-card h2 {

     margin: 1rem 0;
}
</style>