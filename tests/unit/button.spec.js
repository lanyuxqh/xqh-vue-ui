import { shallowMount } from '@vue/test-utils' // vue提供的快速测试的方法
import { expect } from 'chai'
import Button from '@/packages/button/button.vue'

describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => {
    // 测试当前组件运行在浏览器的情况
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'xqh-vue-ui'
      }
    })
    expect(wrapper.text()).to.eq('xqh-vue-ui')
  })
})
