<template>
     <div class="blog-layout">
          <main>
               <RouterView></RouterView>
          </main>
          <aside>
               <h1>Les derniers articles</h1>
          </aside>
     </div>
</template>

<style>
.blog-layout {
     display: grid;
     grid-template-columns: 1fr 200px;
     gap: 1rem;
}
</style>