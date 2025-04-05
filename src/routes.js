import BlogPage from './pages/Blog.vue'
import SinglePage from './pages/SinglePost.vue'
import ContactPage from './pages/Contact.vue'
import HomePage from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'
import BlogLayout from './components/BlogLayout.vue'

export const routes = [
     { path: '/', component: HomePage, name: 'home' },
     { 
          path: '/blog', 
          component: BlogLayout , 
          children: [
               { path: '', component: BlogPage, name: 'blog' },
               { path: ':id(\\d+)', component: SinglePage, props:true, name: 'post.single' }
          ]
     },
     { path: '/contact', component: ContactPage, name: 'contact' },
     { path: '/:pathMatch(.*)*', component: NotFound}
]