<template>
  <div class="upload-dragger" @drop.prevent="onDrop" @dragover.prevent>
    <x-icon icon="cloud-upload" class="icon"></x-icon>
    <span>将文件拖拽到此区域即可</span>
  </div>
</template>
<script>
export default {
  name: 'UploadDragger',
  props: {
    accept: {
      type: String,
      default: ""
    },
  },
  methods: {
    onDrop (e) {
      if (!this.accept) {
        this.$emit('file', e.dataTransfer.files)
      } else {
        // 这里可以进行过滤，根据文件后缀 移除掉不需要的文件 image/jpeg image/jpg image/png
        // 发射过滤后的文件
        this.$emit('file', [].slice.call(e.dataTransfer.files).filter(file => {
          // type = image/png name = upload_file.png
          const { type, name } = file;
          // 获取文件扩展名，挺巧妙的
          // extension = .png
          const extension = name.indexOf('.') > -1
            ? `.${name.split('.').pop()}`
            : '';
          // baseType = image
          const baseType = type.replace(/\/.*$/, '');
          // 根据用户配置的accept允许上传类型校验文件类型和后缀名，不匹配则返回false
          return this.accept.split(',')
            .map(type => type.trim())
            .filter(type => type)
            .some(acceptedType => {
              if (/\..+$/.test(acceptedType)) {
                return extension === acceptedType;
              }
              if (/\/\*$/.test(acceptedType)) {
                return baseType === acceptedType.replace(/\/\*$/, '');
              }
              if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                return type === acceptedType;
              }
              return false;
            });
        }));
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import "@/style/var.scss";
.upload-dragger {
  width: 300px;
  height: 160px;
  line-height: 160px;
  border-radius: 10px;
  background: #f3f3f3;
  border: 2px dashed $primaryColor;
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  .icon {
    width: 46px;
    height: 46px;
    margin: 0 23px;
    fill: $primaryColor;
  }
}
</style>
