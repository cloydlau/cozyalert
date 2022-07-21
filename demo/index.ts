import cozyalert, { confirm } from '../src/index'

const { success, info, warning, error } = cozyalert

success('操作成功').then(() => { console.log('success') })

info({
  icon: 'error',
}).then(() => { console.log('info') })

warning('warning').then(() => { console.log('warning') })

error('error').then(() => { console.log('error') })

confirm('confirm').then(() => { console.log('确认') }).catch(() => { console.log('取消') })
