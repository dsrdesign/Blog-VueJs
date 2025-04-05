<template>

     <dialog open>
          <article>
               <header>
                    <button aria-label="Fermer" rel="prev" @click="emits('close')"></button>
                    <h2>{{ title }}</h2>
               </header>
               <slot></slot>
          </article>
     </dialog>

</template>

<script setup>

defineProps({
     title: String,
})

const emits = defineEmits(['close'])

</script>