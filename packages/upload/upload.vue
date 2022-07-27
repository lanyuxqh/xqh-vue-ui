<template>
  <div class="x-upload">
    <upload-dragger v-if="drag" :accept="accept" @file="startUploadFiles"></upload-dragger>

    <template v-else>
      <div class="x-upload-btn" @click="handleClick">
        <slot></slot>
      </div>
      <input type="file" :name="name" :accept="accept" :multiple="multiple" @change="handleChange" ref="inputRef" />
    </template>

    <div class="x-upload-tips">
      <slot name="tip"></slot>
    </div>

    <ul>
      <li v-for="file in uploadFiles" :key="file.uid">
        <div class="list-item">
          <x-icon icon="attachment"></x-icon>
          <!-- <img :src="file.url" alt=""> -->
          <a :href="file.url" target="__blank">{{file.name}}</a>
          <x-icon icon="close-circle" @click="handleRemove(file)"></x-icon>
          <x-progress type="bar" v-if="file.status === UPLOAD_STATUS.UPLOADING" :percentage="file.percentage"></x-progress>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import UploadDragger from './upload-dragger.vue'
import ajax from './ajax.js';
export default {
  name: 'XUpload',
  components: {
    UploadDragger
  },
  props: {
    action: {
      type: String,
      required: true
    },
    fileList: {   // 显示已经上传的文件列表
      type: Array,
      default () {
        return [];
      },
    },
    name: {
      type: String,
      default: 'file'
    },
    accept: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: Number,
    onChange: Function,
    onExceed: Function,
    beforeUpload: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeRemove: Function,
    onRemove: Function,
    httpRequest: {
      type: Function,
      default: ajax,
    },
    drag: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      uploadFiles: [],  // 要上传的文件列表
      tempIndex: 1,
      reqs: [],
      UPLOAD_STATUS: {
        READY: 'ready',
        UPLOADING: 'uploading',
        SUCCESS: 'success',
        FAIL: 'fail',
      },
    }
  },
  watch: {
    fileList: {
      immediate: true,
      handler (fileList) {
        this.uploadFiles = fileList.map((item) => {
          item.uid = item.uid || (Date.now() + this.tempIndex++);
          item.status = item.status || 'succss';
          return item
        })
      }
    }
  },
  methods: {
    handleClick () {
      // 点击之前要还原输入框
      this.$refs.inputRef.value = null
      this.$refs.inputRef.click()
    },
    handleChange (e) {
      // 获取选中的文件
      const files = e.target.files
      if (!files) return
      this.startUploadFiles(files)
    },
    startUploadFiles (files) {
      // 文件上限
      if (this.limit && files.length + this.fileList.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList)
        return
      }
      let postFiles = [...files]
      if (!this.multiple) postFiles = postFiles.slice(0, 1)
      if (postFiles.length === 0) return;
      postFiles.forEach(rawFile => {
        // 用户可能频繁上传同一个文件 将文件格式化
        this.handleStart(rawFile) // 上传前的处理
        this.upload(rawFile) // 正式上传
      })
    },
    handleStart (rawFile) {
      rawFile.uid = Math.random() + this.tempIndex++;  // 唯一的标识
      const file = {
        uid: rawFile.uid,
        status: 'ready', // 上传的状态
        percentage: 0, // 上传的进度
        name: rawFile.name,
        size: rawFile.size,
        raw: rawFile
      }
      file.url = URL.createObjectURL(rawFile);
      this.uploadFiles.push(file) // 将当前用户上传的文件加到列表中，需要显示
      this.onChange && this.onChange(file)
    },
    upload (rawFile) {
      // 先判断文件是否能够上传，没有限制则直接上传
      if (!this.beforeUpload) {
        return this.post(rawFile)
      }
      const flag = this.beforeUpload(rawFile)
      if (flag) {
        this.post(rawFile)
      } else {
        this.uploadFiles.splice(this.uploadFiles.indexOf(this.getFile(rawFile)), 1)
        this.onRemove && this.onRemove(null, rawFile);
      }
      // flag && this.post(rawFile)
    },
    post (rawFile) {
      // 真正上传到服务器, 调用httpRequest方法。整合参数，处理上传的整个流程
      const { uid } = rawFile; // 希望中断ajax，是一个序号，标记
      const options = {
        file: rawFile, // 源文件
        filename: this.name,
        action: this.action,
        onProgress: ev => {
          // 处理上传中的状态
          this.handleProgress(ev, rawFile)
        },
        onSuccess: res => {
          // 处理成功时的状态
          this.handleSuccess(res, rawFile)
          delete this.reqs[uid];
        },
        onError: err => {
          // 处理失败时的状态
          this.handleError(err, rawFile)
          delete this.reqs[uid];
        }
      }
      const req = this.httpRequest(options);
      this.reqs[uid] = req; // 将每个ajax存起来，等会儿中断会用
      // 允许用户使用promise的ajax
      if (req && req.then) {
        req.then(options.onSuccess, options.onError)
      }
    },
    getFile (rawFile) {
      return this.uploadFiles.find(file => file.uid == rawFile.uid);
    },
    handleProgress (ev, rawFile) {
      const file = this.getFile(rawFile)   // 通过源文件 用户上传的文件 -> 格式化的结果
      file.status = this.UPLOAD_STATUS.UPLOADING;
      file.percentage = ev.percent || 0 // 赋值上传进度
      this.onProgress(ev, file, this.uploadFiles);// 调用用户的回调
    },
    handleSuccess (res, rawFile) {
      const file = this.getFile(rawFile)
      file.status = this.UPLOAD_STATUS.SUCCESS
      file.response = res
      this.onSuccess(res, file, this.uploadFiles)
      this.onChange(file, this.uploadFiles)
    },
    handleError (err, rawFile) {
      const file = this.getFile(rawFile)
      file.status = this.UPLOAD_STATUS.FAIL
      this.uploadFiles.splice(this.uploadFiles.indexOf(file), 1)
      this.onError(err, file, this.uploadFiles)
      this.onChange(file, this.uploadFiles)
    },
    handleRemove (file, rawFile) {
      if (rawFile) {
        file = this.getFile(rawFile);
      }
      const doRemove = () => {
        this.abort(file);
        this.uploadFiles.splice(this.uploadFiles.indexOf(file), 1);
        this.onRemove && this.onRemove(file, this.uploadFiles);
      }
      if (!this.beforeRemove) {
        doRemove();
      }
    },
    abort (file) {
      const { reqs } = this;
      let uid = file;
      if (file.uid) uid = file.uid;
      if (reqs[uid]) {
        reqs[uid].abort();
      }
    },
  },

}
</script>
<style lang="scss" scoped>
@import "@/style/var.scss";
.x-upload {
  input {
    display: none;
  }
  &-btn {
    display: inline-block;
  }
  &-tips {
    margin: 12px 0;
    color: #9b9393;
    font-size: 14px;
  }
  ul {
    list-style: none;
    .list-item {
      margin: 4px;
      .x-icon {
        &:first-of-type {
          fill: $primaryColor !important;
          margin-right: 5px;
          width: 18px !important;
        }
        &:last-of-type {
          cursor: pointer;
          fill: $dangerColor !important;
          margin-left: 5px;
          width: 16px !important;
        }
      }
      a {
        text-decoration: none;
        color: #606266;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }
}
</style>
