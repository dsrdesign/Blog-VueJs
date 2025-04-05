<template>

  <Header></Header>

  <main class="contain">
    <RouterView/>
  </main>



</template>

<script setup>
import Header from './components/Header.vue'
import { usePage } from './composable/usePage';

const { page, param } = usePage()
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  gap: 1rem;
  background-color: #ffffff10;
  border-bottom: 1px solid #ffffff2d;
}

.header a {
  text-decoration: none;
  color: inherit;
}

.header nav {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.header .header__logo {
  font-size: 1.4rem;
  font-weight: bold;
}

.contain {
  padding-top: 2rem;
  max-width: calc(100vw - 4rem);
}
</style>