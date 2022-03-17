import { createStore } from 'vuex'
import { auth } from './auth.module'
import { list } from './list.module'

const store = createStore({
  modules: {
    auth,
    list,
  },
})

export default store
