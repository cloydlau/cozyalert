import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'
import './main.css'

function success (options: string | object) {
  const Options = typeof options === 'string' ? { titleText: options } : options

  return Swal.fire({
    icon: 'success',
    backdrop: false,
    timer: 2000,
    toast: true,
    position: 'top',
    showConfirmButton: false,
    ...Options,
  })
}

function info (options: string | object) {
  const Options = typeof options === 'string' ? { titleText: options } : options

  return Swal.fire({
    icon: 'info',
    timer: 3000,
    toast: true,
    showConfirmButton: false,
    ...Options,
  })
}

function warning (options: string | object) {
  const Options = typeof options === 'string' ? { titleText: options } : options

  return Swal.fire({
    icon: 'warning',
    backdrop: false,
    timer: 5000,
    confirmButtonColor: '#66b1ff',
    ...Options,
  })
}

function error (options: string | object) {
  const Options = typeof options === 'string' ? { titleText: options } : options

  return Swal.fire({
    icon: 'error',
    //timer: 5000,
    allowOutsideClick: false,
    confirmButtonColor: '#66b1ff',
    ...Options
  })
}

function confirm (options: string | object) {
  const Options = typeof options === 'string' ? { titleText: options } : options

  return new Promise((resolve, reject) => {
    Swal.fire({
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#66b1ff',
      allowOutsideClick: false,
      ...Options,
    }).then((e: any) => {
      e.isConfirmed ? resolve(e) : reject(e)
    })
  })
}

Swal.success = success
Swal.warning = warning
Swal.info = info
Swal.error = error
Swal.confirm = confirm

export {
  success, warning, info, error, confirm
}

export default Swal
