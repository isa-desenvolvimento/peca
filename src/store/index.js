import { createStore } from 'vuex'
import { auth } from './auth.module'
import { list } from './list.module'
import { user } from './user.module'

const store = createStore({
  modules: {
    auth,
    list,
    user,
  },
})

export default store
