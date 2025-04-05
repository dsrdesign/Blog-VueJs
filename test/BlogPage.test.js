import { flushPromises, mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { createMemoryHistory, createRouter } from "vue-router";
import BlogPage from "@/pages/Blog.vue";
import { routes } from "@/routes";
import { useFetch } from "@/composable/useFetch";

describe( '<BlogPage>', () => {
     let router;

     beforeEach(async () => {
          router = createRouter({
               history: createMemoryHistory(),
               routes: routes
          })
          router.push("/")
          await router.isReady()
     })

     afterEach(() => {
          useFetch.mock = {};
     })

     it("should render the right amount of articles",async () => {
          useFetch.mock['https://jsonplaceholder.typicode.com/posts?_limit=3&_page=1'] = () => 
               
                    Promise.resolve([
                    {
                         "userId": 1,
                         "id": 1,
                         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                       },
                       {
                         "userId": 1,
                         "id": 2,
                         "title": "qui est esse",
                         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                       },
                       {
                         "userId": 1,
                         "id": 3,
                         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
                       }
               ])
          const wrapper = mount(BlogPage, {
               global: {
                    plugins: [router]
               }
          })
          await flushPromises()
          expect(wrapper.findAll('article')).toHaveLength(3)
     })
})