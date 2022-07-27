import { expect } from 'chai'
import { fake } from 'sinon'
import { mount } from '@vue/test-utils'

import Input from '/packages/input/input.vue'

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    it('接受 type', () => {
      const wrapper = mount(Input, {
        propsData: {
          type: 'password'
        }
      })
      const input = wrapper.vm.$el.querySelector('input')
      expect(input.type).to.equal('password')
    })

    it('接受 placeholder', () => {
      const wrapper = mount(Input, {
        propsData: {
          placeholder: 'please input...'
        }
      })
      const input = wrapper.vm.$el.querySelector('input')
      expect(input.placeholder).to.equal('please input...')
    })

    it('接受 value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: 'hello'
        }
      })
      const input = wrapper.vm.$el.querySelector('input')
      expect(input.value).to.equal('hello')
    })

    it('接受 disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      const input = wrapper.vm.$el.querySelector('input')
      expect(input.disabled).to.equal(true)
    })

    it('接受 readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true
        }
      })
      const input = wrapper.vm.$el.querySelector('input')
      expect(input.readOnly).to.equal(true)
    })

    // it('接受 clearable', async done => {
    //   const wrapper = mount(Input, {
    //     propsData: {
    //       clearable: true,
    //       value: 'hello'
    //     }
    //   })
    //   const input = wrapper.vm.$el.querySelector('input')
    //   expect(input.value).is.not.empty
    //   await wrapper.find('.x-icon-close-circle').trigger('click')
    //   expect(wrapper.vm.$el.querySelector('input').value).is.empty
    //   done()
    // })
  })

  describe('事件', () => {
    it('支持 change/input/focus/blur 事件', () => {
      ;['change', 'input', 'focus', 'blur'].forEach(eventName => {
        const callback = fake()
        const wrapper = mount(Input, {
          listeners: {
            eventName: callback
          }
        })
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: { value: 'hello' },
          enumerable: true
        })
        let input = wrapper.find('input')
        input.trigger(eventName)
        expect(callback.calledWith(event.target))
      })
    })
  })
})
