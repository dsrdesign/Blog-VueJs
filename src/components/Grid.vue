<template>
     <div class="grid">
          <slot></slot>
     </div>
</template>

<script setup>
</script>

<style>
.grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 1rem;
}

.grid>*{
     margin: 0;
}
</style>