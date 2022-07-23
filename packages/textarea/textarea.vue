<template>
  <div class="x-textarea" :class="[disabled?'is-disabled':'']">
    <textarea ref="refTextarea" :placeholder="placeholder" :value="value" :cols="cols" :rows="rows" :maxlength="maxlength" :form="form" :disabled="disabled" :readonly="readonly" @input="input" @focus="focus" @blur="blur" :style="textareaStyle"></textarea>
    <div class="max-length-box" v-if="maxlength!==undefined&&maxlength>0">{{`${n}/${maxlength}`}}</div>
  </div>
</template>
<script>
export default {
  name: 'XTextarea',
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
    focusColor: {
      type: String,
      default: "#0e80eb"
    },
    resize: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Number,
      default: 4
    },
    cols: {
      type: Number,
      default: 50
    },
    form: String,
  },
  data () {
    return {
      textareaStyle: {
        'border-color': '',
        'resize': this.resize ? 'auto' : 'none',
      },
      n: this.value.length || 0
    }
  },
  methods: {
    focus (e) {
      this.$emit('focus', e);
      this.textareaStyle['border-color'] = this.focusColor + ' !important';
    },
    blur (e) {
      this.$emit('blur', e);
      this.textareaStyle['border-color'] = '';
    },
    input () {
      this.$emit('input', this.$refs.refTextarea.value)
      this.n = this.$refs.refTextarea.value.length
      if (this.n >= this.maxlength) {
        this.n = this.maxlength
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./textarea.scss";
</style>
