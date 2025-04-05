<template>

     <header class="header">
          <RouterLink :to="{name: 'home'}" class="header__logo">Mon site</RouterLink>
          <nav>
               <RouterLink :to="{name: 'blog'}">Blog</RouterLink>
               <RouterLink :to="{name: 'contact'}">Contact</RouterLink>
          </nav>
     </header>

</template>

<script setup>

</script>