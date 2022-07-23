<template>
  <div class="x-input" :class="inputClass">
    <x-icon v-if="prefixIcon" :icon="prefixIcon"></x-icon>
    <x-icon v-if="suffixIcon" :icon="suffixIcon"></x-icon>
    <input :type="showPassword?(passwordVisible?'text':'password'):type" :name="name" :value="value" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event.target.value)" @blur="$emit('blur',$event.target.value)" @change="$emit('change',$event)" ref="input" />
    <!-- @mousedown.native.prevent  不会失去焦点 -->
    <x-icon v-if="clearable && value" icon="close-circle" @click.native="$emit('input','')" @mousedown.native.prevent></x-icon>
    <!-- 先失去焦点 在获取焦点 -->
    <x-icon v-if="showPassword && value" :icon="!passwordVisible?'eye':'eye-close'" @click.native="changeStatus"></x-icon>
  </div>
</template>
<script>
import classNames from "@/utils/classNames";
export default {
  name: 'XInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    size: {
      type: String,
      default: 'md'
    },
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    inputClass () {
      return classNames([
        this.prefixIcon ? `x-input-prefix-icon` : '',
        (this.clearable || this.showPassword || this.suffixIcon) ? `x-input-suffix-icon` : '',
        `x-input-${this.size}`
      ])
    },
    showSuffix () {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    changeStatus () {
      this.passwordVisible = !this.passwordVisible;
      // 让它在下一个事件环获取焦点
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./input.scss";
</style>

