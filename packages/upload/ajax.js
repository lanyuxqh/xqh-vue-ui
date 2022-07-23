export default function ajax(options) {
  // 创建xhr对象
  const xhr = new XMLHttpRequest()
  const action = options.action

  // 进度条事件 计算上传进度百分比
  xhr.upload.onprogress = function (e) {
    if (e.total > 0) {
      e.percent = (e.loaded / e.total) * 100
    }
    options.onProgress(e)
  }

  const formData = new FormData() // h5 用来上传文件的api

  formData.append(options.filename, options.file, options.file.name)

  xhr.onerror = function (err) {
    options.onError(err)
  }
  
  xhr.onload = function () {
    const text = xhr.responseText || xhr.response // 字符串
    options.onSuccess(JSON.parse(text))
  }

  xhr.open('post', action, true) // true 表示异步， false 表示同步
  // 发送请求
  xhr.send(formData)

  return xhr
}
