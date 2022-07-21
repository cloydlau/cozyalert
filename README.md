# cozyalert

为 [sweetalert2](https://sweetalert2.github.io/) 提供一套开箱即用的预设。

<br>

## 特性

- 提供五种常用的弹框类型预设（参考 element-plus 的 [MessageBox](https://element-plus.org/zh-CN/component/message-box.html) ）
- 支持只传一个字符串作为[标题](https://sweetalert2.github.io/#titleText)
- 支持 [sweetalert2](https://sweetalert2.github.io/) 所有功能

<br>

## 安装

### 全局安装

```ts
// Vue 3

import 'cozyalert/dist/style.css'
import cozyalert from 'cozyalert'
app.config.globalProperties.$swal = cozyalert
```

```ts
// Vue 2

import 'cozyalert/dist/style.css'
import cozyalert from 'cozyalert'
Object.defineProperty(Vue.prototype, '$swal', {
  value: cozyalert
})
```

```ts
// 使用

this.$swal.success('操作成功')
this.$swal.info('提示')
this.$swal.warning('警告')
this.$swal.error('出错了')
this.$swal.confirm('确认吗？')
```

<br>

### 局部引入

```ts
import 'cozyalert/dist/style.css'
import { confirm, error, info, success, warning } from 'cozyalert'

success('操作成功')
info('提示')
warning('警告')
error('出错了')
confirm('确认吗？')
```

<br>

## 配置

同 sweetalert2 的 [configuration](https://sweetalert2.github.io/#configuration)

```ts
success({
  // configuration
})

info({
  // configuration
})

warning({
  // configuration
})

error({
  // configuration
})

confirm({
  // configuration
})
```

<br>

## 生命周期

```ts
success('操作成功').then(() => {
  // 关闭
})

info('提示').then(() => {
  // 关闭
})

warning('警告').then(() => {
  // 关闭
})

error('出错了').then(() => {
  // 关闭
})

confirm('确认吗？').then((e) => {
  // 点击确认
}).catch((e) => {
  if (e.isDenied) {
    // 点击拒绝
  }
  else if (e.isDismissed) {
    // 点击取消
  }
})
```

<br>

## 强制 confirm

无取消按钮、点击弹框外部、按下esc键均无效果

```ts
// 示例

confirm({
  titleText: '同意以继续',
  showCancelButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
})
```

<br>

## 复杂 confirm

```ts
// 简单表单 + 三个按钮 + 异步确认的例子

confirm({
  input: 'text',
  inputAttributes: {
    placeholder: '备注'
  },
  confirmButtonText: '同意',
  showLoaderOnConfirm: true,
  preConfirm: (input) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500)
    }).then(() => {
      alert('同意成功')
    }).catch((e) => {
      alert('同意失败')
    })
  },
  // 拒绝按钮
  showDenyButton: true,
  denyButtonText: '拒绝',
  returnInputValueOnDeny: true,
  preDeny: (input) => {
    if (input) {
      return new Promise((resolve, reject) => {
        setTimeout(reject, 500)
      }).then(() => {
        alert('拒绝成功')
      }).catch((e) => {
        alert('拒绝失败')
      })
    }
    else {
      this.$swal.showValidationMessage('请填写备注')
      return false
    }
  },
}).then((e) => {
  alert('同意')
}).catch((e) => {
  if (e.isDenied)
    alert('拒绝')

  else if (e.isDismissed)
    alert('取消')

})
```

<br>
