import { createToast } from 'mosha-vue-toastify'

// 'info', 'danger', 'warning', 'success', 'default'
export const onToast = (message, type = 'default') => {
  createToast(message, {
    position: 'top-right',
    type: type,
    transition: 'bounce',
    showIcon: 'true',
    hideProgressBar: 'false',
  })
}

export const messagesFetch = (status, message = null) => {
  if (status === 'success') {
    onToast(message, 'success')
  } else {
    onToast(message, status.toLowerCase())
  }
}
