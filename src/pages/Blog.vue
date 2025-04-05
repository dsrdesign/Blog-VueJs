<template>
     <H1>Blog</H1>
     <!-- <div v-if="state === 'loading'">
          Chargement des articles ...
     </div> -->
     <div v-if="state === 'error'">
          Impossible de charger les articles
     </div>
          <Grid v-else :aria-busy="state === 'loading'">
               <PostCard :post=post :key=post.id v-for="post in posts"></PostCard>
          </Grid>

          <button @click="page++">Page suivante</button>

</template>

<script setup>
import { computed, ref } from 'vue';
import PostCard from '@/components/PostCard.vue';
import Grid from '@/components/Grid.vue';
import { useFetch } from '@/composable/useFetch';

const page = ref(1)


const {state, data: posts} = useFetch( computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page.value}`))

</script>