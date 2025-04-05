import {ref, watch} from "vue";


export function useFetch(url) {

     const state = ref('loading')
     const data = ref(null)


     watch( 
          url, (
          urlValue) => {
          ( urlValue in useFetch.mock 
               ? useFetch.mock[urlValue]() 
               : fetch(urlValue, {
               headers: {
                    'Accept': 'application/json'
               }
          })
               .then(res => {
                    if (res.ok) {
                         console.log("Is ok", res);
                         return res.json()
                    }
                    throw new Error('Impossible de charger les article du serveur')

               }))
               .then(v => {
                    console.log("datas : ", data)
                    data.value = v
                    state.value = 'idle'
               })
               .catch(e => {
                    state.value = 'error'
               })
     }, {immediate: true})

     return {
          state,
          data
     }
}

useFetch.mock = {}