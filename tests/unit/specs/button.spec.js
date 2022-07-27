import { expect } from 'chai'
import { fake } from 'sinon'
import { mount } from '@vue/test-utils'

import Button from '/packages/button/button.vue'

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.exist // 不是假值，就不报错
  })

  describe('props', () => {
    it('接受 type.', () => {
      const wrapper = mount(Button, {
        propsData: {
          type: 'link'
        }
      })
      expect(wrapper.classes()).contain('x-button-type-link')
    })

    it('接受 status.', () => {
      const wrapper = mount(Button, {
        propsData: {
          status: 'success'
        }
      })
      expect(wrapper.classes()).contain('x-button-status-success')
    })

    it('接受 shape.', () => {
      const wrapper = mount(Button, {
        propsData: {
          shape: 'round'
        }
      })
      expect(wrapper.classes()).contain('x-button-shape-round')
    })

    it('接受 size.', () => {
      const wrapper = mount(Button, {
        propsData: {
          size: 'lg'
        }
      })
      expect(wrapper.classes()).contain('x-button-size-lg')
    })

    it('接受 icon.', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'setting'
        }
      })
      expect(wrapper.find('use').attributes('href')).to.equal('#icon-setting')
    })

    it('接受 iconPosition', () => {
      const wrapper = mount(Button, {
        attachTo: document.body,
        propsData: {
          icon: 'setting'
        }
      })
      const left_icon = wrapper.find('svg').vm.$el
      expect(getComputedStyle(left_icon).order).to.eq('1')

      wrapper.setProps({ iconPosition: 'right' }) // 设置props 必须要在下一个事件环去取值
      wrapper.vm.$nextTick().then(() => {
        const right_icon = wrapper.find('svg').vm.$el
        expect(getComputedStyle(right_icon).order).to.eq('2')
      })
    })

    it('接受 loading.', () => {
      const wrapper = mount(Button, {
        propsData: {
          loading: true
        }
      })
      expect(wrapper.find('use').attributes('href')).to.equal('#icon-sync')
    })
  })

  describe('事件', () => {
    const callback = fake()
    it('点击 button 触发 click 事件', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'settings'
        },
        //为组件实例设置监听事件
        listeners: {
          click: callback
        }
      })
      const button = wrapper.find('button')
      //触发click 事件
      button.trigger('click')
      expect(callback.calledOnce)
    })
  })
})
