import { createStore } from 'vuex'
import { auth } from './auth.module'
import { list } from './list.module'
import { user } from './user.module'
import { form } from './form.module'

const store = createStore({
  modules: {
    auth,
    list,
    user,
    form,
  },
})

export default store
