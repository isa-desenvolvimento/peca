import { createStore } from 'vuex'
import { auth } from './auth.module'
import { list } from './list.module'
import { user } from './user.module'
import { form } from './form.module'
import { dropdown } from './dropdown.module'

const store = createStore({
  modules: {
    auth,
    list,
    user,
    form,
    dropdown,
  },
})

export default store
